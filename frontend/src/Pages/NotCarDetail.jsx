import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CheckCarDetails = () => {
   const [carDetails, setCarDetails] = useState("");
  const [otp, setOtp] = useState("");
 const navigate = useNavigate();

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     // Replace '/api/check-car' with your actual API endpoint
  //     const response = await axios.post(`${ServerURL}/api/check-car`, { carDetails, otp });
  //     console.log(response);
  //     if (response.data.isValid) {
  //       // Navigate to some success page or action
  //       navigate("/thank-you");
  //     } else {
  //       // Navigate to NotCarDetail page
  //       navigate("/api/check-car");
  //     }
  //   } catch (error) {
  //     console.error("Failed to verify car details:", error);
  //     navigate("/api/check-car");
  //   }
  // };

  return (
     <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={carDetails}
        onChange={(e) => setCarDetails(e.target.value)}
        placeholder="Enter Car Details"
        required
      />
      <input
        type="text"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        placeholder="Enter OTP"
        required
      />
      <button type="submit">Check Details</button>
    </form>
  );
};

export default CheckCarDetails;
