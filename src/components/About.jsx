import aboutImg from "../assets/Laxmi_new_image (1).jpg";
import { ABOUT_TEXT } from "../assets/constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 font-sans">
      <h1 className="my-20 text-center text-4xl">
        About <span className="text-neutral-500">Me</span>
      </h1>
      <div className="flex flex-wrap justify-center lg:justify-between ">
        {/* Left Section: Image */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 p-4 flex justify-center"
        >
          <img
            className="rounded-full w-80 sm:w-96 h-80 sm:h-96 lg:w-80 lg:h-80 object-cover"
            src={aboutImg}
            alt="About"
            style={{
              maxWidth: "100%",
              height: "auto",
              objectFit: "cover",
            }}
          />
        </motion.div>

        {/* Right Section: Text */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 flex justify-center lg:justify-start px-4"
        >
          <p className="my-2 text-gray-300 max-w-lg lg:max-w-xl py-6">
            {ABOUT_TEXT}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
