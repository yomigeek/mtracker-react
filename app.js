import express from 'express';
import path from 'path';

const app = express();

app.use(express.static('client'));

const port = process.env.PORT || '9000';

app.set('port', port);

app.get('*', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, 'client/index.html'));
   });

app.listen(port, () => console.log(`Running on localhost:${port}`));
