import cors from 'cors';
import express from 'express';
import connectDB from './db.ts';
import dotenv from 'dotenv';
dotenv.config({ path: '../.env' });

import ratingsRouter from './router/ratings.ts';
import usersRouter from './router/user.ts';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();

app.use('/rating', ratingsRouter);
app.use('/user', usersRouter)

app.listen(5000, () => {
    console.log('Houston, we have take off on port 5000.')
})