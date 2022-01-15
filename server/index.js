import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import middlewars from './middlewares/index.js';
import routes from './routes/index.js';

const app = express();
dotenv.config();

middlewars(app);
routes(app);

const CONNECTION_URL = process.env.CONNECTION_URL;
const PORT = process.env.PORT;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));