// src/services/gptService.ts
import axios from 'axios';

const API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

export const generateText = async (prompt: string) => {
  try {
    const response = await axios.post('https://api.openai.com/v1/engines/davinci/completions', {
      prompt,
    }, {
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
      },
    });
    return response.data.choices[0].text;
  } catch (error) {
    console.error('Error calling OpenAI API:', error);
    return null;
  }
};
