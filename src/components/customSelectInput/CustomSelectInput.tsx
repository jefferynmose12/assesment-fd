import React from "react";

const CustomSelectInput = () => {
  return (
    <div className="relative my-3">
      <select
        value=""
        className="block w-full p-3 pr-10 bg-input-hero-bg border-none rounded-md shadow-sm appearance-none focus:outline-none"
      >
        <option value="" disabled hidden>
          Select Amenities
        </option>
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
        <svg
          className="w-5 h-5 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M9.293 14.707a1 1 0 0 0 1.414 0l5-5a1 1 0 0 0-1.414-1.414L10 12.586l-4.293-4.293a1 1 0 1 0-1.414 1.414l5 5z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
};

export default CustomSelectInput;
