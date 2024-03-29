import PropTypes from 'prop-types';
import { useState, useContext, createContext } from "react";

const AuthContext = createContext();

export default function AuthProvider({ children }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const login = async (email, password) => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                console.error('Login failed:', response.data.message);
            } else {
                setIsLoggedIn(true);
            }
        } catch (error) {
            console.error('Login error:', error);
        }
    };

    const logout = () => setIsLoggedIn(false);

    return <AuthContext.Provider value={{ login, logout, isLoggedIn }}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);

AuthProvider.propTypes = {
    children: PropTypes.any,
};