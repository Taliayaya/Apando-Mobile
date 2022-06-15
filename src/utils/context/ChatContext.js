import React, { createContext, useState } from 'react';

/**
 * Creating a new Context for accessing these chat state everywhere.
 *
 * Basically used to reply to a message, or avoid having to make a new
 * request to the server and not lose these states
 */

const ChatContext = createContext();

const ChatProvider = ({ children }) => {
    const [message, setMessage] = useState('');
    const [messageList, setMessageList] = useState([]);

    return (
        <ChatContext.Provider
            value={{ message, setMessage, messageList, setMessageList }}
        >
            {children}
        </ChatContext.Provider>
    );
};

export { ChatContext, ChatProvider };
