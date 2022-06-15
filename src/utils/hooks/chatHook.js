import { useContext } from 'react';
import { ChatContext } from '../context/ChatContext';

const useChat = () => {
    const { message, setMessage, messageList, setMessageList } =
        useContext(ChatContext);

    return { message, setMessage, messageList, setMessageList };
};

export { useChat };
