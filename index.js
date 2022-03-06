import express  from 'express';
import { MyLogger } from './services/logger.js';
import 'dotenv';
import userRoutes from './routes/userRoutes.js';
import bodyParser from 'body-parser';
import httpContextData from './middlewares/httpContext';
import httpContext from 'express-http-context';
const app = express();

global.logger = new MyLogger;

app.use(httpContext.middleware);
app.use(httpContextData);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(userRoutes);


const port = process.env.PORT || 7000;
app.listen(port, () => {
    logger.info(`Server is listening on port: ${port}`);
}) 