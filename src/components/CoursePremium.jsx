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
          <div className="text-start font-medium lg:text-xl">
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
          <div className="font-medium text-left lg:text-xl">
            <p className="py-5 text-xl mx-8 text-[red]">
              Additional Benefits Why will you choose this course?
            </p>
            <ul className=" list-decimal list-outside">
              <li className="py-4 mx-8">
                We will provide you community support & hand hold support to
                develop you.
              </li>
              <li className="py-4 mx-8">
                Verbal & written examination will be taken.
              </li>
              <li className="py-4 mx-8">
                Recognition for outstanding performers.
              </li>
              <li className="py-4 mx-8">Get free career counseling.</li>
              <li className="py-4 mx-8">
                We not only teach spoken English but how to talk with
                conviction, how to convince someone & objection handling.
              </li>
              <li className="py-4 mx-8">
                We will develop success habits within you, we will teach you
                ethics & discipline. We will help you to build a strong growth
                mindset, we will boost your will power, we will help you to set
                a strong mission & vision of your life.
              </li>
              <li className="py-4 mx-8">
                We provide motivational contents to stay motivated & focused.
              </li>
              <li className="py-4 mx-8">
                We will train you how to use the Albert Mehrabian’s 7-38-55 Rule
                to negotiate, convince & talk effectively.
              </li>
              <li className="py-4 mx-8">
                We will unleash & empower your true potential.
              </li>
              <li className="py-4 mx-8">
                According to Dale Carnegie Foundation Report 85% of an
                individual’s success depends on his ability to lead, influence &
                negotiate. We will train you for the same.
              </li>
              <li className="py-4 mx-8">
                We will prepare you for job interviews.
              </li>
              <li className="py-4 mx-8">
                We will transform fresher students to HOD level.
              </li>
              <li className="py-4 mx-8">
                We will foster the leadership skill within you.
              </li>
              <li className="py-4 mx-8">
                Two Excursions in a year. – <br />
                a. A.Industry visit <br />
                B.Leisure Trip
              </li>
              <li className="py-4 mx-8">
                After course completion get a chance to interact with the
                industry experts.
              </li>
              <li className="py-4 mx-8">
                After course completion certification provided from Learn
                Develop & grow.
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
