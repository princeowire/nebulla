'use client';

import React, { useState } from 'react';

const AnimatedMenuButton = ({ collapsed, toggleCollapsed }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <button
      className="relative flex h-7 w-7 flex-col items-center justify-center text-white focus:outline-none"
      onClick={toggleMenu}
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
    >
      {/* Top line */}
      <span
        className={`absolute block h-0.5 w-6 bg-current ${
          isOpen ? 'top-1/2 w-3 ltr:left-[3px] rtl:right-[3px]' : 'top-[5px]'
        }`}
      />

      {/* Middle line */}
      {!isOpen && (
        <span className="absolute top-1/2 block h-0.5 w-6 -translate-y-1/2 bg-current" />
      )}

      {/* Bottom line */}
      <span
        className={`absolute block h-0.5 w-6 bg-current ${
          isOpen ? 'top-1/2 w-3 ltr:left-[3px] rtl:right-[3px]' : 'top-[19px]'
        }`}
      />
    </button>
  );
};

export default AnimatedMenuButton;
