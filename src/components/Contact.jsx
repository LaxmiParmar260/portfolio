import React from "react";
import { CONTACT } from "../assets/constants";
import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
      y: [10, -10],
      transition: {
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  });

  return (
    <div className="border-b border-neutral-900 pb-20 ">
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Contact Me
      </motion.div>

      {/* //this is an contact icon */}
      <div className="border-b border-neutral-900 pb-4 mt-20">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          {/* zero */}
          <a href="https://www.linkedin.com/in/laxmiparmar/" target="_blank">
            <motion.div
              variants={iconVariants(2)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-neutral-800 p-4 "
            >
              <FaLinkedin className="text-5xl text-blue-400 " />
            </motion.div>
          </a>

          {/* first */}
          <a href="https://github.com/LaxmiParmar260" target="_blank">
            <motion.div
              variants={iconVariants(2.5)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-neutral-800 p-4"
            >
              <FaGithub className="text-5xl text-white" />
            </motion.div>
          </a>

          {/* second */}
          <a href="https://www.instagram.com/parmarlaxmi260/" target="_blank">
            <motion.div
              variants={iconVariants(4)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-neutral-800 p-4 text-white-600"
            >
              <FaInstagram className="text-5xl text-pink-600 border-white " />
            </motion.div>
          </a>
        </motion.div>
      </div>
      <div className="text-center tracking-tighter">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {CONTACT.address}
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {CONTACT.phoneNo}
        </motion.p>
        <a
          href={`mailto:${CONTACT.email}`}
          className="border-b"
          target="_blank"
        >
          {CONTACT.email}
        </a>
      </div>
    </div>
  );
};

export default Contact;
