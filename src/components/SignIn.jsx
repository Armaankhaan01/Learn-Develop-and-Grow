import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import logo from "../assets/image/logo.jpg";
import { Helmet } from "react-helmet-async";
const apiUrl = process.env.REACT_APP_BASE_URL;

const SignIn = () => {
  const history = useNavigate();

  const [user, setUser] = useState({ username: "", password: "" });
  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;

    // Verify and update the input value based on the input name
    if (name === "username") {
      // Allow only alphanumeric characters in the username
      value = value.replace(/[^a-zA-Z0-9]/g, "");
    }

    setUser({ ...user, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, password } = user;
    try {
      const response = await axios.post(`${apiUrl}/signin`, {
        username,
        password,
      });
      // Extract the token from the response
      const token = await response.data.token;

      // Save the token in local storage or a secure HTTP cookie
      localStorage.setItem('token', token);
      localStorage.setItem('username', username);

      // Redirect to the admin data page or any other authenticated route
      if (username === "admin") {
        window.alert("You are signed in For Admin Page")
        history('/admin-data');
      } else {
        window.alert("You are signed in")
        history('/courses')
      }
    } catch (error) {
      // Handle login error, show error message, etc.
      console.error('Error during login:', error);
      window.alert('Invalid credentials. Please try again.');
    }
    setUser({ username: '', password: '' });
  };

  return (

    <div className="flex items-center justify-center h-screen bg-white py-4 px-4">
      <Helmet>
        <title>Sign In</title>
        <meta name='description' content='Personality Development Website' />
      </Helmet>
      <div className="w-full max-w-md mt-24">
        <img src={logo} alt="/" className="mx-auto mt-[-3rem] bg-white w-20 h-20 rounded-sm" />
        <form
          onSubmit={handleSubmit}
          className="w-full shadow-xl flex flex-col p-4 rounded-lg px-6 py-8 mx-auto my-auto"
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              value={user.username}
              name="username"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
              id="username"
              type="text"
              placeholder="Enter your username"
              autoComplete="off"
              onChange={handleInputs}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              value={user.password}
              name="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3"
              id="password"
              type="password"
              placeholder="********"
              autoComplete="off"
              onChange={handleInputs}
            />
          </div>
          <div className="grid grid-rows-2">
            <button
              className="bg-[red] hover:opacity-80 text-white font-bold px-10  mx-6 rounded"
              type="submit" disabled={!user.username || !user.password}
            >
              Sign In
            </button>
            <a
              className="flex mt-4 w-full mx-4 font-bold text-sm text-blue-500 hover:text-blue-800"
              href="/signup"
            >
              Don't have an account? Register Here.
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
