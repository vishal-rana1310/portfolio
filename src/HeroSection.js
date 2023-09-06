import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaDesktop } from "react-icons/fa";
import htmlLogo from "./images/html.png";
import cssLogo from "./images/css.png";
import jsLogo from "./images/javascript.png";
import reactLogo from "./images/react.png";
import nextLogo from "./images/nextjs.png";
import vueLogo from "./images/vue.png";
import sassLogo from "./images/sass.png";
import twLogo from "./images/tailwind.png";
import bootstrapLogo from "./images/bootstrap.png";
export default function HeroSection() {
  const [tooltipOrigin, setTooltipOrigin] = useState(null);
  const techStack = [
    {
      id: "html",
      name: "HTML",
      imgrSrc: htmlLogo,
    },
    {
      id: "css",
      name: "CSS",
      imgrSrc: cssLogo,
    },
    {
      id: "js",
      name: "Javascript",
      imgrSrc: jsLogo,
    },
    {
      id: "react",
      name: "React.js",
      imgrSrc: reactLogo,
    },
    {
      id: "next",
      name: "Next.js",
      imgrSrc: nextLogo,
    },
    {
      id: "vue",
      name: "Vue.js",
      imgrSrc: vueLogo,
    },
    {
      id: "sass",
      name: "Sass",
      imgrSrc: sassLogo,
    },
    {
      id: "tailwind",
      name: "Tailwind",
      imgrSrc: twLogo,
    },
    {
      id: "bootstrap",
      name: "Bootstrap",
      imgrSrc: bootstrapLogo,
    },
  ];

  const showTooltip = (item) => {
    setTooltipOrigin(item.id);
    console.log(item);
  };
  return (
    <div className="container p-10 w-3/5 hero-section m-auto">
      <div className="intro flex">
        <div className="intro-content w-3/5 font-bold">
          <h1 className="text-6xl mt-10 mb-10">Front-End Web Developer 👋</h1>
          <p className="font-normal text-lg w-4/5 text-gray-400">
            Hi, I'm Vishal Kumar. A passionate Front-end Web Developer based in
            India, Delhi. 📍
          </p>
          <div className="socials mt-8 flex">
            <FaLinkedin
              className="text-3xl text-gray-400"
              style={{ marginRight: "1.5rem" }}
            />
            <FaGithub
              className="text-3xl text-gray-400"
              style={{ marginRight: "1.5rem" }}
            />
            <FaDesktop
              className="text-3xl text-gray-400"
              style={{ marginRight: "1.5rem" }}
            />
          </div>
        </div>
        <div className="profile-photo w-2/5">
          <div className="hero-img w-full"></div>
        </div>
      </div>
      <div className="tech-stack mt-10 pt-10 flex">
        <p className="text-2xl text-gray-400 font-bold">Tech Stack</p>
        {techStack.map((item, index) => {
          return (
            <div
              className="tech-item"
              key={index}
              onMouseEnter={() => showTooltip(item)}
              onMouseLeave={() => setTooltipOrigin("")}
            >
              <img src={item.imgrSrc} />
              {tooltipOrigin === item.id ? (
                <div className="tooltip">
                  <span>{item.name}</span>
                  <div className="tip"></div>
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}
