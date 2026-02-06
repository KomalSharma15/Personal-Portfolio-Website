
import { GoogleGenAI } from "@google/genai";
import { PORTFOLIO_DATA } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });

export const askResumeAI = async (userMessage: string) => {
  const model = "gemini-3-flash-preview";
  
  const systemInstruction = `
    You are the AI Assistant for ${PORTFOLIO_DATA.name}'s professional portfolio website.
    Your job is to answer recruiter or visitor questions about ${PORTFOLIO_DATA.name} using the following data:
    
    Summary: ${PORTFOLIO_DATA.summary}
    Experience: ${JSON.stringify(PORTFOLIO_DATA.experiences)}
    Projects: ${JSON.stringify(PORTFOLIO_DATA.projects)}
    Skills: ${JSON.stringify(PORTFOLIO_DATA.skills)}
    Education: ${JSON.stringify(PORTFOLIO_DATA.education)}
    
    Guidelines:
    - Be professional, polite, and enthusiastic.
    - If someone asks for contact info, provide ${PORTFOLIO_DATA.email} or mention the contact section.
    - If you don't know the answer based on the data provided, say "I don't have that specific information, but you can reach out to ${PORTFOLIO_DATA.name} directly via email."
    - Keep responses concise (max 3 sentences) unless asked for details about a project.
  `;

  try {
    const response = await ai.models.generateContent({
      model,
      contents: userMessage,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    return response.text || "I'm sorry, I couldn't process that. Please try again.";
  } catch (error) {
    console.error("AI Assistant Error:", error);
    return "The AI assistant is currently sleeping. Please try reaching out via the contact form!";
  }
};
