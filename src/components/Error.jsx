import React from "react";

const Error = ({ children }) => {
  return (
    <div className="bg-red-800 text-center text-white rounded mb-3 p-2 uppercase ">
      {children}
    </div>
  );
};

export default Error;
