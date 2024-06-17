import dotenv from 'dotenv';
import OpenAI  from 'openai';
import readlineSync from 'readline-sync';
import { textData } from './data.js';

dotenv.config();

console.log('OpenAI API Key:', process.env.OPENAI_API_KEY);  // Debug log

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});


let conversationHistory = [];

async function main() {
    try {
        while(true){
            const userInput = readlineSync.question('You: ')
            
            conversationHistory.push({role: 'assistant', content: textData[0] });

            conversationHistory.push({ role: 'user', content: userInput });
            
            const chatCompletion = await openai.chat.completions.create({
                model: 'gpt-3.5-turbo',
                messages: conversationHistory,
            });

            const responseMessage = chatCompletion.choices[0].message.content;
            
            conversationHistory.push({ role: 'system', content: responseMessage });
            
            console.log('Chatbot:', responseMessage);
        }
    } catch (error) {
        console.error('Error during chat completion:', error);
    }
}

main();