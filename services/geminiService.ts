import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { SYSTEM_INSTRUCTION } from "../constants";

// Initialize the Gemini client
// Note: In a real production app, you should use a backend proxy to hide the API key.
// For this demo, we assume the environment variable is safe or restricted by domain.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const sendMessageToGemini = async (
  userMessage: string,
  history: { role: string; text: string }[]
): Promise<string> => {
  try {
    // Filter history to map to Gemini's expected format if necessary, 
    // though here we will just use a fresh generateContent call with context 
    // because we want to enforce the system instruction strongly each time 
    // or maintain a simple chat session.
    
    // For a simple portfolio bot, we can use the Chat API.
    
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
      history: history.map(h => ({
        role: h.role === 'user' ? 'user' : 'model',
        parts: [{ text: h.text }]
      }))
    });

    const result: GenerateContentResponse = await chat.sendMessage({
      message: userMessage
    });

    return result.text || "I'm sorry, I couldn't generate a response.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Currently, I am unable to connect to the AI service. Please try again later or contact me via email.";
  }
};
