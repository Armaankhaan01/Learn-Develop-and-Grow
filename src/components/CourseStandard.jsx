import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { logPageView } from "../utils/analytics";


const SCourses = () => {

    return (
        <div className="w-full bg-white ">
            <div className="max-w-[1240px] max-w-sm pt-[4rem] pb-[2rem] mx-auto bg-white ">
                <h1 className="text-3xl font-bold text-center py-5">Basic Course</h1>
                <div className="bg-white px-6 py-3 rounded-lg shadow-md shadow-[red]">
                    <p className="pt-3 pb-5 text-2xl font-bold text-center border-b mx-8 text-[red]">In This Course We Will Teach You </p>
                    <div className="text-start font-medium">
                        <ol className="list-decimal list-outside">
                            <li className="py-2 border-b mx-8 ">ENGLISH SPEAKING SKILL</li>
                            <li className="py-2 border-b mx-8 ">ENGLISH GRAMMAR</li>
                            <li className="py-2 border-b mx-8 ">Verbal examination will be taken at the end of course completion.</li>
                        </ol>
                        <p className="pt-5 text-xl mx-8 ">No Certification Provided</p>
                        <p className="py-5 text-xl mx-8">Duration → 6 months</p>
                        <p className="text-4xl text-center font-bold">
                            Rs 500 /- <span className="text-[16px]">per month</span>
                        </p>
                    </div>
                    <NavLink to="/signin">
                        <button onClick={() => window.scrollTo(0, 0)} className="bg-[red] w-[150px]  md:w-[180px] rounded-md my-6 mx-auto font-medium px-6 py-3 text-white" >Enroll Now</button>
                    </NavLink>
                </div>
            </div>
        </div >
    )
}

export default SCourses;