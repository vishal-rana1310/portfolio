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
    <div className="container p-10 w-full sm:w-3/5 hero-section m-auto">
      <div className="intro flex-col sm:flex-row sm:flex">
        <div className="profile-photo w-full sm:hidden sm:w-2/5 sm:block">
          <div className="hero-img w-full"></div>
        </div>
        <div className="intro-content w-full sm:w-3/5 mb-5 font-bold">
          <h1 className="text-3xl sm:text-6xl mt-10 mb-10">
            Front-End Web Developer 👋
          </h1>
          <p className="font-normal text-lg w-full sm:w-4/5 text-gray-400">
            Hi, I'm Vishal Kumar. A passionate Front-end Web Developer based in
            India, Delhi. 📍
          </p>
          <div className="socials mt-8 flex">
            <a
              href="https://www.linkedin.com/in/vishalkumarpundir/"
              target="_blank"
            >
              <FaLinkedin
                className="text-3xl text-gray-400"
                style={{ marginRight: "1.5rem" }}
              />
            </a>
            <a href="https://github.com/vishal-rana1310" target="_blank">
              <FaGithub
                className="text-3xl text-gray-400"
                style={{ marginRight: "1.5rem" }}
              />
            </a>
            <a href="https://www.fiverr.com/vishalrana1302" target="_blank">
              <FaDesktop
                className="text-3xl text-gray-400"
                style={{ marginRight: "1.5rem" }}
              />
            </a>
          </div>
        </div>
        <div className="profile-photo w-full hidden sm:w-2/5 sm:block">
          <div className="hero-img w-full"></div>
        </div>
      </div>
      <div className="tech-stack sm:mt-10 sm:pt-10 sm:flex">
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
