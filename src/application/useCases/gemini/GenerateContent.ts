import { GenerativeModel } from '../../../domain/entities/GenerativeModel';

export class GenerateContent {
  constructor(private model: GenerativeModel) {}

  async execute(prompt: string): Promise<string> {
    const response = await this.model.generateContent(prompt);
    return response.response.text();
  }
}
