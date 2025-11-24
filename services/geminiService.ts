import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { AI_SYSTEM_INSTRUCTION } from "../constants";

let aiClient: GoogleGenAI | null = null;

// Initialize blindly with env var as per instructions
if (process.env.API_KEY) {
  aiClient = new GoogleGenAI({ apiKey: process.env.API_KEY });
}

export const sendMessageToGemini = async (
  history: { role: 'user' | 'model'; text: string }[],
  newMessage: string
): Promise<string> => {
  
  if (!aiClient) {
    return "L'API Key Gemini n'est pas configurée dans l'environnement. Veuillez l'ajouter au fichier .env ou à la configuration du projet.";
  }

  try {
    const model = "gemini-2.5-flash";
    
    // Construct the prompt with history manually to keep it simple and stateless for this service wrapper
    // or use chat session. Let's use generateContent with system instruction.
    
    // Build chat history context string
    let conversationContext = "";
    history.forEach(msg => {
      conversationContext += `${msg.role === 'user' ? 'User' : 'Assistant'}: ${msg.text}\n`;
    });
    conversationContext += `User: ${newMessage}\nAssistant:`;

    const response: GenerateContentResponse = await aiClient.models.generateContent({
      model: model,
      contents: newMessage, // In a real chat app, we'd pass full history, but for simple QA context + system instruction is strong.
      config: {
        systemInstruction: AI_SYSTEM_INSTRUCTION,
        // Using context window logic often requires maintaining a ChatSession, 
        // but here we just do single turn Q&A powered by the system prompt context 
        // effectively for a portfolio "Ask me anything".
      }
    });

    return response.text || "Désolé, je n'ai pas pu générer de réponse.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Une erreur est survenue lors de la communication avec l'IA. Veuillez réessayer plus tard.";
  }
};