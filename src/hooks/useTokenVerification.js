import { useState, useEffect } from 'react';
import axios from 'axios';

const useTokenVerification = () => {
    const [loading, setLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const verifyTokenWithServer = async (token) => {
        try {
            const response = await axios.post('http://localhost:5000/user-verification', { token });
            setLoading(false);
            return true;
        } catch (error) {
            return false;
        }
    };

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            verifyTokenWithServer(token)
                .then((isValid) => {
                    setIsAuthenticated(isValid);
                    setLoading(false);
                })
                .catch((error) => {
                    console.log("Catch error", error);
                    setIsAuthenticated(false);
                    setLoading(false);
                });
        } else {
            setIsAuthenticated(false);
            setLoading(false);
        }
    }, []);

    return { loading, isAuthenticated };
}

export default useTokenVerification;
