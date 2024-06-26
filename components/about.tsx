"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      
{/* I am currently pursuing a B.Tech in Computer Science and Engineering. I am skilled as a full-stack web developer using the MERN stack and Next.js, primarily focused on backend development. I have also worked on the FUSION project at IIITDMJ as a backend developer and enhanced its UI/UX. */}
      <p className="mb-3">
      I am currently pursuing a B.Tech in {" "}
        <span className="font-medium">Computer Science and Engineering</span>,I am skilled as a {" "}<span className="font-medium">full-stack web developer using the MERN stack and Next.js</span>, primarily focused on backend development.{" "}
      </p>
      <p className="mb-2">
      {/* My favorite part of programming is the problem-solving aspect; I love the satisfaction of figuring out solutions. This passion has driven me to achieve rank 1 at GFG across IIITDMJ college and excel in problem-solving on platforms like LeetCode and GeeksforGeeks. */}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I love the satisfaction of figuring out solutions.{" "}This passion has driven me to <span className="font-medium"> achieve rank 1 at  </span><span className="underline">GFG </span>{" "} across college and excel in problem-solving on platforms like <span className="underline">LeetCode </span>{" "} and <span className="underline">GFG</span>.{" "} 
      </p>
      {/* Additionally, I have developed skills in project management as the team lead of the FUSION project, leading a team of 12 members from December 2023 to April 2024. I have also demonstrated leadership by serving as the Discipline Conveyor of a hostel with 500 students from July 2022 to May 2023. */}
      <p className="mb-2">
        <span className="italic">Additionally, I have developed skills</span>,in project management as <span className="font-medium">team lead of the FUSION project</span>, leading a team of 12 members from December 2023 to April 2024.{" "}
      </p>
      <p>
      I have also demonstrated leadership by serving as <span className="font-medium"> the Discipline Conveyor of a hostel </span>,with 500 students from July 2022 to May 2023.{" "} 
      </p>
      <p className="mt-4">
        I am currently looking for a full-time position as a software developer.
      </p>
    </motion.section>
  );
}
