import { createContext, useState } from "react";

const EntryContext = createContext()

export const EntryProvider = ({ children }) => {
    const [messages, setMessages] = useState([])
    const value = {messages, setMessages}
    return <EntryContext.Provider value={value}>{children}</EntryContext.Provider>
}