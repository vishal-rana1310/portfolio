import React from "react";
import { FaCaretRight } from "react-icons/fa";
export default function Company1() {
  return (
    <div className="px-8 py-2">
      <h1 className="text-lg font-bold mb-4">
        Frontend Engineer{" "}
        <span style={{ color: "yellowgreen", opacity: "0.7" }}>
          @ Veersa Technologies India Pvt. Ltd.
        </span>
      </h1>
      <p className="text-gray-400 mb-4">Feb 2022 - Present</p>
      <ul className="list-none">
        <li className="text-gray-400 mb-2 flex text-sm">
          <FaCaretRight className="mt-1" style={{ marginRight: "10px" }} />
          <p>
            Contributed as a
            <span className="mx-1" style={{ color: "yellowgreen" }}>
              Vue.js developer
            </span>
            , specializing in intricate UI components that balanced aesthetics
            with functionality. Wrote optimized, high-performance code to ensure
            seamless user experiences.
          </p>
        </li>
        <li className="text-gray-400 mb-2 flex text-sm">
          <FaCaretRight className="mt-1" style={{ marginRight: "10px" }} />
          Crafted complex Vue.js-based user interfaces, demonstrating a strong
          commitment to maintainability and efficiency. Engineered codebase for
          long-term scalability and ease of maintenance.
        </li>
        <li className="text-gray-400 mb-2 flex text-sm">
          <FaCaretRight className="mt-1" style={{ marginRight: "10px" }} />
          Excelled in developing performant Vue.js applications by adhering to
          best practices and leveraging advanced techniques. Ensured efficient
          rendering and responsiveness in dynamic UI scenarios.
        </li>
        <li className="text-gray-400 mb-2 flex text-sm">
          <FaCaretRight className="mt-1" style={{ marginRight: "10px" }} />
          <p>
            Demonstrated expertise in real-time data integration by skillfully
            implementing{" "}
            <span style={{ color: "yellowgreen" }}>web-sockets</span> for live
            updates.
          </p>
        </li>
      </ul>
    </div>
  );
}
