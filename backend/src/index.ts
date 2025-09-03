import express from 'express';
import roomRouter from './routes/room';

const app = express();

app.use('/api/room', roomRouter);

app.listen(3001, () => {
    console.log('Backend API listening on port 3001');
});