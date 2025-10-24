import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaBolt } from "react-icons/fa";

// import project images
import project1 from "/public/images/project1.png";
import project2 from "/public/images/project2.png";
import project3 from "/public/images/project3.png";
import project4 from "/public/images/project4.png";
import project5 from "/public/images/project5.png";
import project6 from "/public/images/project6.png";

const works = [
    {
      title: "Sculptre Agency",
      subtitle: "Landing page redesign",
      image: project1,
    },
    {
      title: "Sculptre",
      subtitle: "Landing page redesign",
      image: project2,
    },
    {
      title: "Sculptre",
      subtitle: "Landing page redesign",
      image: project3,
    },
    {
      title: "Sculptre",
      subtitle: "Landing page redesign",
      image: project4,
    },
    {
      title: "Sculptre",
      subtitle: "Landing page redesign",
      image: project5,
    },
    {
      title: "Sculptre",
      subtitle: "Landing page redesign",
      image: project6,
    },
  ];

function projects() {
  return (
    <div className="bg-black text-white font-sans max-w-full">
      

      {/* Hero Section */}

      <header className="px-10 mt-10">
        <h1 className="text-3xl md:text-6xl font-bold leading-tight">
          <span className="text-gray-400">Shaping </span>
          <span className="text-white">products,</span>
          <br />
          <span className="text-gray-400">one </span>
          <span className="text-white">pixel</span>
          <span className="text-gray-400"> at a time</span>
        </h1>
      </header>

      {/* Projects Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-10 px-10 mt-16 flex-grow">
        {works.map((work, index) => (
          <div key={index}>
          <div className="relative overflow-hidden rounded-xl group">
            <img
              src={work.image}
              alt={work.title}
              className="w-full h-full object-cover aspect-square transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
          <h3 className="mt-3 text-white font-semibold">{work.title}</h3>
          <p className="text-xs text-gray-400">{work.subtitle}</p>
        </div>
        ))}
      </section>


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
}


export default projects;

