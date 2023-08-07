import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../App.css";
import { Helmet } from "react-helmet-async";
const apiUrl = process.env.REACT_APP_BASE_URL;

const UserTable = () => {
  const Navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [inTouchUsers, setInTouchUsers] = useState([]);
  const [loading, setLoading] = useState(true);
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
      const username = await localStorage.getItem("username");

      if (username === "admin") {
        getData();
      } else {
        Navigate("/dashboard");
      }
    };
    auth();
    const pollingInterval = 30000;

    // Start polling with setInterval
    const intervalId = setInterval(() => {
      getData();
    }, pollingInterval);
    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [Navigate]);

  const getData = async () => {
    try {
      const token = await localStorage.getItem("token");

      const response = await axios.get(`${apiUrl}/admin-data`, {
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": token,
        },
      });

      if (response.status === 200) {
        setUsers(response.data.data);
        setInTouchUsers(response.data.getInTouch);
        setLoading(false);
        // Update the users state with the fetched data
      } else {
        console.log("Request failed:", response.data);
        window.alert("Request failed:", response.data);
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        // Token has expired, handle this case (redirect to login or use refresh token)
        window.alert("Token expired. Redirect to login or use refresh token.");
        setLoading(false);
      } else {
        window.alert("Network error:", error);
      }
    }
  };
  if (loading) {
    return (
      <div className="flex flex-col items-center bg-white py-16 w-full">
        <Helmet>
          <title>Loading...</title>
        </Helmet>

        <div className="flex flex-col items-center bg-white py-16 w-full">
          <div className="flex flex-col items-center bg-white py-16 w-full ">
            <div className="py-4 bg-white">
              <div className="lds-roller">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
          <p className="ml-6 my-6 text-2xl">Loading ....</p>
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-col items-center bg-white py-16 w-full">
      <Helmet>
        <title>Admin Panel</title>
      </Helmet>
      <div className="py-4 bg-white mx-8">
        <div className=" sm:-mx-6 lg:-mx-8 bg-white w-full md:px-3 lg:px-3">
          <div className="flex md:flex-col lg:flex-col items-center overflow-auto h-full w-[100vw] py-2 sm:px-6 lg:px-8">
            <table className="border text-center text-md font-light dark:border-neutral-500 font-[500]">
              <caption className="caption-top py-4 text-lg md:text-3xl font-bold">
                Table : All User's Contact details
              </caption>
              <thead>
                <tr className="align-middle border-b dark:border-neutral-500">
                  <th scope="col" className="border border-slate-600 p-2">
                    User Name
                  </th>
                  <th scope="col" className="border border-slate-600 p-2">
                    Email
                  </th>
                  <th scope="col" className="border border-slate-600 p-2">
                    Tel No.
                  </th>
                  <th scope="col" className="border border-slate-600 p-2">
                    Joined At
                  </th>
                </tr>
              </thead>
              <tbody>
                {Array.isArray(users) &&
                  users.map((element, index) => (
                    <tr className="align-middle" key={index}>
                      <td className="border border-slate-600 p-2">
                        {element.username}
                      </td>
                      <td className="border border-slate-600 p-2">
                        {element.email}
                      </td>
                      <td className="border border-slate-600 p-2">
                        {element.tel}
                      </td>
                      <td className="border border-slate-600 p-2">
                        {new Date(element.createdAt).toLocaleString(
                          "en-IN",
                          option
                        )}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
        <div className="py-4 bg-white mx-8">
        <div className=" sm:-mx-6 lg:-mx-8 bg-white w-full md:px-3 lg:px-3">
          <div className="flex md:flex-col lg:flex-col items-center overflow-auto h-full w-[100vw] py-2 sm:px-6 lg:px-8">
            <table className="border text-center text-md font-light dark:border-neutral-500 font-[500]">
              <caption className="caption-top py-4 text-lg md:text-3xl font-bold">
                Table : Users applied for Premium Course
              </caption>
              <thead>
                <tr className="align-middle border-b dark:border-neutral-500">
                  <th scope="col" className="border border-slate-600 p-2">
                    User Name
                  </th>
                  <th scope="col" className="border border-slate-600 p-2">
                    Email
                  </th>
                  <th scope="col" className="border border-slate-600 p-2">
                    Tel No.
                  </th>
                  <th scope="col" className="border border-slate-600 p-2">
                    Joined At
                  </th>
                  <th scope="col" className="border border-slate-600 p-2">
                    Applied At
                  </th>
                </tr>
              </thead>
              <tbody>
                {Array.isArray(users) &&
                  users.map((element, index) =>
                    element.appliedForPremium === true ? (
                      <tr className="align-middle" key={index}>
                        <td className="border border-slate-600 p-2">
                          {element.username}
                        </td>
                        <td className="border border-slate-600 p-2">
                          {element.email}
                        </td>
                        <td className="border border-slate-600 p-2">
                          {element.tel}
                        </td>
                        <td className="border border-slate-600 p-2">
                          {new Date(element.createdAt).toLocaleString(
                            "en-IN",
                            option
                          )}
                        </td>
                        <td className="border border-slate-600 p-2">
                          {new Date(element.appliedPremiumAt).toLocaleString(
                            "en-IN",
                            option
                          )}
                        </td>
                      </tr>
                    ) : null
                  )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
        <div className="py-4 bg-white mx-8">
        <div className=" sm:-mx-6 lg:-mx-8 bg-white w-full md:px-3 lg:px-3">
          <div className="flex md:flex-col lg:flex-col items-center overflow-auto h-full w-[100vw] py-2 sm:px-6 lg:px-8">
            <table className="border text-center text-md font-light dark:border-neutral-500 font-[500]">
              <caption className="caption-top py-4 text-lg md:text-3xl font-bold">
                Table : Users applied for Standard Course
              </caption>
              <thead>
                <tr className="align-middle border-b dark:border-neutral-500">
                  <th scope="col" className="border border-slate-600 p-2">
                    User Name
                  </th>
                  <th scope="col" className="border border-slate-600 p-2">
                    Email
                  </th>
                  <th scope="col" className="border border-slate-600 p-2">
                    Tel No.
                  </th>
                  <th scope="col" className="border border-slate-600 p-2">
                    Joined At
                  </th>
                  <th scope="col" className="border border-slate-600 p-2">
                    Applied At
                  </th>
                </tr>
              </thead>
              <tbody>
                {Array.isArray(users) &&
                  users.map((element, index) =>
                    element.appliedForStandard === true ? (
                      <tr className="align-middle" key={index}>
                        <td className="border border-slate-600 p-2">
                          {element.username}
                        </td>
                        <td className="border border-slate-600 p-2">
                          {element.email}
                        </td>
                        <td className="border border-slate-600 p-2">
                          {element.tel}
                        </td>
                        <td className="border border-slate-600 p-2">
                          {new Date(element.createdAt).toLocaleString(
                            "en-IN",
                            option
                          )}
                        </td>
                        <td className="border border-slate-600 p-2">
                          {new Date(element.appliedStandardAt).toLocaleString(
                            "en-IN",
                            option
                          )}
                        </td>
                      </tr>
                    ) : null
                  )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
        <div className="py-4 bg-white mx-8">
        <div className=" sm:-mx-6 lg:-mx-8 bg-white w-full md:px-3 lg:px-3">
          <div className="flex md:flex-col lg:flex-col items-center overflow-auto h-full w-[100vw] py-2 sm:px-6 lg:px-8">
            <table className="border text-center text-md font-light dark:border-neutral-500 font-[500]">
              <caption className="caption-top py-4 text-lg md:text-3xl font-bold">
                Table : Users not applied in any Courses
              </caption>
              <thead>
                <tr className="align-middle border-b dark:border-neutral-500">
                  <th scope="col" className="border border-slate-600 p-2">
                    User Name
                  </th>
                  <th scope="col" className="border border-slate-600 p-2">
                    Email
                  </th>
                  <th scope="col" className="border border-slate-600 p-2">
                    Tel No.
                  </th>
                  <th scope="col" className="border border-slate-600 p-2">
                    Joined At
                  </th>
                </tr>
              </thead>
              <tbody>
                {Array.isArray(users) &&
                  users.map((element, index) => {
                    const hasAppliedForStandard =
                      element.appliedForStandard === true;
                    const hasAppliedForPremium =
                      element.appliedForPremium === true;

                    // Check if user has not applied for both standard and premium courses
                    if (!hasAppliedForStandard && !hasAppliedForPremium) {
                      return (
                        <tr className="align-middle" key={index}>
                          <td className="border border-slate-600 p-2">
                            {element.username}
                          </td>
                          <td className="border border-slate-600 p-2">
                            {element.email}
                          </td>
                          <td className="border border-slate-600 p-2">
                            {element.tel}
                          </td>
                          <td className="border border-slate-600 p-2">
                            {new Date(element.createdAt).toLocaleString(
                              "en-IN",
                              option
                            )}
                          </td>
                        </tr>
                      );
                    } else {
                      // Return null for users who have applied for either standard or premium
                      return null;
                    }
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
       <div className="py-4 bg-white mx-8">
        <div className=" sm:-mx-6 lg:-mx-8 bg-white w-full md:px-3 lg:px-3">
          <div className="flex md:flex-col lg:flex-col items-center overflow-auto h-full w-[100vw] py-2 sm:px-6 lg:px-8">
            <table className="border text-center text-md font-light dark:border-neutral-500 font-[500]">
              <caption className="caption-top py-4 text-lg md:text-3xl font-bold">
                Table : Users applied for Get In Touch
              </caption>
              <thead>
                <tr className="align-middle border-b dark:border-neutral-500">
                  <th scope="col" className="border border-slate-600 p-2">
                    User Name
                  </th>
                  <th scope="col" className="border border-slate-600 p-2">
                    Email
                  </th>
                  <th scope="col" className="border border-slate-600 p-2">
                    Tel No.
                  </th>
                  <th scope="col" className="border border-slate-600 p-2">
                    Joined At
                  </th>
                  <th scope="col" className="border border-slate-600 p-2">
                    Applied At
                  </th>
                </tr>
              </thead>
              <tbody>
                {Array.isArray(inTouchUsers) &&
                  inTouchUsers.map((element, index) =>
                    element.contacted === false ? (
                      <tr className="align-middle" key={index}>
                        <td className="border border-slate-600 p-2">
                          {element.username}
                        </td>
                        <td className="border border-slate-600 p-2">
                          {element.email}
                        </td>
                        <td className="border border-slate-600 p-2">
                          {element.tel}
                        </td>
                        <td className="border border-slate-600 p-2">
                          {new Date(element.createdAt).toLocaleString(
                            "en-IN",
                            option
                          )}
                        </td>
                        <td className="border border-slate-600 p-2">
                          {new Date(element.appliedAt).toLocaleString(
                            "en-IN",
                            option
                          )}
                        </td>
                      </tr>
                    ) : null
                  )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserTable;
