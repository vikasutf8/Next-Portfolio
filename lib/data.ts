import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

import BookHouse from "@/public/BookHouse.png";
import RealEstateImg from "@/public/RealEstateImg.png";
import ChattingImg from "@/public/chatting.png";
import Blogging from "@/public/blogging.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Octanet Sevices",
    location: "Remote",
    description:
      "I currently intern  in this company. I am working as a full-stack developer on this project.",
    icon: React.createElement(LuGraduationCap),
    date: "Jun 2024 -Present",
  },
  {
    title: "Fusion Project",
    location: "IIITDMJ, India",
    description:
      " As a project lead, orchestrated website redesign with 2 designers and 5 developers, achieved a visually striking UI. Optimized Django integration, API caching, documented with reports, READMEs, SRS, ER diagrams etc.",
    icon: React.createElement(CgWorkAlt),
    date: "Dec 2023 - Apr 2024",
  },
  {
    title: "Bharat Intern",
    location: "Remote, India ",
    description:
      "I'm worked as a frontend developer on enhancing UI/UX of website. My stack includes React, Redux,Tailwind CSS.",
    icon: React.createElement(FaReact),
    date: "Aug 2022 - Oct 2022",
  },
  
] as const;

export const projectsData = [
  {
    title: "Personal Chat Room ",
    description:
      "developing admin features for team chatting, ensuring full data access, alongside a robust dashboard for management",
    tags: ["React", "MongoDB", "Matrial MUI", "Socket.io", "Node.js","Framer"],
    imageUrl: ChattingImg,
    projectUrl:"https://github.com/vikasutf8/Real-Estate-Project",
    codeUrl:"https://github.com/vikasutf8/Real-Estate-Project",
    videoLink:"",
  },
  {
    title: "Real Estate Housing",
    description:
      "It is E-commerce website in which user login as Admin to sell own property and Buy/Rent with offered prizing.",
    tags: ["React","Redux", "Node.js", "MongoDB", "Express", "Tailwind"],
    imageUrl: RealEstateImg,
    projectUrl:"https://github.com/vikasutf8/Real-Estate-Project",
    codeUrl:"https://github.com/vikasutf8/Real-Estate-Project",
    videoLink:"",
  },
  {
    title: "My Blogging App",
    description:
      "A public web app where users can write and publish articles. Users can also view articles written by other users.",
    tags: [ "Next.js", "Prisma", "Tailwind", "MongoDB",],
    imageUrl: Blogging,
    projectUrl:"https://github.com/vikasutf8/Real-Estate-Project",
    codeUrl:"https://github.com/vikasutf8/Real-Estate-Project",
    videoLink:"",
  },
  {
    title: "Online Book House",
    description:
      "A fronted project where user can buy books online and also can see the details of the book and also can see the reviews of the book.",
    tags: [ "React", "Redux", "Tailwind"],
    imageUrl: BookHouse,
    projectUrl:"https://onlinebookstore-icw6pa5gm-vikasutf8s-projects.vercel.app/",
    codeUrl:"https://github.com/vikasutf8/Real-Estate-Project",
    videoLink:"",
  },
] as const;

export const skillsData = [
  "C/C++",
  "JavaScript",
  "HTML5",
  "CSS",
  "Next.js",
  "React.js",
  "Node.js",
  "Express.js",
  "Redux",
  "Tailwind CSS",
  "Framer Motion",
  "Prisma",
  "MongoDB",
  "MySQL",
  "PostgreSQL",
  "Git & GitHub",
  "Docker",
  "Postman",
] as const;
