'use client';

import React, { useState } from 'react';

const AnimatedMenuButton = ({ collapsed, toggleCollapsed }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCheck = isOpen ? collapsed = true : false;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <button
      className="relative flex h-7 w-7 flex-col items-center justify-center transition-all duration-300 focus:outline-none text-white"
      onClick={toggleMenu}
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
    >
      {/* Top line - transforms to top part of chevron */}
      <span
        className={`absolute block h-0.5 w-6 bg-current transition-all duration-300 ${
          isOpen
            ? 'top-1/2 w-3 -translate-y-[1px] rotate-45 ltr:left-[3px] rtl:right-[3px]'
            : 'top-[5px]'
        }`}
      />
      
      {/* Middle line - fades out */}
      <span
        className={`absolute top-1/2 block h-0.5 w-6 -translate-y-1/2 bg-current transition-all duration-300 ${
          isOpen ? 'opacity-0' : 'opacity-100'
        }`}
      />
      
      {/* Bottom line - transforms to bottom part of chevron */}
      <span
        className={`absolute block h-0.5 w-6 bg-current transition-all duration-300 ${
          isOpen
            ? 'top-1/2 w-3 translate-y-[1px] -rotate-45 ltr:left-[3px] rtl:right-[3px]'
            : 'top-[19px]'
        }`}
      />
    </button>
  );
};

export default AnimatedMenuButton;