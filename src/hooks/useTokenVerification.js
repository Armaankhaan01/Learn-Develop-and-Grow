import { useState, useEffect } from 'react';
import axios from 'axios';
const apiurl = process.env.REACT_APP_BASE_URL
const useTokenVerification = () => {
    const [loading, setLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const verifyTokenWithServer = async (token) => {
        try {
            await axios.post(`${apiurl}/user-verification`, { token });
            setLoading(false);
            return true;
        } catch (error) {
            return false;
        }
    };
    useEffect(() => {
        const auth = async () => {
            const token = localStorage.getItem('token');
            const isValid = await verifyTokenWithServer(token);
            setIsAuthenticated(isValid);
            setLoading(false);
            if (!isValid) {
                window.alert("Session Not Found, You are logged out. Please login again.");
            }
        };
        auth();
    }, []);

    return { loading, isAuthenticated };
}

export default useTokenVerification;
