import React from "react";
import { Helmet } from "react-helmet-async";
import { NavLink } from "react-router-dom";

const PCourses = () => {
  return (
    <div className="w-full bg-white ">
      <Helmet>
        <title>Premium Course </title>
      </Helmet>
      <div className="max-w-[1240px] max-w-md pt-[4rem] pb-[2rem] mx-auto bg-white ">
        <h1 className="text-3xl font-bold text-center py-5">Advance Course</h1>
        <div className="bg-white px-6 py-3 mx-3 rounded-lg shadow-md shadow-[red]">
          <p className="pt-3 pb-5 text-2xl font-bold text-center border-b mx-8 text-[red]">
            In This Course What We Will Teach You{" "}
          </p>
          <div className="text-start font-medium">
            <ol className="list-decimal list-outside">
              <li className="py-2 border-b mx-8">ENGLISH SPEAKING SKILL</li>
              <li className="py-2 border-b mx-8">COMMUNICATION SKILL</li>
              <li className="py-2 border-b mx-8">BUSINESS COMMUNICATION</li>
              <li className="py-2 border-b mx-8">ENGLISH GRAMMAR</li>
              <li className="py-2 border-b mx-8">PRONUNCIATION</li>
              <li className="py-2 border-b mx-8">AMERICAN ACCENT</li>
              <li className="py-2 border-b mx-8">GROOMING STANDARDS</li>
              <li className="py-2 border-b mx-8">BODY LANGUAGE</li>
              <li className="py-2 border-b mx-8">EMAIL WRITING</li>
              <li className="py-2 border-b mx-8">PHONE CALL HANDLING</li>
              <li className="py-2 border-b mx-8">CORPORATE ETIQUETTES</li>
              <li className="py-2 border-b mx-8">HUMAN RESOURCE MANAGEMENT</li>
              <li className="py-2 border-b mx-8">RESUME MAKING</li>
              <li className="py-2 border-b mx-8">CONFIDENCE BUILDING</li>
              <li className="py-2 border-b mx-8">DEBATE COMPETITION</li>
              <li className="py-2 border-b mx-8">LIVE INTERACTIVE SESSION</li>
              <li className="py-2 border-b mx-8">QUESTION ANSWER SESSION</li>
              <li className="py-2 border-b mx-8">GROUP DISCUSSION</li>
              <li className="py-2 border-b mx-8">MOCK INTERVIEW</li>
              <li className="py-2 border-b mx-8">PUBLIC SPEAKING</li>
              <li className="py-2 border-b mx-8">TEAM BUILDING SKILL</li>
              <li className="py-2 border-b mx-8">LEADERSHIP SKILL</li>
              <li className="py-2 border-b mx-8">TIME MANAGEMENT SKILL</li>
              <li className="py-2 border-b mx-8">PRESENTATION SKILL</li>
              <li className="py-2 border-b mx-8">SITUATION HANDLING SKILL</li>
              <li className="py-2 border-b mx-8">INTERVIEW PREPARATION</li>
              <li className="py-2 border-b mx-8">PERSONALITY DEVELOPMENT</li>
              <li className="py-2 border-b mx-8">SALES & MARKETING</li>
              <li className="py-2 border-b mx-8">FINANCIAL INTELLIGENCE</li>
            </ol>
          </div>
          <div className="font-medium text-left">
            <p className="py-5 text-xl mx-8 text-[red]">
              Additional Benefits Why will you choose this course?
            </p>
            <ul className=" list-decimal list-outside">
              <li className="py-2 border-b mx-8">
                After course completion certification provided from Learn
                Develop & grow.
              </li>
              <li className="py-2 border-b mx-8">
                After course completion get a chance to interact with the
                industry experts.
              </li>
              <li className="py-2 border-b mx-8">
                Get free career counseling.
              </li>
              <li className="py-2 border-b mx-8">
                Verbal examination will be taken.
              </li>
              <li className="py-2 border-b mx-8">
                Recognition for outstanding performers.
              </li>
              <li className="py-2 border-b mx-8">
                2 Excursions in a year - <br /> a. Industry visit <br /> b.
                Leisure Trip{" "}
              </li>
              <li className="py-2 border-b mx-8">
                We also help our students to grab the opportunity to study &
                work in Europe & Middle East to learn, earn & settle.
              </li>
            </ul>
            <p className="py-2 text-xl mx-8 text-[red] ">
              Certificate Provided
            </p>
            <p className="py-5 text-xl mx-8">Duration → 12 months</p>
          </div>
          <p className="text-4xl text-center font-bold">
            <span className="text-[16px]">Only</span> Rs 1000 /-{" "}
            <span className="text-[16px]">per month</span>
          </p>
          <NavLink className="flex items-center" to="/dashboard/#PCourse">
            <button className="bg-[red] w-[150px]  md:w-[180px] rounded-md my-6 mx-auto font-medium px-6 py-3 text-white">
              Enroll Now
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default PCourses;
