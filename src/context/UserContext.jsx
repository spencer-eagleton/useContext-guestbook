import { createContext, useContext, useState } from 'react'

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState('')
    const value = { user, setUser }
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export const useUser = () => {
    const context = useContext(UserContext)

    if (context === undefined) {
        throw new Error('use useUser inside a UserProvider')
    }
    return context
}