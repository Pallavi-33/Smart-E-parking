import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { enqueueSnackbar } from "notistack";
import carImage from "/car-image.jpg"; // Import the image
import SERVER_URL from "../ServerURL";

const Enter = () => {
  const [loading, setLoading] = useState(false);
  const [carNumber, setCarNumber] = useState("");
  const [contact, setContact] = useState("");
  const navigate = useNavigate();

  const handleSave = async () => {
    try {
      const data = { CarNumber: carNumber, Contact: contact };

      setLoading(true);
      await axios.post(`${SERVER_URL}/api/v2/CreateEntry`, data);

      setLoading(false);
      enqueueSnackbar("Car added successfully", { variant: "success" });
      navigate("/thank-you");
    } catch (error) {
      console.log(error);
      enqueueSnackbar("Error", { variant: "error" });
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left side with the image */}
        <div className="flex justify-center items-center">
          <img
            src={carImage}
            alt="Car"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
        {/* Right side with the form */}
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            Add New Entry
          </h1>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <div className="mb-4">
              <label
                htmlFor="CarNumber"
                className="block text-gray-700 font-bold mb-2">
                Car Number
              </label>
              <input
                id="CarNumber"
                type="text"
                value={carNumber}
                onChange={(e) => setCarNumber(e.target.value)}
                className="border-2 border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-500"
                placeholder="Enter car number"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="Contact"
                className="block text-gray-700 font-bold mb-2">
                Contact
              </label>
              <input
                id="Contact"
                type="text"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                className="border-2 border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-500"
                placeholder="Enter Contact number"
              />
            </div>
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
              onClick={handleSave}>
              Get Slot
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Enter;
