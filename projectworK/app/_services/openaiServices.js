import { Configuration, OpenAIApi } from "openai";

// Initialize OpenAI API configuration
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

if (!process.env.OPENAI_API_KEY) {
  console.error("Error: Missing OPENAI_API_KEY in environment variables.");
  throw new Error("Missing OpenAI API key. Please check your .env file.");
}

const openai = new OpenAIApi(configuration);

/**
 * Function to generate a response using OpenAI's completion model.
 *
 * @param {string} prompt - The user's input message to send to OpenAI.
 * @returns {Promise<string>} - The generated response from OpenAI.
 */
export const generateOpenAIResponse = async (prompt) => {
  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003", // OpenAI model
      prompt: prompt,            // User's message
      max_tokens: 1024,          // Maximum tokens in response
      temperature: 0.7,          // Creativity level
    });

    // Debug: Log the response
    console.log("OpenAI API Response:", response.data);

    // Extract and return the text response
    const assistantResponse = response.data.choices[0]?.text.trim();
    return assistantResponse || "No response generated.";
  } catch (error) {
    console.error("Error generating OpenAI response:", error.response?.data || error.message);
    throw new Error("Failed to communicate with OpenAI.");
  }
};

