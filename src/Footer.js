import React from "react";
import { FiMail } from "react-icons/fi";
export default function Footer() {
  return (
    <div className="mt-5 bg-black p-4 py-10 sm:p-16">
      <div className="sm:flex justify-between">
        <div>
          <h1 className="text-white text-2xl font-bold mb-2">
            Wanna Work with me?
          </h1>
          <p className="text-gray-400 mb-5 text-lg">Hit me up on 👇</p>
          <a
            href="mailto:vishalrala1302@gmail.com"
            className="hover:opacity-75"
          >
            <div className="flex cursor-pointer">
              <FiMail
                className="text-3xl mr-3"
                style={{ color: "yellowgreen" }}
              />
              <p className="text-gray-300 mb-0 text-xl">
                vishalrala1302@gmail.com
              </p>
            </div>
          </a>
        </div>
        <div>
          <p className="text-gray-400 mt-6 sm:mt-[90px]">
            Developed by: vishal.dev
          </p>
        </div>
      </div>
    </div>
  );
}
