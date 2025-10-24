import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaBolt } from "react-icons/fa";

function about() {
  return (
    <div className="bg-black text-white font-sans max-w-full">
      

      {/* Hero Section */}
      <header className="px-8 py-16 max-w-full">
        <h1 className="text-[64px] font-semibold leading-[72px] max-w-3xl">
          <span className="text-green-400 font-bold">Ebi-Yaa Kwaw</span> <br />
          pronounced as /eib:jaa/
        </h1>
      </header>

      {/* About Me */}
      <section id="about" className="px-8 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>

          <p className="text-gray-300 leading-relaxed">
          As a mid-level Product Designer, I create engaging and accessible digital solutions
           that meet the needs and expectations of diverse users across different industries. 
           With a BA in Psychology and Information Studies from the University of Ghana, 
           I apply human-centred design principles and research methods to understand user 
           behaviour, needs and pain points. Prior to joining a product company, I worked 
           full-time at a software agency, where I designed and developed user interfaces 
           for web and mobile applications.
          </p>
          
        </div>

        <div className="flex justify-center">
            <div>
            <p className="text-gray-300 leading-relaxed">
                I have also served as a Community Lead at UXGhana, where I organised and 
                facilitated events, workshops, and mentorship programs for aspiring and 
                established UX professionals in Ghana. I am passionate about creating 
                inclusive and impactful digital experiences that empower users and 
                solve real-world problems.
            </p>
            <button className="inline-block mt-6 px-6 py-2 bg-green-400 text-black rounded-full">
                
                <a href="/resume.pdf" >Download my resume</a>
            </button>
            
            </div>

          {/* <img src="/public/images/Me.png" alt="Ebi-Yaa Kwaw" className="rounded-2xl w-80" /> */}
        </div>

      </section>

        {/* clients */}
        <section className="px-8 py-16">
            <h2 className="text-5xl font-semibold mb-6">Businesses I've designed for</h2>
            <div className="flex flex-wrap gap-12 mt-8 opacity-80">
                <img src="/public/logos/Portfolio-framer/effects.png" alt="Effect Studios" />
                <img src="/public/logos/Portfolio-framer/scolpta.png" alt="Scolpta" />
                <img src="/public/logos/Portfolio-framer/wewire.png" alt="Wewire" />
                <img src="/public/logos/Portfolio-framer/abeyie.png" alt="Abeyie" />
            </div>
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


export default about;

