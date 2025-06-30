import { createContext, useState } from "react";
import runChat from "../config/gemini";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [chat, setChat] = useState([]); // Array of { type: 'user' | 'ai', message: string }

  const onSent = async (prompt) => {
    const userMsg = { type: "user", message: prompt };
    setChat(prev => [...prev, userMsg]);

    const aiReply = await runChat(prompt);

    const aiMsg = { type: "ai", message: aiReply };
    setChat(prev => [...prev, aiMsg]);
  };

  const contextValue = {
    chat,
    onSent,
  };

  return (
    <Context.Provider value={contextValue}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
