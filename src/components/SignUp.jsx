import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import logo from "../assets/image/logo.jpg";

const apiUrl = process.env.REACT_APP_BASE_URL;

const SignUp = () => {
  const [user, setUser] = useState({ username: "", email: "", tel: "", password: "" });
  const [showWarning, setShowWarning] = useState(false);
  const history = useNavigate();
  let name, value;

  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;

    // Verify and update the input value based on the input name
    if (name === "username") {
      // Allow only alphanumeric characters in the username
      value = value.replace(/[^a-zA-Z0-9]/g, "");
    } else if (name === "email") {
      // Remove spaces from the email
      value = value.replace(/\s/g, "");
    } else if (name === "tel") {
      // Allow only numbers in the phone number
      value = value.replace(/\D/g, "");
    } else if (name === "password") {
      // Enforce password to have at least 8 characters and contain one number
      setShowWarning(!/(?=.*\d)(?=.*[a-zA-Z]).{8,}/.test(value));
    }

    setUser({ ...user, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();
    const { username, email, tel, password } = user;

    try {
      if (showWarning) {
        window.alert("Password must contain at least 8 characters and one number.");
        return;
      }

      const res = await fetch(`${apiUrl}/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, email, tel, password })
      });

      const data = await res.json();

      if (res.ok) {
        // Request was successful (status code 200-299)
        window.alert("Successful Registration");
        console.log("Successful Registration");
        history("/signin");
      } else {
        // Request failed (status code outside 200-299)
        const errorData = data.error || "Unknown Error";
        window.alert(errorData);
        console.log(errorData);
      }
    } catch (error) {
      // Network error or other errors
      console.error(error);
      window.alert("Network Error. Please try again later.");
      // Handle the error appropriately (e.g., show an error message to the user)
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-white px-4 py-16">
      <div className="w-full max-w-md mt-24">
        <img
          src={logo}
          alt="/"
          className="mx-auto mt-[-1rem] bg-white w-20 h-20 rounded-sm"
        />

        <form
          className="bg-white shadow-md rounded px-10 py-8 mx-auto my-auto"
          method="POST"
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
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Enter your username"
              autoComplete="off"
              onChange={handleInputs}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              value={user.email}
              name="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="example@email.com"
              autoComplete="off"
              required
              onChange={handleInputs}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="tel"
            >
              Phone Number
            </label>
            <input
              value={user.tel}
              name="tel"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="tel"
              type="text" pattern="[0-9]*"
              placeholder="7845213694"
              autoComplete="on"
              required
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
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight"
              id="password"
              type="password"
              placeholder="********"
              autoComplete="off"
              onChange={handleInputs}
            />
          </div>
          <div className="grid grid-rows-2">
            <button
              className="bg-[red] hover:opacity-80 text-white font-bold  px-10  mx-6 rounded-md"
              type="submit" onClick={PostData}
            >
              Sign Up
            </button>
            <a
              className="flex mt-4 w-full mx-4 font-bold text-sm text-blue-500 hover:text-blue-800 leading-tight"
              href="/signin"
            >
              Already have an account? Sign In
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
