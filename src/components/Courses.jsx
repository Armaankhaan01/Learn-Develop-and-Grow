import React, { useEffect } from "react";
import logo from "../assets/image/logo.jpg";
import { NavLink } from "react-router-dom";
import { logPageView } from "../utils/analytics";

const Courses = () => {

  return (
    <div className="w-full pt-[12rem] pb-[2rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-8">
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            src={logo}
            alt="/"
            className="mx-auto mt-[-3rem] bg-white w-20 h-20 rounded-sm"
          />
          <h1 className="text-3xl font-bold text-center py-8">Standard</h1>
          <p className="text-4xl text-center font-bold">
            Rs 500 /- <span className="text-[16px]">per month</span>
          </p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">
              Learn to speak English fluently like a native speaker.
            </p>
            <p className="py-2 border-b mx-8">Duration 6 months</p>
          </div>
          <NavLink className="text-center" to="/course-standard">
            <button className="bg-[red] w-[150px]  md:w-[180px] align-center rounded-md my-6 mx-auto font-medium px-6 py-3 text-white">
              Enroll Now
            </button>
          </NavLink>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            src={logo}
            alt="/"
            className="mx-auto mt-[-3rem] bg-white w-20 h-20 rounded-sm"
          />
          <h1 className="text-3xl font-bold text-center py-8">Premium</h1>
          <p className="text-4xl text-center font-bold">
            Rs 1000 /- <span className="text-[16px]">per month</span>
          </p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">
              Unlock your full potential and excel in personal and professional
              growth.
            </p>
            <p className="py-2 border-b mx-8">Duration 12 months</p>
          </div>
          <NavLink className="text-center" to="/course-premium">
            <button className="bg-[red] w-[150px]  md:w-[180px] rounded-md my-6 mx-auto font-medium px-6 py-3 text-white">
              Enroll Now
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Courses;




