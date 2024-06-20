import { useState } from "react";
import entryImage from "/entry_image.avif"; // Import your entry image here

export const Contact = () => {
  const [contact, setContact] = useState({
    username: "",
    email: "",
    message: "",
  });

  // Uncomment below if you want to handle input changes
  // const handleInput = (e) => {
  //   const { name, value } = e.target;
  //   setContact((prev) => ({
  //     ...prev,
  //     [name]: value,
  //   }));
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     // Your form submission logic here
  //   } catch (error) {
  //     // Handle error
  //   }
  // };

  return (
    <section className="contact-section flex">
      <div className="w-1/2">
        <img
          src={entryImage}
          alt="Entry"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="w-1/2 bg-white p-8">
        <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
        <form className="max-w-md">
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              value={contact.username}
              onChange={(e) =>
                setContact({ ...contact, username: e.target.value })
              }
              required
              className="mt-1 px-3 py-2 block w-full rounded-md border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={contact.email}
              onChange={(e) =>
                setContact({ ...contact, email: e.target.value })
              }
              required
              className="mt-1 px-3 py-2 block w-full rounded-md border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              value={contact.message}
              onChange={(e) =>
                setContact({ ...contact, message: e.target.value })
              }
              required
              cols="30"
              rows="4"
              className="mt-1 px-3 py-2 block w-full rounded-md border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-indigo-600 border border-transparent rounded-md font-semibold text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
