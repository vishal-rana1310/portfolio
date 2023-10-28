import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
export default function Projects() {
  return (
    <div
      className="container p-4 sm:p-10 w-full sm:w-1/2 hero-section m-auto"
      id="experience"
    >
      <h1 className="font-bold text-2xl heading mb-10">
        Some Things I've Built
      </h1>
      <div className="project-details sm:flex mb-20 mt-20">
        <div className="w-full sm:w-1/2">
          <div>
            <p className="text-2xl" style={{ color: "yellowgreen" }}>
              Kubera365
            </p>
            <p className="text-lg text-gray-400 mt-2">
              An Online Gaming/Betting Website
            </p>
            <div className="project-desc p-4 mt-5">
              <p className="text-xs text-gray-400 text-justify">
                A website where you can play games like Poker, Roulette and
                other casino games. Game UI is embeded as an I frame. You can
                search your favourite games and play. You can also deposit,
                withdraw seamlessly without any problem. You can browswe games
                by category.
              </p>
            </div>
            <div className="tech-stack">
              <div className="flex">
                <span className="text-xs text-gray-400 mr-5">React</span>
                <span className="text-xs text-gray-400 mr-5">Redux Tookit</span>
                <span className="text-xs text-gray-400 mr-5">Javascript</span>
                <span className="text-xs text-gray-400 mr-5">Sass</span>
              </div>
              <a href="https://www.kubera365.com" target="_blank">
                <FaExternalLinkAlt className="mt-4 text-gray-400  hover:text-gray-200" />
              </a>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/2 mt-6 sm:mt-0 project-image">
          <a href="https://www.kubera365.com" target="_blank">
            <img className="w-full" src={require("./images/kubera.png")} />
          </a>
        </div>
      </div>
      <div className="project-details sm:flex mt-20">
        <div className="w-full hidden sm:block sm:w-1/2 project-image">
          <a href="https://www.boostify.org.uk/" target="_blank">
            <img
              className="w-full h-[300px] object-cover"
              src={require("./images/boostify.png")}
            />
          </a>
        </div>
        <div
          className="w-full sm:w-1/2 project-info"
          style={{ marginLeft: "-40px" }}
        >
          <div>
            <p
              className="text-2xl text-right icon-margin"
              style={{ color: "yellowgreen", marginRight: "-40px" }}
            >
              Boostify
            </p>
            <p
              className="text-lg text-right text-gray-400 mt-2 icon-margin"
              style={{ marginRight: "-40px" }}
            >
              Google Review Automation
            </p>
            <div className="project-desc p-4 mt-5">
              <p className="text-xs text-gray-400 text-justify">
                This website contains two parts Admin Panel and Review Website.
                Admin Panel provides you the ability to scan QR code and Submit
                feedback to the business. Google maps APIs also being utilized
                in this project to submit review on google. Reviews are being
                filtered on the basis of ratings.
              </p>
            </div>
            <div className="tech-stack">
              <div
                className="flex justify-end project-tech"
                style={{ marginRight: "-40px" }}
              >
                <span className="text-xs text-gray-400 ml-5">React</span>
                <span className="text-xs text-gray-400 ml-5">TypeScript</span>
                <span className="text-xs text-gray-400 ml-5">Tailwind CSS</span>
                <span className="text-xs text-gray-400 ml-5">ASP.Net, SQL</span>
              </div>
              <div
                className="icon-margin sm:flex sm:justify-end"
                style={{ marginRight: "-40px" }}
              >
                <a href="https://www.boostify.org.uk/" target="_blank">
                  <FaExternalLinkAlt className="mt-4 text-gray-400  hover:text-gray-200" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full block sm:hidden sm:w-1/2 mt-5 sm:mt-0 project-image">
          <a href="https://www.boostify.org.uk/" target="_blank">
            <img
              className="w-full h-[300px] object-cover"
              src={require("./images/boostify.png")}
            />
          </a>
        </div>
      </div>
    </div>
  );
}
