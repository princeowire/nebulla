'use client';

import React, { useState } from 'react';

const RadioGroup = () => {
  const [selectedOption, setSelectedOption] = useState('Monthly');

  const options = [
    { id: 'daily', label: 'Daily' },
    { id: 'monthly', label: 'Monthly' },
    { id: 'yearly', label: 'Yearly' }
  ];

  return (
    <div className="flex flex-wrap -space-x-px" role="radiogroup">
      {options.map((option) => (
        <button
          key={option.id}
          className={`btn-base h-8 border border-gray-800 px-3 text-xs-plus text-gray-400 dark:border-dark-450 dark:text-dark-100
            first:ltr:rounded-l-lg last:ltr:rounded-r-lg first:rtl:rounded-r-lg last:rtl:rounded-l-lg
            ${selectedOption === option.label ? 'bg-[#ffffff10] dark:bg-surface-2' : ''}`}
          type="button"
          role="radio"
          aria-checked={selectedOption === option.label}
          tabIndex={selectedOption === option.label ? 0 : -1}
          onClick={() => setSelectedOption(option.label)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};

export default RadioGroup;