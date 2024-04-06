import React from "react";
import SearchIcon from "../icons/searchIcon/SearchIcon";
import CancelIcon from "../icons/cancelIcon/CancelIcon";
import { CustomInputProps } from "../../types";

const CustomInput = ({ cancel, className, placeholder, value }: CustomInputProps) => {
  return (
    <div
      className={`border border-input-border rounded bg-white ${className}`}
    >
      <SearchIcon />
      <input placeholder={placeholder} className="placeholder:text-black h-full border-none w-full bg-transparent outline-none ring-0" value={value} />
      {cancel && (
        <div className="cursor-pointer ">
          <CancelIcon />
        </div>
      )}
    </div>
  );
};

export default CustomInput;
