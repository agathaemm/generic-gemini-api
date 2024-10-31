import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import helmet from 'helmet';

const app = express();

app.use(cors());

app.use(helmet());

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, World');
});

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).send(error.message);
});

export default app;
