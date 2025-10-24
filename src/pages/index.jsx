import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaBolt } from "react-icons/fa";

function index() {
  return (
    <div className="bg-black text-white font-sans max-w-full">
      

      {/* Hero Section */}
      <header className="px-8 py-16 max-w-full">
        <h1 className="text-[64px] font-semibold leading-[72px] max-w-3xl">
          hello, <br />
          You can call me <span className="text-green-400 font-bold">Ebi</span>, 
          a User Experience Designer 
          {/* <span className="text-green-400 font-bold">user experience designer</span>  */}
        </h1>
      </header>

          <img src="/public/images/personal.png" alt="ebi's image" className="px-8 py-16 max-w-full" />


       {/* Services */}
       <section id="services" className="px-8 py-12 grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* skill taghs */}
          <div>
            <h2 className="text-5xl font-semibold mb-6">What to hire me for</h2>
            <div className="flex flex-wrap gap-2 max-w-2xl">
              {["UX Design","Web Design","Mobile App Design","UI Design","Webflow CMS","Event Hosting","Speaking"].map((tag) => (
                <span key={tag} className="px-4 py-2 bg-[#282828] rounded-full text-sm border-1 border-[#3d3d3d]">{tag}</span>
              ))}
            </div>
          </div>

          <div className="space-y-6">

            <h2 className="text-white text-2xl font-semibold">
            After evaluating the requirements and finalising the concept of your project, we’ll follow the processes below to reach your desired outcome.
            </h2>
          
            <div className="space-y-6 text-gray-300">
              <div>
                <a href="#">
                  <FontAwesomeIcon icon={FaBolt} size="2x" />
                </a>
                <p className="font-bold text-green-500">Ideating and Wireframing</p>
                <p className="text-sm">
                  We sketch wireframes taking user flows into account, subject to client approval.
                </p>
              </div>
              <div>
                {/* <a href="#"><FontAwesomeIcon icon={FaBolt} /></a> */}
                <p className="font-bold text-green-500">Design and Prototyping</p>
                <p className="text-sm">
                  After approval, we build graphical elements, interactions, and a working prototype.
                </p>
              </div>
              <div>
                {/* <a href="#"><FontAwesomeIcon icon={FaBolt} /></a> */}
                <p className="font-bold text-green-500">Submission and Handoff</p>
                <p className="text-sm">
                  The final UI is delivered for review, with room for modifications.
                  </p>
                </div>
              </div>
            </div>
        </section>

          {/* Selected Projects */}
        <section className="px-8 py-12">

        <h3 className="text-5xl font-semibold mb-6">Selected projects</h3>

        {/* project images */}
            <div className="grid md:grid-cols-2 gap-6">
              <img src="/public/images/project1.png" alt="Project 1" className="rounded-xl" />
              <img src="/public/images/project2.png" alt="Project 2" className="rounded-xl" />
              <img src="/public/images/project3.png" alt="Project 3" className="rounded-xl" />
              <img src="/public/images/project4.png" alt="Project 4" className="rounded-xl" />
            </div>

        </section>
     

      {/* About Me */}
      {/* <section id="about" className="px-8 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-green-400 font-semibold text-lg">Ebi-Yaa Kwaw</h2>
          <p className="italic text-gray-400 mb-4">pronounced as /ebi·jaa/</p>
          <p className="text-gray-300 leading-relaxed">
            "As a mid-level Product Designer, I create engaging and accessible digital solutions
            that meet diverse user needs across industries. With a BA in Psychology and Information Studies,
            I apply human-centered design principles and research methods to understand behavior and pain points. 
            I have worked with startups, agencies, and communities like UXGhana to deliver impactful design.
          </p>
          <a href="/resume.pdf" className="inline-block mt-6 px-6 py-2 bg-green-400 text-black rounded-full">Download my resume</a>
        </div>
        <div className="flex justify-center">
          <img src="/public/images/Me.png" alt="Ebi-Yaa Kwaw" className="rounded-2xl w-80" />
        </div>
      </section> */}


      {/* Footer */}
      <footer id="contact" className="px-8 py-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">Translate your ideas to real life products</h2>
        <p className="text-gray-400">Get in touch! Happy to hear from you.</p>

        <div className="flex justify-center space-x-6 mt-6">
          {/* <a href="https://www.linkedin.com/in/ebi-yaa-kwaw/"><Linkedin className="w-6 h-6" /></a> */}
          {/* <a href="https://dribbble.com/ebiyaa"><FaDribbble className="w-6 h-6" /></a> */}
          {/* <a href="https://x.com/_ebiyaa"><Twitter className="w-6 h-6" /></a> */}
        </div>

        <a
          href="mailto:ebiyaakwaw@gmail.com"
          className="inline-block mt-6 px-6 py-3 bg-green-400 text-black rounded-full"
        >
          Send me an email
        </a>

        <p className="mt-12 text-gray-600">ek. Copyright ©2025</p>
      </footer>
    </div>
  );
}

// unused
{/* Navbar */}
      {/* <nav className="flex justify-between items-center px-8 py-4"> */}
        {/* <div className="text-green-400 font-bold text-xl">ek.</div> */}
        {/* <div className="space-x-6 hidden md:flex rounded-full bg-gray-500 text-white py-2 px-6"> */}
          {/* <a href="#projects" className="hover:text-green-400">projects</a> */}
          {/* <a href="#services" className="hover:text-green-400">services</a> */}
          {/* <a href="#about" className="hover:text-green-400">about me</a> */}
          {/* <a href="#contact" className="text-white">let's talk</a> */}
        {/* </div> */}
      {/* </nav> */}

      {/*  */}

export default index;

