import { Link, useNavigate } from "react-router-dom";
import About from "./About";

const Home = () => {
  const navigate = useNavigate();
  const handleIn = () => {
    navigate("/enter");
  };
  const handleOut = () => {
    navigate("/exit");
  };
  return (
    <>
      <div className="min-h-screen text-black">
        <div className="container mx-auto py-8 text-center">
          <h2 className="text-4xl font-bold text-black mb-6">
            Welcome to E-Parking System
          </h2>
          <p className="text-lg text-black mb-8">
            Experience hassle-free parking management with us.
          </p>

          <div className="flex justify-center space-x-4">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 hover:text-gray-100 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              onClick={handleIn}>
              IN
            </button>

            <Link to="/exit">
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 hover:text-gray-100 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                onClick={handleOut}>
                OUT
              </button>
            </Link>
          </div>
        </div>

        <About />
      </div>
    </>
  );
};

export default Home;
