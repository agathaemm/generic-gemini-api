import { Router } from 'express';
import geminiController from '../controllers/geminiController';

const router = Router();

router.post('/generate-content', geminiController.generateContent);

export default router;
