// Import the necessary libraries
import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } from "@google/generative-ai";
  
  // Load the API key from environment variables
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  
  // Initialize the GoogleGenerativeAI instance
  const genAI = new GoogleGenerativeAI(apiKey);
  
  // Get the generative model
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  // Define the generation configuration
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };
  
  // Define the prompt
//   const prompt = "Your prompt here";
  
  // Main function to run the generative AI chat session
  async function run(prompt) {
    // Start a new chat session with the specified model and configuration
    const chatSession = model.startChat({
      generationConfig,
      history: [],
    });
  
    try {
      // Send a message to the chat session
      const result = await chatSession.sendMessage(prompt);
      
      // Ensure result is properly formatted
      if (result && result.response) {
        console.log(result.response.text());
      } else {
        console.error("Unexpected response format:", result);
      }
    } catch (error) {
      console.error("Error during chat session:", error);
    }
  }
  
  // Export the run function as the default export
  export default run;
  