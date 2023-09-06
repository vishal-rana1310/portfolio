import React from "react";
import { FaCaretRight } from "react-icons/fa";

export default function Company3() {
  return (
    <div className="px-8 py-2">
      <h1 className="text-lg font-bold mb-4">
        Freelacing has been a great learning source for me.
      </h1>
      <p className="text-gray-400 mb-4">Year 2022 - Present</p>
      <ul className="list-none">
        <li className="text-gray-400 mb-2 flex text-sm">
          <FaCaretRight className="mt-1" style={{ marginRight: "10px" }} />
          <p>
            Worked on number of various projects on Technologies like{" "}
            <span style={{ color: "yellowgreen" }}>
              Reactjs, Nextjs, Vuejs.
            </span>{" "}
            I have demonstrated high quality{" "}
            <span style={{ color: "yellowgreen" }}>Javascript</span> Knowledge
            in my projects. Got experience in managing and maitaining the whole
            and always kept highly efficient and maintainable codebase
          </p>
        </li>
        <li className="text-gray-400 mb-2 flex text-sm">
          <FaCaretRight className="mt-1" style={{ marginRight: "10px" }} />
          <p>
            One of the key projects I have worked on as a freelancer is
            <span className="mx-2" style={{ color: "yellowgreen" }}>
              Kubera365
            </span>
            In this project I have implemented User authentication, session
            management, web sockets for real time data visibility.
          </p>
        </li>
        <li className="text-gray-400 mb-2 flex text-sm">
          <FaCaretRight className="mt-1" style={{ marginRight: "10px" }} />
          <p>
            I have implemented few state management tools like{" "}
            <span style={{ color: "yellowgreen" }}>
              Vuex and Redux/Redux Toolkit.
            </span>{" "}
            Also had a great experience with other UI frameworks like{" "}
            <span style={{ color: "yellowgreen" }}>Bootstrap</span>,{" "}
            <span style={{ color: "yellowgreen" }}>Tailwind CSS</span> and
            Material UI, etc. Also got experience with one of CSS preprocessor
            called <span style={{ color: "yellowgreen" }}>SaSS</span>
          </p>
        </li>
      </ul>
    </div>
  );
}
