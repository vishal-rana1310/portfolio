import React from "react";

export default function About() {
  return (
    <div
      className="container p-4 sm:p-10 w-full sm:w-3/5 hero-section m-auto"
      id="about"
    >
      <div className="sm:flex mb-10">
        <div className="about-img-section w-full sm:w-2/5">
          <img src={require("./images/about-img.jpg")} classname="w-full" />
        </div>
        <div className="about-img-section w-full sm:w-3/5 px-4 mt-12 sm:mt-0 sm:px-10">
          <h1 className="font-bold text-2xl mt-5 heading">About Me</h1>
          <p className="text-gray-500 text-2xl font-bold mt-4">
            A dedicated{" "}
            <span style={{ color: "yellowgreen" }}>Front-end Developer</span>{" "}
            based in Delhi, India 📍
          </p>
          <p className="mt-6 text-normal text-gray-300">
            Software Engineer (Frontend Developer), I have a strong background
            in developing user-friendly and visually appealing web applications.
            I have a deep understanding of HTML, CSS, and JavaScript, and I am
            skilled in using modern front-end frameworks and libraries such as
            Vue and React. I have the ability to translate design mockups into
            functioning and responsive web pages, and have experience with
            testing and debugging frontend code. Proficiently integrated RESTful
            APIs into web applications, leveraging data-driven interactions to
            enhance user experiences.
          </p>
        </div>
      </div>
    </div>
  );
}
