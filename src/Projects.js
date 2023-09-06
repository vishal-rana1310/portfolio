import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
export default function Projects() {
  return (
    <div className="container p-10 w-1/2 hero-section m-auto" id="experience">
      <h1 className="font-bold text-2xl heading mb-10">
        Some Things I've Built
      </h1>
      <div className="project-details flex mb-20">
        <div className="w-1/2">
          <div>
            <p className="text-lg" style={{ color: "yellowgreen" }}>
              Kubera365
            </p>
            <p className="text-lg text-gray-400 mt-2">
              An Online Gaming/Betting Website
            </p>
            <div className="project-desc p-4 mt-5">
              <p className="text-xs text-gray-400">
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
        <div className="w-1/2 project-image">
          <a href="https://www.kubera365.com" target="_blank">
            <img className="w-full" src={require("./images/kubera.png")} />
          </a>
        </div>
      </div>
    </div>
  );
}
