"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

const TypingEffect: React.FC = () => {
  const phrases = ["full-stack developer", "backend developer"];
  const [index, setIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const [cursor, setCursor] = useState(true);

  useEffect(() => {
    const handleTyping = () => {
      if (isDeleting) {
        if (charIndex > 0) {
          setDisplayedText(phrases[index].substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        }
      } else {
        if (charIndex < phrases[index].length) {
          setDisplayedText(phrases[index].substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setIsDeleting(true);
        }
      }
    };

    const typingSpeed = isDeleting ? 50 : 150;
    const typingTimeout = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(typingTimeout);
  }, [charIndex, isDeleting, index, phrases]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <span>
      {displayedText}
      <span className="cursor">{cursor ? "|" : " "}</span>
    </span>
  );
};

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[65rem] sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="flex flex-row items-center justify-center w-full gap-16 ">
          {/* Introductory Text Section */}
          <div className="w-4/6">
            <motion.h1
              className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl text-left"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span>Hello,</span>
              <span className="font-bold "> I'm Vikas Arya.</span>
              <br />
              I am a{" "}
              <span className="font-bold">
                <TypingEffect />
              </span>{" "}
              <br />
              studying at{" "}
              <span className="font-bold">IIITDM Jabalpur</span>.
              <br />
              My primary focus is on{" "}
              <span className="">Backend server side rendering </span>
            </motion.h1>

            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.1,
              }}
            >
              <Link
                href="#contact"
                className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
                onClick={() => {
                  setActiveSection("Contact");
                  setTimeOfLastClick(Date.now());
                }}
              >
                Contact me here{" "}
                <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
              </Link>

              <a
                className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
                href="/CV.pdf"
                download
              >
                Download CV{" "}
                <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
              </a>

              <a
                className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                href="https://www.linkedin.com/in/vikas-arya-3a9177229/"
                target="_blank"
              >
                <BsLinkedin />
              </a>

              <a
                className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                href="https://github.com/vikasutf8"
                target="_blank"
              >
                <FaGithubSquare />
              </a>
            </motion.div>
          </div>

          {/* Image Section */}
          <div className="relative w-2/6 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "tween",
                duration: 0.2,
              }}
            >
              
                <Image
                  src="/myPortfolio.jpg"  
                  alt="Vikas Arya"
                  width={950}
                  height={550}
                  quality={100}
                  priority={true}
                  className="h-[550px] w-[950px] rounded-full object-cover border-[0.35rem] border-white shadow-xl"
                />
              
            </motion.div>

            {/* <motion.span
              className="absolute bottom-0 right-0 text-4xl"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 125,
                delay: 0.1,
                duration: 0.7,
              }}
            >
              👋
            </motion.span> */}
          </div>
        </div>
      </div>
    </section>
  );
}
