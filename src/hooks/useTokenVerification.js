import { useState, useEffect } from 'react';
import axios from 'axios';
const apiurl = process.env.REACT_APP_BASE_URL
const useTokenVerification = () => {
    const [loading, setLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const verifyTokenWithServer = async (token) => {
        try {
            const response = await axios.post(`${apiurl}/user-verification`, { token });
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
                .then(async (isValid) => {
                    setIsAuthenticated(isValid);
                    setLoading(false);
                    if (isValid === false) {
                        try {
                            const response = await axios.post(`${apiurl}/logout`, { token });
                            // Remove the token from local storage
                            localStorage.removeItem('token');
                            localStorage.removeItem('username');
                            window.alert("Session Not Found, Your are logged out. Please login again. ")
                        } catch (error) {
                            window.alert("There Was an Error in Logout")
                        }
                    }
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
