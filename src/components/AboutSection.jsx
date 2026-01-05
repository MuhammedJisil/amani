import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ZoomParallax } from "./ZoomParallax";

const TextRevealByWord = ({ text, className = "" }) => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start 0.6", "end 0.7"]
  });
  const words = text.split(" ");

  return (
    <div ref={targetRef} className={`relative z-0 h-[80vh] ${className}`}>
      <div className="sticky top-0 mx-auto flex h-[80vh] max-w-4xl items-center bg-transparent px-[1rem] py-[3rem]">
        <p className="flex flex-wrap p-5 text-lg font-bold text-white/20 md:p-8 md:text-xl lg:p-10 lg:text-2xl xl:text-3xl" style={{ fontFamily: "'Montserrat', sans-serif" }}>
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </p>
      </div>
    </div>
  );
};

const Word = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="relative mx-1 lg:mx-2.5">
      <span className="absolute opacity-30">{children}</span>
      <motion.span
        style={{ opacity: opacity, willChange: 'opacity' }}
        className="text-white"
      >
        {children}
      </motion.span>
    </span>
  );
};

const AboutSection = () => {
  const aboutText =
    "AMANI KL10 is a DJ, music producer, mix & mastering engineer, and live performer from India, known for blending EDM, House, electronic music, hip-hop, pop, and experimental sounds. With a sharp ear for detail and emotion, he focuses on creating sonically powerful records that translate seamlessly across streaming platforms and live stages. AMANI KL10 continues to push boundaries as an independent sonic architect, building a catalog that connects local stories with international sound standards.";


  const images = [
    { src: "ab1.jpg", alt: "Hero" },
    { src: "ab2.jpg", alt: "Project 1" },
    { src: "ab3.jpg", alt: "Project 2" },
    { src: "ab4.jpg", alt: "Background 1" },
    { src: "ab5.jpg", alt: "Background 2" },
    { src: "ab6.jpg", alt: "Profile" },
    { src: "ab7.jpg", alt: "Extra" }
  ];

  return (
    <section className="relative text-white bg-transparent">
      <div className="pt-24 pb-12">
        <h2 className="text-5xl md:text-6xl font-bold text-center drop-shadow-2xl" style={{ fontFamily: "'Anton', sans-serif" }}>
          About <span className="text-red-500">Me</span>
        </h2>
      </div>

      <ZoomParallax images={images} />

      {/* Content section with smooth transition */}
      <div className="relative z-10 -mt-[100vh] pb-32">
        <div className="container mx-auto px-4">
          {/* Text with Animation */}
          <div className="max-w-4xl mx-auto">
            <TextRevealByWord text={aboutText} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;