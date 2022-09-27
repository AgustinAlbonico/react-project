import React, { useState, useEffect } from "react";
import { GrClose } from "react-icons/gr";

export const Warning = () => {
  const [warningIsActive, setWarningIsActive] = useState(true);

  return (
    <section
      className={`${
        warningIsActive ? "flex" : "hidden"
      } justify-between items-center w-full text-black py-2 px-8 bg-blue-400 font-medium`}
    >
      <div></div>
      <div>Lorem ipsum dolor sit amet consectetur.</div>
      <div className="cursor-pointer" onClick={() => setWarningIsActive(false)}>
        <GrClose size={20} />
      </div>
    </section>
  );
};
