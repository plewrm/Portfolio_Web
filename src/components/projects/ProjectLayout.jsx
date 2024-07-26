import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const item = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 },
};

const ProjectLink = motion(Link);
const ProjectLayout = ({ name, description, date, demoLink, role, profile }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const rolePoints = (role || "").split('\n').map(point => point.trim()).filter(point => point);
  return (
    <>
      {/* <ProjectLink
        variants={item}
        href={demoLink}
        target={"_blank"}
        className=" text-sm md:text-base flex  items-center justify-between w-full relative rounded-lg overflow-hidden p-4 md:p-6 custom-bg"
      > */}
      <div
        variants={item}
        className="text-sm md:text-base w-full relative rounded-lg overflow-hidden p-4 md:p-6 custom-bg"
        onClick={() => setIsExpanded(!isExpanded)}
      // onMouseEnter={() => setIsHovered(true)}
      // onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex items-center justify-between space-x-2">
          <div className="flex items-center space-x-2">
            <h3 className="text-foreground">{name}</h3>
            <p className="text-muted hidden sm:inline-block">{description}</p>
          </div>
          <div className="self-end flex-1 mx-2 mb-1 bg-transparent border-b border-dashed border-muted" />
          <div className="flex items-center space-x-2">
            <p className="text-muted sm:text-foreground">{date}</p>
            <button
              className="flex items-center justify-center w-4 h-4 ml-2"
            // onClick={() => setIsExpanded(!isExpanded)}
            >
              <svg
                className={`w-4 h-4 transform transition-transform duration-300 ${isExpanded ? 'rotate-90' : ''}`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
          </div>
        </div>
        {isExpanded && (
          <div className="mt-2 w-full">
            <div className="flex items-center space-x-2">
              <h2 className="text-foreground">{profile}</h2>
            </div>
            <ul className="list-disc list-inside text-foreground">
              {rolePoints.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* </ProjectLink> */}
    </>
  );
};

export default ProjectLayout;
