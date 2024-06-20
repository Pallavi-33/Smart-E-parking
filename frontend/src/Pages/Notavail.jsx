import React, { useState } from "react";
import axios from "axios";
import SERVER_URL from "../ServerURL";
import Back from "../components/Back";

const NotAvailable = () => {
   const [email, setEmail] = useState("");
   const [loading, setLoading] = useState(false);
   const [message, setMessage] = useState("");

  // const handleWaitlistSubmit = async () => {
  //   setLoading(true);
  //   try {
  //     const response = await axios.post(`${SERVER_URL}/waitlist`, { email });
  //     if (response.status === 200) {
  //       setMessage(
  //         "You have been added to the waitlist. We will notify you when a slot becomes available."
  //       );
  //       setEmail(""); // Clear input after successful submission
  //     } else {
  //       setMessage("Failed to add to waitlist. Please try again later.");
  //     }
  //   } catch (error) {
  //     setMessage("An error occurred. Please try again.");
  //     console.error("Failed to add to waitlist:", error);
  //   }
  //   setLoading(false);
  // };

  return (
    <div
      className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
      role="alert"
    >
      <strong className="font-bold">Sorry!</strong>
      <span className="block sm:inline">
        {" "}
        All parking slots are currently full.
      </span>
      <div className="my-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email to join the waitlist"
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
        <button
          // onClick={handleWaitlistSubmit}
          disabled={loading}
          className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Join Waitlist
        </button>
      </div>
      <button className="px-0 py-0">
        <Back />{" "}
      </button>
      {message && <p className="text-sm">{message}</p>}
    </div>
  );
};

export default NotAvailable;
