import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

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
import PrivateRoute from "./components/ProtectedRoute";
// import PrivateOutlet from "./components/PrivateOutlet"; // it secure routes diffrently
import Dashboard from "./components/Dashboard";

function AppRouter() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <Contact />
                <Testimonials />
                <ProfessorReviewSection />
              </>
            }
          />
          <Route path="/email" element={<Connect />} />
          <Route path="/community" element={<Community />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/community" element={<Community />} />
          <Route
            path="/admin-data"
            element={<PrivateRoute>{<AdminPanel />}</PrivateRoute>}
          />
          <Route
            path="/dashboard"
            element={<PrivateRoute>{<Dashboard />}</PrivateRoute>}
          />
          <Route path="/course-standard" element={<CourseStandard />} />
          <Route path="/course-premium" element={<CoursePremium />} />
          {/* Add other routes as needed */}
        </Routes>
        <FAQSection />
        <Footer />
      </BrowserRouter>
    </>
  );
}
export default AppRouter;
