import express from 'express';
import cors from 'cors';

const middlewars = (app) => {
    // bodyparser setup
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    app.use(cors());
    app.use((req, res, next) => {
        console.log(`Http req to; ${req.method} - ${req.originalUrl}`)
        next();
    })
}

export default middlewars;