import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import { logPageView } from '../utils/analytics';
import axios from 'axios';

const apiUrl = process.env.REACT_APP_BASE_URL;

const UserTable = () => {
    const Navigate = useNavigate()
    const [users, setUsers] = useState([]);
    const option = {
        timeZone: "Asia/Kolkata",
        hour12: true,
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    };

    useEffect(() => {
        // logPageView(); // Log the initial page view
        const auth = async () => {

            const token = await localStorage.getItem('token')
            if (!token) {
                // If there is no token, the user is not authenticated, handle this case
                console.log('User is not authenticated. Redirect to login or handle accordingly.');
                Navigate("/")
            } else
                getData();
        }
        auth()
    }, [Navigate]); // Fetch data when the component mounts

    const getData = async () => {
        try {
            const token = await localStorage.getItem('token')

            const response = await axios.get(`${apiUrl}/admin-data`, {
                headers: {
                    'Content-Type': 'application/json',
                    'x-auth-token': token,
                },
            });

            if (response.status === 200) {
                setUsers(response.data.data); // Update the users state with the fetched data
            } else {
                console.log('Request failed:', response.data);
                window.alert('Request failed:', response.data);
            }
        } catch (error) {
            if (error.response && error.response.status === 401) {
                // Token has expired, handle this case (redirect to login or use refresh token)
                window.alert('Token expired. Redirect to login or use refresh token.');
            } else {
                console.error('Network error:', error);
                window.alert('Network error:', error);
            }
        }
    };

    return (
        <div className="flex flex-col items-center bg-white py-16 w-full">
            <div className="py-4 bg-white">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8 bg-white w-full px-3">
                    <div className="min-w-full py-2 sm:px-6 lg:px-8">
                        <div className="">
                            <table className=" min-w-full border text-center text-sm font-light dark:border-neutral-500 text-xl font-[400] mx-3">
                                <caption className="caption-top py-4">
                                    Table : Usernames and Contact details
                                </caption>
                                <thead>
                                    <tr className='align-middle border-b dark:border-neutral-500'>
                                        <th scope="col" className="border border-slate-600 p-2">User Name</th>
                                        <th scope="col" className="border border-slate-600 p-2">Email</th>
                                        <th scope="col" className="border border-slate-600 p-2">Tel No.</th>
                                        <th scope="col" className="border border-slate-600 p-2">Joined At</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Array.isArray(users) &&
                                        users.map((element, index) => (
                                            <tr className="align-middle" key={index}>
                                                <td className="border border-slate-600 p-2">{element.username}</td>
                                                <td className="border border-slate-600 p-2">{element.email}</td>
                                                <td className="border border-slate-600 p-2">{element.tel}</td>
                                                <td className="border border-slate-600 p-2">{new Date(element.createdAt).toLocaleString('en-IN', option)}</td>
                                            </tr>
                                        ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div >
            </div >
        </div >
    );
};

export default UserTable;
