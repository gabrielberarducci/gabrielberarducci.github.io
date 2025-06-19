
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { GEMINI_TEXT_MODEL, MOCK_API_KEY } from '../constants'; // MOCK_API_KEY is for placeholder only.

// IMPORTANT: In a real application, process.env.API_KEY MUST be used.
// The MOCK_API_KEY is only for enabling the code to be syntactically valid here.
// Ensure process.env.API_KEY is properly set in your deployment environment.
const apiKey = (typeof process !== 'undefined' && process.env && process.env.API_KEY) 
                ? process.env.API_KEY 
                : MOCK_API_KEY;

let ai: GoogleGenAI | null = null;

if (!apiKey || apiKey === "YOUR_GEMINI_API_KEY_HERE") {
  console.warn("Gemini API key is not configured or is using the placeholder. Gemini features will be disabled. Please set process.env.API_KEY in your environment.");
} else {
   ai = new GoogleGenAI({ apiKey });
}


export const generateText = async (prompt: string): Promise<string> => {
  if (!ai) {
    console.error("Gemini AI client not initialized. API key missing or invalid.");
    return "Gemini API not available. Please configure API key.";
  }
  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: GEMINI_TEXT_MODEL,
      contents: prompt,
    });
    return response.text;
  } catch (error) {
    console.error("Error generating text with Gemini:", error);
    return `Error from Gemini: ${error instanceof Error ? error.message : 'Unknown error'}`;
  }
};

export const generateBlogSection = async (topic: string, sectionType: string): Promise<string> => {
   if (!ai) return "Gemini API not available.";
  const prompt = `You are an expert Australian adventure travel and gear blogger. Write a concise, engaging, and keyword-rich blog section about "${topic}" focusing on ${sectionType}. Target an Australian audience. Use Australian vernacular where appropriate (e.g., 'ute', 'servo', 'arvo').`;
  return generateText(prompt);
};

// Example of how you might ask for JSON output (structure for illustration)
export const generateProductProsCons = async (productName: string): Promise<{ pros: string[], cons: string[] }> => {
  if (!ai) {
    console.error("Gemini AI client not initialized.");
    return { pros: ["API not available"], cons: ["Please configure API key"] };
  }
  const prompt = `Generate a list of 3-5 pros and 3-5 cons for the product "${productName}" for an Australian outdoor enthusiast. Return the response as a JSON object with keys "pros" (array of strings) and "cons" (array of strings). For example: {"pros": ["Durable", "Lightweight"], "cons": ["Expensive", "Limited stock"]}.`;
  
  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: GEMINI_TEXT_MODEL,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
      }
    });

    let jsonStr = response.text.trim();
    const fenceRegex = /^```(\w*)?\s*\n?(.*?)\n?\s*```$/s;
    const match = jsonStr.match(fenceRegex);
    if (match && match[2]) {
      jsonStr = match[2].trim();
    }
    
    const parsedData = JSON.parse(jsonStr);
    if (parsedData && Array.isArray(parsedData.pros) && Array.isArray(parsedData.cons)) {
      return parsedData;
    }
    return { pros: ["Failed to parse pros"], cons: ["Failed to parse cons"] };

  } catch (error) {
    console.error("Error generating or parsing product pros/cons:", error);
    return { pros: [`Error: ${error instanceof Error ? error.message : 'Unknown error'}`], cons: [] };
  }
};