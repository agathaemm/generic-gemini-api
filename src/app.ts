import express, { Request, Response, NextFunction } from 'express';
import helmet from 'helmet';
import cors from 'cors';

import { GeminiAIGateway } from './interfaces/gateways/GeminiAIGateway';
import geminiRoutes from './interfaceAdapters/routes/geminiRoutes';

const apiKey = process.env.GEMINI_API_KEY || '';
export const geminiGateway = new GeminiAIGateway(apiKey);

const app = express();

app.use(cors());

app.use(helmet());

app.use(express.json());

app.use('/api', geminiRoutes);

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).send(error.message);
});

export default app;
