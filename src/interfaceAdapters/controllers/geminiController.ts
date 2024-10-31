import { Request, Response } from 'express';

import { geminiGateway } from '../../app';
import { GenerateContent } from '../../application/useCases/gemini/GenerateContent';

async function generateContent(req: Request, res: Response) {
  const { prompt } = req.body;

  console.log('prompt', prompt);

  const generateContentUseCase = new GenerateContent(geminiGateway);
  const result = await generateContentUseCase.execute(prompt);

  if (result) {
    res.status(200).json(result);
  } else {
    res.status(400);
  }
}

export default {
  generateContent,
};
