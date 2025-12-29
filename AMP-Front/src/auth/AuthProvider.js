import { useContext, createContext, useState, useEffect } from "react";
import { AiFillYahoo } from "react-icons/ai";

const AuthContext = createContext({
    isAuthenticated: false,

})

export function AuthProvider({children}){
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    return (
        <AuthContext.Provider value={{isAuthenticated}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);