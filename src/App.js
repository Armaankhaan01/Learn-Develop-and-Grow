import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect } from 'react';
import { initGA, logPageView } from './utils/analytics';
import ReactGA from 'react-ga4';
// Import the analytics functions
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Courses from "./components/Courses";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import FAQSection from "./components/FAQ";
import ProfessorReviewSection from "./components/ProfessorReview";
import Community from "./components/Community";
import Connect from "./components/Connect";
import Contact from "./components/Contact";
import CourseStandard from "./components/CourseStandard";
import CoursePremium from "./components/CoursePremium";
import AdminPanel from "./components/AdminPanel";

function App() {
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname + window.location.search, title: "Home Page" })
    initGA(); // Initialize Google Analytics
  }, []);
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/email" element={<Connect />}></Route>
          <Route path="/community" element={<Community />}></Route>
          <Route path="/courses" element={<Courses />}></Route>
          <Route path="/signin" element={<SignIn />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/community" element={<Community />}></Route>
          <Route path="/admin-data" element={<AdminPanel />}></Route>
          <Route path="/course-standard" element={<CourseStandard />}></Route>
          <Route path="/course-premium" element={<CoursePremium />}></Route>
        </Routes>
        <Contact />
        <Testimonials />
        <ProfessorReviewSection />
        <FAQSection />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
