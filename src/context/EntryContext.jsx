import { createContext, useContext, useState } from "react";

const EntryContext = createContext()

export const EntryProvider = ({ children }) => {
    const [messages, setMessages] = useState([])
    const value = {messages, setMessages}
    return <EntryContext.Provider value={value}>{children}</EntryContext.Provider>
}

export const useMessages = () => {
    const context = useContext(EntryContext) 
    if (context === undefined) {
        throw new Error('must use useMessages in EntryContext provider')
    }
    return context
}