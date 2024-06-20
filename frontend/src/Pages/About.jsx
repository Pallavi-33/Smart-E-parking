import React from "react";
import { Link } from "react-router-dom";
import mainpic from "/mainpic.avif";

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <main className="py-10">
        <section className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-gray-800">
              Why Choose Us?
            </h1>
            <div className="mb-6 text-gray-700">
              <p className="mb-4">
                Integrate a parking guidance system that directs users to
                available parking spots within the parking facility, minimizing
                time spent searching for a spot.
              </p>
              <div className="space-y-4">
                <div>
                  <h2 className="text-lg md:text-xl font-bold mb-2 text-black">
                    Convenience:
                  </h2>
                  <p className="italic hover:not-italic">
                    Allow users to book parking spots in advance through the
                    website or mobile app. This saves time and eliminates the
                    stress of searching for parking upon arrival.
                  </p>
                </div>
                <div>
                  <h2 className="text-lg md:text-xl font-bold mb-2 text-black">
                    Cost Savings:
                  </h2>
                  <p className="italic hover:not-italic">
                    Offer competitive rates compared to traditional parking
                    options to attract users and incentivize them to use the
                    service.
                  </p>
                </div>
                <div>
                  <h2 className="text-lg md:text-xl font-bold mb-2 text-black">
                    Affordability:
                  </h2>
                  <p className="italic hover:not-italic">
                    We offer competitive pricing without compromising on the
                    quality of our services.
                  </p>
                </div>
                <div>
                  <h2 className="text-lg md:text-xl font-bold mb-2 text-black">
                    Family-Friendly:
                  </h2>
                  <p className="italic hover:not-italic">
                    Our Virtual zoo websites can be enjoyed by people of all
                    ages, making them an excellent option for families to
                    explore together and learn about wildlife conservation.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row">
              <Link to="/contact">
                <button className="btn bg-blue-500 text-white py-2 px-6 rounded-full mb-2 md:mb-0 md:mr-4 hover:bg-blue-600 transition duration-300">
                  Connect Now
                </button>
              </Link>
              
            </div>
          </div>
          <div className="hero-image">
            <img
              src={mainpic}
              alt="Coding buddies"
              className="object-cover w-full h-full rounded-lg shadow-md"
            />
          </div>
        </section>
        <section className="container mx-auto py-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Our Mission
          </h2>
          <p className="mb-4 text-gray-700">
            Our mission is to revolutionize the parking industry by providing
            innovative solutions that enhance convenience, accessibility, and
            affordability for our customers.
          </p>
          
        </section>
      </main>
    </div>
  );
};

export default About;
