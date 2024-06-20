import React from "react";
import Back from "./Back";

const Thank = () => {
  return (
    <div className="max-w-md mx-auto mt-10 text-center bg-white p-8 rounded-lg shadow-md">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
        Thank You!
      </h1>
      <p className="text-lg text-gray-700 mb-4">
        Thank you for using our App. We appreciate your cooperation.
      </p>
      <div className="flex justify-center">
        <Back />
      </div>
    </div>
  );
};

export default Thank;
