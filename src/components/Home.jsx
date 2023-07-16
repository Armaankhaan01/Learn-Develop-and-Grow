import React from "react";
import homeVideo from "../assets/video/homeVideo.mp4"; // Sample Video
import homeImg from "../assets/image/courses.jpg";
// import profPic from "../assets/image/pic1.jpg";
// import profPic2 from "../assets/image/pic2.jpg";
import { MdAccountBox } from "react-icons/md";
import { NavLink } from "react-router-dom";
import comm1 from "../assets/image/comm1.jpeg";

const Home = () => {
  const professorReview = {
    name: "Professor Firoz",
    course: "",
    review:
      '"Great leaders are not born they are made through challenges, obstacles and hardships."',
  };

  // const [activeIndex, setActiveIndex] = useState(null);

  // const faqData = [
  //   {
  //     question: "What is the fees structure?",
  //     answer: "Rs. 500 per month, it is negotiable.",
  //   },
  //   {
  //     question: "What is the duration of this course?",
  //     answer: "1 year, Personality Development is a never ending process.",
  //   },
  //   {
  //     question: "When is the class provided?",
  //     answer: "Every Sunday.",
  //   },
  //   {
  //     question: "What is the timing for the class?",
  //     answer: "8am to 11am.",
  //   },
  //   {
  //     question: "Where it is located?",
  //     answer:
  //       "Panch Masjid Road,Thakurpukur bazar, Kolkata, West Bengal - 700063.",
  //   },
  // ];

  // const toggleAccordion = (index) => {
  //   setActiveIndex(activeIndex === index ? null : index);
  // };

  return (
    <>
      <div className="w-full py-[4rem] lg:mt-[4rem] mb-[4rem] lg:mb-[1rem]  px-4 h-screen">
        <div className="max-w-full mx-auto grid lg:grid-cols-2 items-center py-4 md:py-4">
          <video
            controls
            muted
            autoPlay
            loop
            src={homeVideo}
            width="500"
            className="rounded-[3%] mx-auto my-4"
          ></video>
          <div className="flex flex-col justify-center items-center">
            <p className="text-[#f2be22] font-bold lg:text-6xl lg:p-8 md:text-4xl sm:text-3xl text-4xl py-2 mt-4 md:mt-2 mx-4 lg:mx-auto">
              Improve Your Skills Faster
            </p>
            <p className="font-bold text-gray-500 lg:pb-4 md:text-2xl text-2xl md:ml-8 mx-4 mt-8 md:mt-2 sm:mx-8">
              Speed up the skill acquisition process by finding unlimited
              courses that matches your niche.
            </p>
            <NavLink to="/signup">
              <button className="bg-[#f2be22] w-[200px] rounded-md my-6 mx-auto font-semibold py-3 text-black md:mx-0 hover:text-white hover:scale-105 duration-150 mt-16 sm:mt-6 md:mt-4 lg:mt-2">
                Get in touch
              </button>
            </NavLink>
          </div>
        </div>
      </div>

      <div className="w-full pt-[6rem] pb-[2rem] px-4 bg-white">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-">
          <div className="w-full flex flex-col p-4 my-2 rounded-lg">
            <h1 className="text-5xl font-bold text-left py-2 md:my-[2rem] my-[1rem] leading-tight">
              Unleash your potential with{" "}
              <span className="text-[#f2be22] ">Learn Develop Grow.</span>
            </h1>
            <p className="font-bold text-gray-500 text-xl">
              Our site offers the inspiration and resources you need to develop
              yourself and reach your goals.
            </p>
            <div className="flex items-center mt-6">
              <input
                type="email"
                class="w-full sm:w-auto px-4 py-2 rounded-l-lg border border-gray-300 focus:outline-none"
                placeholder="Email address"
              />
              <button
                type="submit"
                class="ml-2 px-4 py-2 rounded-r-lg bg-[#f2be22] font-bold text-black hover:opacity-80"
              >
                Submit
              </button>
            </div>
          </div>
          <div className="relative flex items-center justify-end w-full h-0 pb-[75%] rounded-r-lg">
            <img
              src={comm1}
              alt="/"
              className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[80%] h-auto object-cover rounded-3xl"
            />
          </div>
        </div>
      </div>
      <div className="w-full pt-[6rem] pb-[2rem] px-4 bg-white">
        <h1 className="text-[#000300] text-5xl md:text-5xl lg:text-6xl font-bold text-center mb-[5rem]">
          Check out our <span className="text-[#f2be22]">courses.</span>
        </h1>
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
          <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
            <img src={homeImg} alt="/" />
          </div>
          <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
            <MdAccountBox
              width={100}
              fontSize={75}
              className="mx-auto mt-[-3rem] bg-white"
            />
            <h1 className="text-3xl font-bold text-center py-8">Standard</h1>
            <p className="text-4xl text-center font-bold">Rs 3000/-</p>
            <div className="text-center font-medium">
              <p className="py-2 border-b mx-8 mt-8">
                Unlock your full potential and excel in personal and
                professional growth.
              </p>
              <p className="py-2 border-b mx-8">Duration 6 months</p>
              <NavLink to="/signup">
                <button className="bg-[#f2be22] w-[150px]  md:w-[180px] rounded-md my-6 mx-auto font-medium px-6 py-3 text-black">
                  Enroll Now
                </button>
              </NavLink>
            </div>
          </div>
          <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
            <MdAccountBox
              width={100}
              fontSize={75}
              className="mx-auto mt-[-3rem] bg-white"
            />
            <h1 className="text-3xl font-bold text-center py-8">Premium</h1>
            <p className="text-4xl text-center font-bold">Rs 6000/-</p>
            <div className="text-center font-medium">
              <p className="py-2 border-b mx-8 mt-8">
                Unlock your full potential and excel in personal and
                professional growth.
              </p>
              <p className="py-2 border-b mx-8">Duration 12 months</p>
              <NavLink to="/signup">
                <button className="bg-[#f2be22] w-[150px]  md:w-[180px] rounded-md my-6 mx-auto font-medium px-6 py-3 text-black">
                  Enroll Now
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="w-full py-[4rem] pb-[2rem] bg-[#000300]">
        <h1 className="text-[#f2be22] text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-[3rem]">
          Testimonials
        </h1>
        <div className="bg-[#000300] py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md shadow-[#f2be22]">
                <div className="flex items-center mb-4">
                  <img
                    className="w-12 h-12 rounded-full mr-4 bg-white"
                    src={profPic}
                    alt="/"
                  />
                  <div>
                    <h4 className="text-lg font-bold text-[#f2be22]">
                      Shuvajit Patra
                    </h4>
                  </div>
                </div>
                <p className="text-gray-800 font-bold text-2xl ">
                  "Learn Develop Grow has helped me gain confidence and unlock
                  my potential in ways I never thought possible."
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md shadow-[#f2be22]">
                <div className="flex items-center mb-4">
                  <img
                    className="w-12 h-12 rounded-full mr-4 bg-white"
                    src={profPic2}
                    alt="/"
                  />
                  <div>
                    <h4 className="text-lg font-bold text-[#f2be22]">
                      Nasuil Gazi
                    </h4>
                  </div>
                </div>
                <p className="text-gray-800 font-bold text-2xl">
                  "I love the personalized approach to development that Learn
                  Develop Grow offers. It's truly changed the way I see myself
                  and my goals."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="w-full pt-[2rem] pb-[2rem] px-4 bg-white">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-8">
          <div className="w-full flex flex-col p-4 my-4 rounded-lg">
            <h1 className="text-5xl font-bold text-center py-4 md:my-[4rem] my-[2rem] leading-snug">
              Start your personal growth journey with{" "}
              <span className="text-[#f2be22] ">Learn Develop Grow today.</span>
            </h1>
          </div>
          <div className="w-full shadow-xl flex flex-col p-4 my-auto mx-auto rounded-lg">
            <MdAccountBox
              width={100}
              fontSize={75}
              className="mx-auto mt-[-3rem] bg-white"
            />
            <p className="text-2xl text-center font-bold  border-t p-8 mt-[3rem] italic">
              {professorReview.review}
            </p>
            <p class="py-4 mx-auto text-xl text-[#f2be22] font-bold border-b text-center">
              {" "}
              - Professor Firoz
            </p>
          </div>
        </div>
      </div>
      {/* <div className="container mx-auto px-4 py-8">
        <h2 className="text-[#f2be22] text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-[3rem]">
          FAQ's
        </h2>
        <div className="grid grid-cols-1 gap-6">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className={`bg-[#202020] text-[#f2be22] rounded-lg shadow-md p-6 ${
                activeIndex === index ? "bg-white-100" : ""
              }`}
            >
              <button
                className="flex items-center justify-between w-full focus:outline-none"
                onClick={() => toggleAccordion(index)}
              >
                <span className="text-lg font-medium">{faq.question}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-6 w-6 transform ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
              {activeIndex === index && (
                <div className="mt-4">
                  <p className="text-white font-bold">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div> */}
      {/* <div className="google-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d912.1870298234118!2d88.30717294477245!3d22.46415867977324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027a8ba16f9511%3A0xa766c9189ed14f7d!2sThakurpukur!5e0!3m2!1sen!2sin!4v1689411779422!5m2!1sen!2sin"
          width="400"
          height="300"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Address"
        ></iframe>
      </div> */}
    </>
  );
};

export default Home;
