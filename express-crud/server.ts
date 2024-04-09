import express from 'express';
import pg from 'pg';
import { ClientError, errorMiddleware } from './lib';

type Grade = {
  gradeId?: number;
  name: string;
  course: string;
  score: number;
};

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false,
  },
});

const app = express();

app.use(express.json());

app.get('/api/grades', async (req, res, next) => {
  try {
    const sql = `
      select *
        from "grades";
    `;
    const result = await db.query<Grade>(sql);
    const grades = result.rows;
    res.status(200).json(grades);
  } catch (err) {
    next(err);
  }
});

app.get('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const { gradeId } = req.params;
    if (!Number.isInteger(+gradeId))
      throw new ClientError(400, 'actorId must be a number');
    const sql = `
      select *
        from "grades"
        where "gradeId" = $1;
    `;
    const params = [gradeId as string];
    const result = await db.query<Grade>(sql, params);
    const [grade] = result.rows;
    if (!grade) throw new ClientError(404, `Grade ${gradeId} not found.`);
    res.status(200).json(grade);
  } catch (err) {
    next(err);
  }
});

app.post('/api/grades', async (req, res, next) => {
  try {
    const { name, course, score } = req.body;
    if (!name || !course || !score)
      throw new ClientError(400, 'Name, course and score are required');
    if (!Number.isInteger(+score) || +score < 0 || +score > 100)
      throw new ClientError(400, 'Score must be a number from 0 to 100');
    const sql = `
      insert into "grades" ("name", "course", "score")
        values($1, $2, $3)
        returning *;
    `;
    const params = [name as string, course as string, score as string];
    const result = await db.query<Grade>(sql, params);
    const [grade] = result.rows;
    if (!grade)
      throw new ClientError(
        404,
        `Grade: ${name}, ${course}, ${score} not found.`
      );
    res.status(201).json(grade);
  } catch (err) {
    next(err);
  }
});

app.put('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const { gradeId } = req.params;
    if (!Number.isInteger(+gradeId))
      throw new ClientError(400, 'gradeId must be a number');
    const { name, course, score } = req.body;
    if (!name || !course || !score)
      throw new ClientError(400, 'Name, course and score are required');
    if (!Number.isInteger(+score) || +score < 0 || +score > 100)
      throw new ClientError(400, 'Score must be a number from 0 to 100');
    const sql = `
      update "grades"
        set "name" = $1,
            "course" = $2,
            "score" = $3
        where "gradeId" = $4
        returning *;
    `;
    const params = [
      name as string,
      course as string,
      score as string,
      gradeId as string,
    ];
    const result = await db.query<Grade>(sql, params);
    const [grade] = result.rows;
    if (!grade) throw new ClientError(404, `Grade ${gradeId} not found.`);
    res.status(200).json(grade);
  } catch (err) {
    next(err);
  }
});

app.delete('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const { gradeId } = req.params;
    if (!Number.isInteger(+gradeId))
      throw new ClientError(400, 'gradeId must be a number');
    const sql = `
      delete
        from "grades"
        where "gradeId" = $1
        returning *;
    `;
    const params = [gradeId as string];
    const result = await db.query<Grade>(sql, params);
    const [grade] = result.rows;
    if (!grade) throw new ClientError(404, `Grade ${gradeId} not found.`);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

app.listen(8080, () => {
  console.log('listening on port 8080');
});
