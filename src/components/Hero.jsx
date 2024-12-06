import { HERO_CONTENT, PROJECTS } from "../assets/constants";
import profilePic from "../assets/Laxmi_new_image (1).jpg";
import { motion } from "framer-motion";
import About from "./About";
import Technologies from "./Technologies";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Hero = () => {
  const [text] = useTypewriter({
    words: ["Full-Stack Developer", "Professional Coder", "UI Designer!"],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  return (
    <div className=" pb-4 lg:mb-35 mt-20">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
        {/* Left Section: Text */}
        <div className="w-full lg:w-1/2 flex flex-col items-start gap-6 px-6 lg:px-0 mt-12">
          <h1 className="text-4xl lg:text-6xl font-bold text-white">
            Hi, I'm <span className="text-designColor capitalize">Laxmi</span>
          </h1>
          <h2 className="text-2xl lg:text-4xl font-bold text-white">
            <span>{text}</span>
          </h2>
          <p className="text-base lg:text-lg font-sans leading-6 tracking-wide text-gray-300 ">
            As a Full Stack Developer, I build scalable apps with seamless
            front-end and back-end integration, focusing on clean code,
            performance, and smooth user interactions.
          </p>
          {/* Download Resume Button */}
          <a
            href="https://drive.google.com/file/d/1P5rnpxcZEfDYCdEUD_fFVj5-Bh28mSYJ/view?usp=sharing" // Add your resume file path here
            download
            className=" bg-gray-800 from-blue-500 via-indigo-500 to-purple-500 text-white font-bold py-3 px-6 rounded-full mt-4 shadow-lg transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:bg-gradient-to-r hover:from-blue-600 hover:via-indigo-600 hover:to-purple-600"
          >
            Download Resume
          </a>
        </div>

        {/* Right Section: Image */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="relative w-80 sm:w-80 h-80 sm:h-80 rounded-full overflow-hidden shadow-lg mt-9 bg-gray-800"
          >
            <img
              src={profilePic}
              alt="Laxmi"
              className="absolute top-1/2 left-1/2 w-auto h-full transform -translate-x-1/2 -translate-y-1/2 object-cover"
            />
          </motion.div>
        </div>
      </div>
      <div className="border-b border-neutral-900 pb-4 mt-20">   
      </div>
      <About />
      <Technologies />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
};

export default Hero;
