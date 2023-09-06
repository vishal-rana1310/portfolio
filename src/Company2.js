import React from "react";
import { FaCaretRight } from "react-icons/fa";

export default function Company2() {
  return (
    <div className="px-8 py-2">
      <h1 className="text-lg font-bold mb-4">
        Frontend Developer{" "}
        <span style={{ color: "yellowgreen", opacity: "0.7" }}>
          @ Deepdive Media Pvt. Ltd.
        </span>
      </h1>
      <p className="text-gray-400 mb-4">Mar 2021 - Feb 2022</p>
      <ul className="list-none">
        <li className="text-gray-400 mb-2 flex text-sm">
          <FaCaretRight className="mt-1" style={{ marginRight: "10px" }} />
          <p>
            Drove excellence as a{" "}
            <span style={{ color: "yellowgreen" }}>
              React.js and Next.js developer
            </span>
            , mastering intricate UI challenges. Engineered high-performing,
            maintainable codebase, showcasing a deep understanding of
            optimization techniques.
          </p>
        </li>
        <li className="text-gray-400 mb-2 flex text-sm">
          <FaCaretRight className="mt-1" style={{ marginRight: "10px" }} />
          <p>
            Spearheaded the creation of sophisticated user interfaces in
            React.js and Next.js, prioritizing seamless performance and
            efficient rendering. Proficiently implemented{" "}
            <span style={{ color: "yellowgreen" }}>
              Redux for state management
            </span>
            , enhancing application stability.
          </p>
        </li>
        <li className="text-gray-400 mb-2 flex text-sm">
          <FaCaretRight className="mt-1" style={{ marginRight: "10px" }} />
          <p>
            Excelled in crafting{" "}
            <span style={{ color: "yellowgreen" }}>
              session management solutions
            </span>
            , enhancing user{" "}
            <span style={{ color: "yellowgreen" }}>
              authentication and authorization
            </span>{" "}
            in React.js and Next.js environments. Demonstrated expertise in
            real-time data integration by skillfully implementing sockets for
            live updates.
          </p>
        </li>
      </ul>
    </div>
  );
}
