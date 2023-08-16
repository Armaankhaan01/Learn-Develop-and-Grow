import React, { useEffect, useState } from "react";
import homeVideo from "../assets/video/homeVideo.mp4";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import { NavLink, useLocation } from "react-router-dom";
const apiUrl = process.env.REACT_APP_BASE_URL;

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [applied, setApplied] = useState(false);
  const [buttonText, setButtonText] = useState("Get in touch");
  const [Sapplied, setSApplied] = useState(false);
  const [SbuttonText, setSButtonText] = useState("Enroll");
  const [Papplied, setPApplied] = useState(false);
  const [PbuttonText, setPButtonText] = useState("Enroll");
  const location = useLocation();
  useEffect(() => {
    getData();
    const scrollToHashElement = () => {
      const hash = location.hash; // Get the hash value from the URL
      if (hash) {
        const element = document.getElementById(hash.substring(1)); // Remove the "#" from the hash
        if (element) {
          element.scrollIntoView({ behavior: "smooth" }); // Scroll to the element
        }
      }
    };
    // Scroll to the element when the component mounts
    if (!loading) {
      scrollToHashElement();
    }
  }, [loading, location.hash]);
  const getData = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(`${apiUrl}/user-data`, {
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": token,
        },
      });

      if (response.status === 200) {
        setUsers(response.data.data);
        setLoading(false);
        // console.log(response)
        // Update the users state with the fetched data
        if (response.data.data.appliedForPremium === true) {
          setPApplied(true);
          setPButtonText("Applied For Enrollment");
        }
        if (response.data.data.appliedForStandard === true) {
          setSApplied(true);
          setSButtonText("Applied For Enrollment");
        }
      } else {
        console.log("Request failed:", response.data);
        window.alert("Request failed:", response.data);
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setLoading(false);
      } else {
        window.alert("Network error:", error);
      }
    }
  };
  const handleGetInTouch = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      await axios.post(`${apiUrl}/get-in-touch`, { token });
      setLoading(false);
      setApplied(true);
      setButtonText("We'll Contact You");
    } catch (error) {
      setLoading(false);
      setButtonText("Please try again, there was an error");
    }
  };

  const enrollPremium = async () => {
    setLoading(true);
    try {
      const courseName = "premium";
      const username = users.username;
      await axios.post(`${apiUrl}/course-apply`, { courseName, username });
      setPApplied(true);
      setPButtonText("Applied For Enrollment");
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setPButtonText("Please try again, there was an error");
    }
  };

  const enrollStandard = async () => {
    setLoading(true);
    try {
      const courseName = "standard";
      const username = users.username;
      await axios.post(`${apiUrl}/course-apply`, { courseName, username });
      setLoading(false);
      setSApplied(true);
      setSButtonText("Applied For Enrollment");
    } catch (error) {
      setLoading(false);
      setSButtonText("Please try again, there was an error");
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center bg-black py-16 w-full z-0">
        <Helmet>
          <title>Loading</title>
        </Helmet>
        <div className="flex flex-col items-center bg-black py-16 w-full">
          <div className="flex flex-col items-center bg-black py-16 w-full ">
            <div className="py-4 bg-black">
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
    <>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <div className="w-full py-[2rem] lg:mt-[4rem] mb-[4rem] lg:mb-[1rem] px-4 h-full mt-10 z-10 lg:py-[4rem]">
        <div className="max-w-full mx-auto grid lg:grid-cols-2 items-center">
          <video
            controls
            muted
            loop
            src={homeVideo}
            width="500"
            className="rounded-[3%] mx-auto my-4 lg:w-[40vw]"
          ></video>
          <div>
            <p className="text-white font-bold lg:text-4xl lg:px-5 md:text-2xl text-start sm:text-3xl text-2xl mx-4 lg:mx-auto">
              Hey
              <span className="text-[red] font-extrabold">
                {" "}
                {users.username}
              </span>
            </p>
            <div className="font-medium text-white lg:pb-5 md:text-2xl text-xl md:ml-4  text-center sm:text-left mt-6 md:mt-2 sm:mx-4 pl-4">
              <p>
                Unleash and empower Your True Potential with Learn Develop &{" "}
                <span className="text-[red] font-bold ">Grow</span>.
              </p>
            </div>
            <p className="font-medium text-white text-center lg:pb-5 text-lg sm:text-xl md:text-2xl lg:text-3xl md:ml-6 mx-3 mt-6 md:mt-2 sm:mx-8 md:mb-2 mb-6">
              “India Sikhega To Orbhi Age Badega.”
            </p>
            <div className="font-medium text-white lg:pb-5 md:text-2xl text-xl md:ml-4 mx-1 mt-6 md:mt-2 sm:mx-4 pl-8">
              <p>
                The Course Which we teach in our learning & development center
                are designed to make future leaders. <br /> Beacuse we have{" "}
                <NavLink to="/dashboard/#mission">
                  <span className="text-[red] font-bold underline">
                    Mission
                  </span>
                </NavLink>{" "}
                that's why we are at your door step. <br />
                <p className="text-end py-5 my-5">
                  - Asst. Professor{" "}
                  <span className="text-[red] font-bold ">Mohammad Firoz</span>
                </p>
              </p>
            </div>
            <div className="flex flex-col items-center">
              <button
                onClick={handleGetInTouch}
                className="bg-[red] w-[200px] rounded-md my-6 mx-auto font-bold py-3 text-white md:mx-0 hover:text-white hover:scale-105 duration-150 mt-16 sm:mt-6 md:mt-4 lg:mt-2"
                disabled={applied}
              >
                {buttonText}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full pt-[6rem] pb-[2rem] px-4 bg-white ">
        <h1 className="text-[#000300] text-5xl md:text-5xl lg:text-6xl font-bold text-center mt-[-2rem] mb-[2rem]">
          What <span className="text-[red]">We</span> do ?
        </h1>
        <div className="max-w-[1240px] mx-auto grid ">
          <div className="w-full flex flex-col rounded-lg items-center text-start font-medium text-xl">
            <ol className="list-decimal list-outside ">
              <li className="py-4 mx-8">
                Our school has taught us who we know, what we know, how much we
                know but never taught us{" "}
                <span className="text-[red]">who am I </span>or
                <span className="text-[red]"> who We are</span> ? We willl help
                you to create your{" "}
                <span className="text-[red]">
                  unique personality & identity
                </span>
                .
              </li>
              <li className="py-4 mx-8">
                We transform introvert to{" "}
                <span className="text-[red]">extroverts</span>.
              </li>
              <li className="py-4  mx-8">
                We transform{" "}
                <span className="text-[red]">cold personality</span> to
                <span className="text-[red]"> warm personality</span>.
              </li>
              {/* <li className="py-4  mx-8">
                We not only teach spoken english but how to talk with{" "}
                <span className="text-[red]"> conviction</span> , How to{" "}
                <span className="text-[red]">convince </span> someone &{" "}
                <span className="text-[red]">objection handling </span>.
              </li>
              <li className="py-4  mx-8">
                Accordn to{" "}
                <span className="text-[red]">
                  Dale Carnegie research & institute{" "}
                  <span className="text-[red] font-bold">85% </span>
                </span>
                of an individual's success depends on his/her ability to lead,
                influence and negotiate,{" "}
                <span className="text-[red] font-bold">15%</span> depends on
                his/her technical skills. We weok on this{" "}
                <span className="text-[red] font-bold">85% .</span>
              </li> */}
              <li className="py-4  mx-8">
                Our core focus on personality development & developing the
                <span className="text-[red]"> leader</span> within{" "}
                <span className="text-[red]">You</span> .
              </li>
              <li className="py-4  mx-8">
                We prepare students for{" "}
                <span className="text-[red]">job interviews</span>, specially
                front office job interviews & general interviews.
              </li>
              <li className="py-4 mx-8">
                We prepare students for{" "}
                <span className="text-[red]">
                  hotel management joint entrance examination.
                </span>
              </li>
              <li className="py-4 mx-8">
                We prepare students to{" "}
                <span className="text-[red]">work in hotels</span> specially in
                front office.
              </li>
              {/* <li className="py-4 mx-8">
                We help to unleash & empower the{" "}
                <span className="text-[red]">true potential</span> of
                individuals.
              </li> */}
              <li className="py-4 mx-8">
                We also help our students to grab the opportunity to{" "}
                <span className="text-[red]">study & work</span> in{" "}
                <span className="text-[red]">Europe & Middle East</span> to
                learn, earn & settle.
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div className="w-full pt-[6rem] pb-[2rem] bg-white px-5" id="SCourse">
        <h1 className="text-[#000300] text-5xl md:text-5xl lg:text-6xl font-bold text-center mt-[-2rem] mb-[2rem]">
          Check out our <span className="text-[red]">courses</span>
        </h1>
        <h1 className="text-3xl font-bold text-center py-6 text-[red]">
          Standard Course
        </h1>
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-8 lg:text-xl shadow-lg rounded-xl">
          <div className="w-full flex flex-col p-4">
            <div className="text-start font-medium">
              <ol className="list-decimal list-outside">
                <li className="py-4 mx-8 ">ENGLISH SPEAKING SKILL</li>
                <li className="py-4 mx-8 ">ENGLISH GRAMMAR</li>
                <li className="py-4 mx-8 ">
                  Verbal examination will be taken at the end of course
                  completion.
                </li>
              </ol>
            </div>
          </div>
          <div className="items-center flex text-center">
            <div>
              <p className="pt-5 text-xl mx-8 ">No Certification Provided</p>
              <p className="py-5 text-xl mx-8">Duration → 6 months</p>
              <p className="text-4xl text-center font-bold mx-8">
                Rs 500 /- <span className="text-[16px]">per month</span>
              </p>
              <button
                onClick={enrollStandard}
                className="bg-[red] w-[150px] md:w-[180px] rounded-md my-6 mx-auto font-medium px-6 py-3 text-white"
                disabled={Sapplied}
              >
                {SbuttonText}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className=" max-w-[1240px] mx-auto my-8 shadow-lg rounded-xl "
            id="PCourse"
          >
            <h1
              className="text-3xl font-bold text-center py-8 text-[red]"
              id="PCourse"
            >
              Premium Course
            </h1>
            <div className="grid md:grid-cols-2 gap-8 md:relative">
              <div className="w-full flex flex-col p-4 rounded-lg">
                <div className="text-start font-medium lg:text-xl">
                  <ol className="list-decimal list-outside">
                    <li className="py-4 mx-8">ENGLISH SPEAKING SKILL</li>
                    <li className="py-4 mx-8">COMMUNICATION SKILL</li>
                    <li className="py-4 mx-8">BUSINESS COMMUNICATION</li>
                    <li className="py-4 mx-8">ENGLISH GRAMMAR</li>
                    <li className="py-4 mx-8">PRONUNCIATION</li>
                    <li className="py-4 mx-8">AMERICAN ACCENT</li>
                    <li className="py-4 mx-8">GROOMING STANDARDS</li>
                    <li className="py-4 mx-8">BODY LANGUAGE</li>
                    <li className="py-4 mx-8">EMAIL WRITING</li>
                    <li className="py-4 mx-8">PHONE CALL HANDLING</li>
                    <li className="py-4 mx-8">CORPORATE ETIQUETTES</li>
                    <li className="py-4 mx-8">HUMAN RESOURCE MANAGEMENT</li>
                    <li className="py-4 mx-8">RESUME MAKING</li>
                    <li className="py-4 mx-8">CONFIDENCE BUILDING</li>
                    <li className="py-4 mx-8">DEBATE COMPETITION</li>
                    <li className="py-4 mx-8">LIVE INTERACTIVE SESSION</li>
                    <li className="py-4 mx-8">QUESTION ANSWER SESSION</li>
                    <li className="py-4 mx-8">GROUP DISCUSSION</li>
                    <li className="py-4 mx-8">MOCK INTERVIEW</li>
                    <li className="py-4 mx-8">PUBLIC SPEAKING</li>
                    <li className="py-4 mx-8">TEAM BUILDING SKILL</li>
                    <li className="py-4 mx-8">LEADERSHIP SKILL</li>
                    <li className="py-4 mx-8">TIME MANAGEMENT SKILL</li>
                    <li className="py-4 mx-8">PRESENTATION SKILL</li>
                    <li className="py-4 mx-8">SITUATION HANDLING SKILL</li>
                    <li className="py-4 mx-8">INTERVIEW PREPARATION</li>
                    <li className="py-4 mx-8">PERSONALITY DEVELOPMENT</li>
                    <li className="py-4 mx-8">SALES & MARKETING</li>
                    <li className="py-4 mx-8">FINANCIAL INTELLIGENCE</li>
                  </ol>
                </div>
              </div>
              <div className="font-medium text-left lg:text-xl">
                <p className="py-5 text-xl mx-8 text-[red]">
                  Additional Benefits Why will you choose this course?
                </p>
                <ul className=" list-decimal list-outside">
                  <ul className="list-decimal list-outside">
                    <li className="py-4 mx-8">
                      We will provide you community support & hand hold support
                      to develop you.
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
                      We will develop success habits within you, we will teach
                      you ethics & discipline. We will help you to build a
                      strong growth mindset, we will boost your will power, we
                      will help you to set a strong mission & vision of your
                      life.
                    </li>
                    <li className="py-4 mx-8">
                      We provide motivational contents to stay motivated &
                      focused.
                    </li>
                    <li className="py-4 mx-8">
                      We will train you how to use the Albert Mehrabian’s
                      7-38-55 Rule to negotiate, convince & talk effectively.
                    </li>
                    <li className="py-4 mx-8">
                      We will unleash & empower your true potential.
                    </li>
                    <li className="py-4 mx-8">
                      According to Dale Carnegie Foundation Report 85% of an
                      individual’s success depends on his ability to lead,
                      influence & negotiate. We will train you for the same.
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
                      A.Industry visit <br />
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
                </ul>
                <div className="flex flex-row items-ccenter content-center h-[250px] text-center my-8">
                  <div>
                    <p className="py-2 text-xl mx-8 text-[red]">
                      Certificate Provided
                    </p>
                    <p className="py-5 text-xl mx-8">Duration → 12 months</p>
                    <p className="text-4xl text-center font-bold mx-4">
                      <span className="text-[16px]">Only</span> Rs 1000 /-{" "}
                      <span className="text-[16px]">per month</span>
                    </p>
                    <button
                      onClick={enrollPremium}
                      className="bg-[red] w-[150px] md:w-[180px] rounded-md my-6 mx-auto font-medium px-6 py-3 text-white lg:text-xl"
                      disabled={Papplied}
                    >
                      {PbuttonText}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full py-[25vh] px-4 bg-white h-screen" id="mission">
        <div className="md:flex content-center items-center text-center shadow-lg rounded-lg py-5 hover:scale-95 ">
          <h1 className="text-[#000300] text-5xl md:text-5xl lg:text-6xl font-bold text-center mt-[-2rem] mb-[2rem]">
            Our <span className="text-[red]">Mission</span>
          </h1>
          <div className="max-w-[1240px] mx-auto grid ">
            <div className="w-full flex flex-col items-center text-start font-medium text-xl">
              <ol className="list-decimal list-outside ">
                <li className="py-4 mx-8">
                  Your <span className="text-[red]">Development </span>and
                  <span className="text-[red]"> Growth</span>.
                </li>
                <li className="py-4 mx-8">
                  To Remove <span className="text-[red]">Hunger</span> &
                  <span className="text-[red]"> Poverty</span> through eductaion
                  and financial intelligence.
                </li>
                <li className="py-4  mx-8">
                  Incorporate{" "}
                  <span className="text-[red]">
                    personality development program
                  </span>{" "}
                  &
                  <span className="text-[red]">
                    {" "}
                    leadership development program
                  </span>{" "}
                  in Indian education system.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
