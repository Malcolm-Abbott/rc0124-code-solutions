import express from 'express';
import { ClientError, errorMiddleware } from './lib/index.js';
import pg from 'pg';

const app = express();

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/pagila',
  ssl: {
    rejectUnauthorized: false,
  },
});

app.get('/api/films', async (req, res, next) => {
  try {
    const sql = `
      select "title",
             "filmId"
        from "films"
        order by "replacementCost" desc;
    `;
    const result = await db.query(sql);
    const films = result.rows;
    res.send(films);
  } catch (err) {
    next(err);
  }
});

app.get('/api/film', async (req, res, next) => {
  try {
    const { filmId } = req.query;
    if (filmId === undefined) throw new ClientError(400, 'filmId is required');
    const sql = `
      select *
        from "films"
        where "filmId" = $1;
    `;
    const params = [filmId as string];
    const result = await db.query(sql, params);
    const film = result.rows[0];
    if (!film) throw new ClientError(404, `film ${filmId} not found`);
    res.send(film);
  } catch (err) {
    next(err);
  }
});

app.put('/api/film', async (req, res, next) => {
  try {
    const { title, filmId } = req.query;
    if (title === undefined) throw new ClientError(404, 'a title is required');
    if (filmId === undefined)
      throw new ClientError(404, 'a filmId is required');
    const sql = `
      update "films"
        set "title" = $1
        where "filmId" = $2;
    `;
    const params = [title as string, filmId as string];
    await db.query(sql, params);
    res.send('Update Complete.');
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

app.listen(8080, () => {
  console.log('listening on port 8080');
});
