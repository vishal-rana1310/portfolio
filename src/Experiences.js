import React, { useState } from "react";
import Company1 from "./Company1";
import Company2 from "./Company2";
import Company3 from "./Company3";
export default function Experiences() {
  const [selectedCompany, setSelectedCompany] = useState(1);
  const companies = [
    {
      id: 1,
      name: "Veersa Technologies",
    },
    {
      id: 2,
      name: "Deepdive Media",
    },
    {
      id: 3,
      name: "Freelancing",
    },
  ];
  const selectCompany = (item) => {
    setSelectedCompany(item.id);
  };
  return (
    <div
      className="container p-4 sm:p-10 w-full sm:w-1/2 hero-section m-auto"
      id="experience"
    >
      <h1 className="font-bold text-2xl heading mb-10">Experiences I Got</h1>
      <div className="experience-section mb-5 sm:flex">
        <div className="names">
          {companies.map((item, index) => {
            return (
              <div
                className={`company-name pt-3 pb-3 ${
                  selectedCompany == item.id ? "active" : ""
                }`}
                key={index}
                onClick={() => selectCompany(item)}
              >
                <p className="text-xs sm:text-sm">{item.name}</p>
              </div>
            );
          })}
        </div>
        <div className="description">
          {selectedCompany == 1 && <Company1 />}
          {selectedCompany == 2 && <Company2 />}
          {selectedCompany == 3 && <Company3 />}
        </div>
      </div>
    </div>
  );
}
