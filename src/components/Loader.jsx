import React from "react";
const Loader = () => {
  return (
    <div className="flex flex-col items-center bg-black py-16 w-full">
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
};

export default Loader;
