import express from 'express';

const app = express();

app.use((req, res, next) => {
  console.log('The date is', new Date(), req.method, req.path);
  next();
});

app.get('/', (req, res) => {
  res.send('The path is "/"');
});

app.get('/notes', (req, res) => {
  res.send('The path is "/notes"');
});

app.post('/notes/123', (req, res) => {
  res.send('The path is "/notes/123"');
});

app.listen(8080, () => {
  console.log('Express server listening on port 8080');
});
