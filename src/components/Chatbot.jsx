import React, { useState } from 'react';
import { styles } from "../styles";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const Chatbot = () => {
    const [messages, setMessages] = useState([]);
    const [userInput, setUserInput] = useState('');
    const [loading, setLoading] = useState(false);

    const appendMessage = (sender, content, role) => {
        const newMessage = { sender, content, role };
        setMessages(prevMessages => [...prevMessages, newMessage]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const trimmedInput = userInput.trim();
        if (trimmedInput === '') return;

        appendMessage('You', trimmedInput, 'user');
        setUserInput('');

        try {
            setLoading(true);

            const response = await fetch('https://nodejs-chat-bot.vercel.app/chat/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: trimmedInput }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();

            appendMessage('Bot', data.message, 'assistant');
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className="flex items-center justify-center">
                <motion.div variants={textVariant()}>
                    <p className={`${styles.sectionSubText} `}>Ask the Chatbot any questions about me!</p>
                    <h2 className={`${styles.sectionHeadText}`}>Chatbot.</h2>
                </motion.div>
            </div>
            <section id="chatbot" className={`py-12 ${styles.paddingX} ${styles.paddingY} ${styles.sectionSubText}`}>
                <div className="max-w-4xl mx-auto">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 0.5 }} 
                        className="bg-white rounded-lg overflow-hidden shadow-lg"
                    >
                        <div className="bg-tertiary chat-box h-80 overflow-y-auto px-4 py-6">
                            {messages.map((msg, index) => (
                                <motion.div 
                                    key={index} 
                                    className={`message ${msg.role}`}
                                    initial={{ opacity: 0 }} 
                                    animate={{ opacity: 1 }} 
                                    transition={{ duration: 0.5 }}
                                >
                                    <strong>{msg.sender}:</strong> {msg.content}
                                </motion.div>
                            ))}
                        </div>
                        <form onSubmit={handleSubmit} className="bg-tertiary flex items-center border-t border-gray-200 px-4 py-3">
                            <input
                                type="text"
                                value={userInput}
                                onChange={(e) => setUserInput(e.target.value)}
                                placeholder="Type your message..."
                                className="flex-1 border-2 border-gray-200 rounded-full py-2 px-4 mr-2 focus:outline-none"
                            />
                            <button type="submit" className="bg-primary text-white rounded-full px-4 py-2 hover:bg-primary-dark focus:outline-none">
                                {loading ? 'Sending...' : 'Send'}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </section>
        </>
    );
}

export default Chatbot;