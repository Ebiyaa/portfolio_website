import React from "react";
// import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";

const Iwd = () => {

  return (

    <div className="blog-detail">
      <Link to="/blog" className="back-btn">
        ← Back to blogs
      </Link>
      <h1 className="text-3xl font-bold mb-4">
        Empowering the next generation: Design, FinTech and International
        Women’s Day at the African Science Academy
      </h1>
      {/* {blog.image && ( */}
      <img
        src="../public/images/blog-images/iwd.jpg"
        alt="IWD"
        className="w-full h-auto mb-4 rounded"
      />
      {/* )} */}
      <div>
        <p className="text-lg">
          {/* {blog.content} */}
          On 5 March 2025, I had the privilege of collaborating with WeWire and
          the African Science Academy (ASA) in Ghana to mark International
          Women’s Day in a meaningful and future-facing way. Through this event
          we celebrated the incredible potential of young women in STEM and
          design, and explored how design plays a central role in the FinTech
          world.
        </p>
        <br /> <br />
        <p className="text-lg">
          WeWire had posted about this IWD 2025 initiative, underscoring its
          commitment to fostering female tech talent and creating access for the
          next generation of women in finance and design. The partnership with
          ASA made perfect sense since it is a space dedicated to gifted young
          women across Africa, giving them an immersive STEM education. From the
          planning phase, our aim was clear: to inspire, to inform, and to
          invite the girls at ASA to consider how design, often seen as merely
          aesthetic, can actually power innovation in FinTech, and how their
          voices and visions are needed.
        </p>
        <br /> <br />
        <p className="text-lg">
          On the day, we kicked things off with a welcoming session by WeWire
          and ASA staff. Then I had the honour of speaking about design in
          FinTech: how good design is not just about how things look, but about
          how they work, how people feel, how trust is built, how inclusion is
          embedded. I shared case-studies of FinTech products where design
          solved real user-pain, improved access, created more empowering
          financial experiences.
        </p>
        <br /> <br />
        <p className="text-lg">
          After the talk, we ran interactive breakout sessions. In small groups,
          the students examined FinTech interfaces (apps, dashboards, payment
          flows) and critiqued them from a design lens: what works, what
          doesn’t, whose voice is missing, how would they redesign it? We also
          encouraged them to sketch their own FinTech concept driven by a
          social-impact goal: for example, a savings app for rural girls, a
          payment portal for micro-entrepreneurs, or a financial education game.
        </p>
        <br /> <br />
        <p className="text-lg">
          It might seem unusual to link design and finance but in fact the two
          are tightly connected. FinTech is all about making financial services
          more accessible, more user-centric, more inclusive and design is the
          tool that enables that shift. Good design helps build trust (crucial
          in finance), helps simplify complex systems (especially for new
          users), helps highlight underserved users (for example women, rural,
          low-income) and helps bring innovation to life.
        </p>
        <br /> <br />
        <p className="text-lg">
          In my talk I emphasised: if you care about both technology and people,
          and you’re curious about how things are made, how they work, how they
          feel, then a design-focused career in FinTech can be a powerful way to
          make an impact. And I invited the students: you don’t have to be “just
          an engineer” or “just an artist” you can bridge both worlds, you can
          design the future of finance.
        </p>
        <br /> <br />
        <p className="text-lg">
          One of the most important goals of the day was to open up
          possibilities. For many of the ASA students, design may not yet have
          been top of mind as a career path in FinTech, so we wanted to show:
        </p>
        <ul>
          <li>
            Design can be a full-blown career (UX designer, product designer,
            service designer, interaction designer) and it’s central in tech.
          </li>
          <li>
            In Africa especially, as the FinTech sector grows, the demand for
            designers who understand both technology and human context will only
            increase.
          </li>
          <li>
            Their backgrounds, their perspectives, their experiences matter.
            Bringing diversity of voices into design means better products, more
            inclusive services, more empowerment.
          </li>
          <li>
            It’s okay to start small: sketch, experiment, observe users, ask
            questions, keep iterating design is a mindset as much as a skill.
          </li>
        </ul>
        <br /> <br />
        <p className="text-lg">
          During the breakout groups, I encouraged the girls: don’t shy away
          from asking “why” and “how” why does this work like this? how would
          someone with fewer resources or less digital access use this? What if
          we designed for her? The best part was seeing their ideas: bright,
          bold, rooted in real-life problems they know.
        </p>
        <br /> <br />
        <p className="text-lg">
          What struck me most at the event was the energy of the students at
          ASA, their curiosity, their willingness to challenge, to ask “what
          if”, to imagine something better. It is a privilege to help organise
          an event where emerging talent meets real industry experience.
        </p>
        <br /> <br />
        <p className="text-lg">
          Going forward, I’m excited about continuing the connection: perhaps
          mentorship between WeWire designers and ASA students, design challenge
          workshops, internships or job-shadowing opportunities in FinTech. The
          initial spark we ignited on International Women’s Day is just the
          beginning.
        </p>
      </div>
    </div>
  );
};

export default Iwd;
