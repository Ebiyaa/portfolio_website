import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false); // State to track form submission

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(formData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Change the button label to "Contact Form Submitted"
    setIsSubmitted(true);

    // Reset the form fields
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    });

    // Revert the button label back to "Contact me" after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };
  

  return (
    <div className="bg-black text-white font-sans max-w-full">
      {/* Contact Section */}
      <main className="flex-grow px-10 md:px-20 mt-20">
        <h1 className="text-[64px] font-bold text-white leading-tight max-w-3xl">
          Translate your ideas to real life products.
        </h1>

        <form
          className="mt-10 space-y-5 max-w-2xl"
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First name"
              className="bg-[#1a1a1a] text-gray-200 placeholder-gray-500 px-4 py-3 rounded-md focus:outline-none focus:ring-1 focus:ring-[#3fd078] transition"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last name"
              className="bg-[#1a1a1a] text-gray-200 placeholder-gray-500 px-4 py-3 rounded-md focus:outline-none focus:ring-1 focus:ring-[#3fd078] transition"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="Email address"
            className="bg-[#1a1a1a] text-gray-200 placeholder-gray-500 px-4 py-3 w-full rounded-md focus:outline-none focus:ring-1 focus:ring-[#3fd078] transition"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject line"
            className="bg-[#1a1a1a] text-gray-200 placeholder-gray-500 px-4 py-3 w-full rounded-md focus:outline-none focus:ring-1 focus:ring-[#3fd078] transition"
            value={formData.subject}
            onChange={handleChange}
          />

          <textarea
            rows="5"
            name="message"
            placeholder="Tell me about your idea"
            className="bg-[#1a1a1a] text-gray-200 placeholder-gray-500 px-4 py-3 w-full rounded-md resize-none focus:outline-none focus:ring-1 focus:ring-[#3fd078] transition"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button
            type="submit"
            className={`${
              isSubmitted ? "bg-gray-500" : "bg-[#3fd078]"
            } text-black font-semibold px-6 py-3 rounded-full hover:bg-[#36b56b] transition duration-200`}
            disabled={isSubmitted} // Disable the button after submission
          >
            {isSubmitted ? "Contact Form Submitted" : "Contact me"}
          </button>
        </form>
      </main>

      {/* Footer */}
      <footer id="contact" className="px-8 py-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">Translate your ideas to real life products</h2>
        <p className="text-gray-400">Get in touch! Happy to hear from you.</p>
        <div className="flex justify-center space-x-6 mt-6">
          {/* <a href="https://www.linkedin.com/in/ebi-yaa-kwaw/"><Linkedin className="w-6 h-6" /></a> */}
          {/* <a href="https://dribbble.com/ebiyaa"><FaDribbble className="w-6 h-6" /></a> */}
          {/* <a href="https://x.com/_ebiyaa"><Twitter className="w-6 h-6" /></a> */}
        </div>

        <a href="mailto:ebiyaakwaw@gmail.com"
          className="inline-block mt-6 px-6 py-3 bg-green-400 text-black rounded-full">
          Send me an email
        </a>

        <p className="mt-12 text-gray-600">ek. Copyright ©2025</p>
      </footer>
    </div>
  );
};

export default Contact;

