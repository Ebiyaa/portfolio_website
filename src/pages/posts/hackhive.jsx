import React from "react";
// import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";

const Hackhive = () => {
  return (
    <div className="blog-detail">
      <Link to="/blog" className="back-btn">
        ← Back to blogs
      </Link>
      <h1 className="text-3xl font-bold mb-4">
        Bringing HackHive 1.0 to Life — My Journey as Organiser & Hackathon
        Manager
      </h1>
      {/* {blog.image && ( */}
      <img
        src="../public/images/blog-images/hackhive.jpg"
        alt="Hackhive blog"
        className="w-full h-auto mb-4 rounded"
      />
      {/* )} */}
      <div>
        <p className="text-lg">
          {/* {blog.content} */}
          HackHive 1.0 was both exhilarating and deeply rewarding as I worked
          alongside a brilliant team of colleagues to bring the 1 week hackathon
          and Fintech Industry Mixer to fruition. Hosted by WeWire and powered
          by our collective drive for innovation, this event marked a major
          milestone in our mission to empower creators, problem-solvers and
          technologists. Working closely with WeWire’s internal event team,
          external partners, mentors and sponsors, we began with a simple but
          ambitious goal; design an inclusive hackathon experience that would
          not only drive prototypes, but spark community, creativity and real
          potential.
        </p>
        <br /> <br />
        <p className="text-lg">
          Over several months of planning, brainstorming and late-night strategy
          sessions, we crafted an event structure that balanced technical
          challenges with opportunities for networking, learning and fun. From
          ideation workshops to pitch coaching, every element was designed to
          empower participants to bring their best ideas to life.
        </p>
        <br /> <br />
        <p className="text-lg">
          The week of HackHive was a whirlwind of energy, collaboration and
          innovation. Seeing teams form, ideas evolve and prototypes take shape
          was incredibly fulfilling. The Fintech Industry Mixer provided a
          unique platform for participants to connect with industry leaders,
          gain insights and explore potential career paths.
        </p>
        <br /> <br />
        <p className="text-lg">
          Reflecting on HackHive 1.0, I’m immensely proud of what we
          accomplished as a team. The event not only showcased the incredible
          talent within our community but also reinforced the power of
          collaboration and shared vision. As an organiser and hackathon
          manager, this experience has deepened my passion for fostering
          innovation and supporting the next generation of creators.
        </p>
      </div>
    </div>
  );
};

export default Hackhive;
