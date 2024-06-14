'use client';
import React, { useState } from 'react';

const NavigationMenuButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const genericHamburgerLine = `h-1 w-6 mb-1 rounded-full transition ease transform duration-300`;
  const toggleButton = () => {
    setIsOpen(!isOpen);
    var navMenuElement = document.getElementById('nav-menu');
    navMenuElement?.classList.toggle('hidden');
  };

  return (
    <button
      className="flex flex-col h-12 w-12 rounded justify-center items-center group"
      onClick={toggleButton}
    >
      <span
        className={`bg-red-900 ${genericHamburgerLine} ${
          isOpen
            ? 'rotate-45 translate-y-2 group-hover:opacity-100'
            : 'group-hover:opacity-100'
        }`}
      />
      <span
        className={`bg-blue-950 ${genericHamburgerLine} ${
          isOpen ? 'opacity-0' : 'group-hover:opacity-100'
        }`}
      />
      <span
        className={`${genericHamburgerLine} ${
          isOpen
            ? '-rotate-45 -translate-y-2 group-hover:opacity-100 bg-blue-950'
            : 'group-hover:opacity-100 bg-yellow-600'
        }`}
      />
    </button>
  );
};

export default NavigationMenuButton;
