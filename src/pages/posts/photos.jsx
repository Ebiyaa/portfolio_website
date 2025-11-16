import React from "react";
// import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";

const Photos = () => {
  return (
    <div className="blog-detail">
      <Link to="/blog" className="back-btn">
        ← Back to blogs
      </Link>
      <h1 className="text-3xl font-bold mb-4">
        Beyond the Lens: A Visual Story of My Work, My Drive, and My Reflections
      </h1>
      <p className="text-lg">
        {/* {blog.content} */}
        Each of these three images represents a different dimension of who I am,
        my professional identity, my passions, and the environments that inspire
        me. Together, they form a visual narrative of balance: the confidence I
        bring to my work, the energy that fuels my personal interests, and the
        calm spaces that help me reconnect with creativity and focus.
      </p>
      <br /> <br />
      <img
        src="../public/images/blog-images/headshot.jpg"
        alt="Photos blog"
        className="w-full h-auto mb-4 rounded"
      />
      <div>
        <p className="text-lg">
          {/* {blog.content} */}
          The first image, my business headshot, reflects the confidence and
          clarity with which I approach my professional life. Every adjustment
          made during editing was intentional, designed to highlight presence
          without overwhelming the natural expression of the photograph.
          Increasing the sharpness to +35 brought out fine details, while the
          slight boosts in white balance +5 and saturation +5, created a more
          even and authentic tone. A modest contrast of +20 added structure and
          depth, helping the features stand out against a softened backdrop. The
          background blur of 14 and combined vignette effects; outer 80, inner
          20, concentrated the viewer’s attention toward the center of the
          frame. The result is a polished, composed headshot that communicates
          professionalism, readiness, and the sense of purpose that drives my
          work.
        </p>
        <br /> <br />
        <img
          src="../public/images/blog-images/pathway.jpg"
          alt="Photos blog"
          className="w-full h-auto mb-4 rounded"
        />
        <p className="text-lg">
          The second image, a serene path by the Shannon River, captures an
          entirely different, yet equally important, aspect of my life. This
          space represents quiet reflection, grounding, and inspiration. To
          preserve the stillness of the moment while enhancing its emotional
          warmth, the photo underwent several aesthetic edits. Enhancing the
          contrast and significantly boosting saturation brought the scene’s
          natural colours to life, while the added warmth evoked the gentle glow
          of a calm day. Adjustments ambiance helped deepen the atmosphere, and
          lowering both highlights and shadows softened bright spots while
          preserving detail throughout the scene. A subtle outer vignette also
          provided a natural frame, and a touch of selective saturation on the
          pathway emphasized the natural path that draws the viewer forward. The
          finalized image reminds me of the value of pausing, observing and
          finding beauty in simplicity.
        </p>
        <br /> <br />
        <img
          src="../public/images/blog-images/padel.jpg"
          alt="Photos blog"
          className="w-full h-auto mb-4 rounded"
        />
        <p className="text-lg">
          In a close-up of vibrant padel balls, I highlighted my passion for the
          sport. It has often served as an outlet of energy, strategy and joy.
          Editing this photo was about amplifying its lively, dynamic feel.
          Increasing saturation and contrast brought out the colours and sharp
          textures that define the sport’s aesthetic. Lowering the ambiance
          added a subtle dramatic tension, while deeper shadows and more warmth
          created a contrast between the neon tones and the darker elements of
          the frame. The vibrant colors represented here reflect the excitement
          engrained in the padel game itself.
        </p>
      </div>
    </div>
  );
};

export default Photos;
