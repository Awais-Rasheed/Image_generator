import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI('YOUR_API_KEY'); //get from google generative ai
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

const TextGenerator = async (promptText) => {
    try {
        console.log({ content: promptText })
        const result = await model.generateContent(promptText);
        const response = result.response;

        const text = await response.text();
        console.log({ generated: text })
        return text;
    } catch (error) {
        console.error('Error generating content:', error);
        throw error;
    }
};

export default TextGenerator;
