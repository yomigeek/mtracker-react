import express from 'express';
import path from 'path';

const app = express();

app.use(express.static('dist'));

const port = process.env.PORT || '9000';

app.set('port', port);

app.get('/*', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(port, () => (`Running on localhost:${port}`));
