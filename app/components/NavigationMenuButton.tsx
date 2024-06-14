"use client";
import React, { useState } from "react";

const NavigationMenuButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const genericHamburgerLine = `h-1 w-6 mb-1 rounded-full bg-black transition ease transform duration-300`;

  return (
    <button
      className="flex flex-col h-12 w-12 rounded justify-center items-center group"
      onClick={() => setIsOpen(!isOpen)}
    >
      <span
        className={`${genericHamburgerLine} ${
          isOpen
            ? "rotate-45 translate-y-2 group-hover:opacity-100"
            : "group-hover:opacity-100"
        }`}
      />
      <span
        className={`${genericHamburgerLine} ${
          isOpen ? "opacity-0" : "group-hover:opacity-100"
        }`}
      />
      <span
        className={`${genericHamburgerLine} ${
          isOpen
            ? "-rotate-45 -translate-y-2 group-hover:opacity-100"
            : "group-hover:opacity-100"
        }`}
      />
    </button>
  );
};

export default NavigationMenuButton;
