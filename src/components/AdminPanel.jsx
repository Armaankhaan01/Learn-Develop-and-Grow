import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

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
        <div className="flex items-center justify-center h-100 bg-white px-4 py-16">

            <div className="table-auto py-8">
                <table className="table-bordered border-collapse border border-slate-500 p-10 text-xl">
                    <caption class="caption-top">
                        Table : user names and contact details
                    </caption>
                    <thead>
                        <tr className='align-middle p-8'>
                            <th className="col border border-slate-600 p-2">User Name</th>
                            <th className="col border border-slate-600 p-2">Contact Info</th>
                            <th className="col border border-slate-600 p-2">Joined At</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.isArray(users) &&
                            users.map((element, index) => (
                                <tr className="align-middle" key={index}>
                                    <td className="col border border-slate-600 p-2">{element.username}</td>
                                    <td className="col border border-slate-600 p-2">{element.email}</td>
                                    <td className="col border border-slate-600 p-2">{new Date(element.createdAt).toLocaleString('en-IN', option)}</td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default UserTable;
