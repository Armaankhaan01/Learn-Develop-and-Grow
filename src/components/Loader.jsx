import React from "react";
const Loader = () => {

    return (
        <div className="flex flex-col items-center bg-white py-16 w-full">
            <div className="flex flex-col items-center bg-white py-16 w-full">
                <div className="flex flex-col items-center bg-white py-16 w-full ">
                    <div className="py-4 bg-white">
                        <div className="container">
                            <span style={{ "--i": "1" }}></span>
                            <span style={{ "--i": "2" }}></span>
                            <span style={{ "--i": "3" }}></span>
                            <span style={{ "--i": "4" }}></span>
                            <span style={{ "--i": "5" }}></span>
                            <span style={{ "--i": "6" }}></span>
                            <span style={{ "--i": "7" }}></span>
                            <span style={{ "--i": "8" }}></span>
                            <span style={{ "--i": "9" }}></span>
                            <span style={{ "--i": "10" }}></span>
                            <span style={{ "--i": "11" }}></span>
                            <span style={{ "--i": "12" }}></span>
                            <span style={{ "--i": "13" }}></span>
                            <span style={{ "--i": "14" }}></span>
                            <span style={{ "--i": "15" }}></span>
                            <span style={{ "--i": "16" }}></span>
                            <span style={{ "--i": "17" }}></span>
                            <span style={{ "--i": "18" }}></span>
                            <span style={{ "--i": "19" }}></span>
                            <span style={{ "--i": "20" }}></span>
                        </div>
                    </div>
                </div>
                <p className='ml-6 my-6 text-2xl'>Loading ....</p>
            </div>
        </div >
    )
}

export default Loader;