import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect } from 'react';
import { initGA, logPageView } from './utils/analytics';
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
import './App.css';
import PrivateRoute from "./components/ProtectedRoute";
import PrivateOutlet from "./components/PrivateOutlet";




function App() {
  useEffect(() => {
    initGA();
    logPageView();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/email" element={<Connect />} />
          <Route path="/community" element={<Community />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/community" element={<Community />} />
          <Route
            path="/admin-data"
            element={
              <PrivateRoute>
                {<AdminPanel />}
              </PrivateRoute>
            }
          />
          <Route path="/Dashboard" element={<PrivateOutlet />}>
            <Route path="" element={<Courses />} />
          </Route>
          <Route path="/course-standard" element={<CourseStandard />} />
          <Route path="/course-premium" element={<CoursePremium />} />
          {/* Add other routes as needed */}
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
