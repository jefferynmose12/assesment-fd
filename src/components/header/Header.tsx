import React from "react";
import logo from "../../assets/logo.png";
import avatar from "../../assets/avatar.png";
import { Link } from "react-router-dom";
import CustomInput from "../customInput";
import { HeaderProps } from "../../types";

const Header = ({input}: HeaderProps) => {
  return (
    <div className="container mx-auto py-5 px-2 md:px-4 xl:px-8 2xl:px-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-10 flex-1">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>

          {input && (
            <CustomInput
              cancel
              className="hidden lg:flex h-12 w-9/12 gap-3 items-center px-4"
              placeholder="Enter a text"
              value="Bonny and Clyde Street, Ajao Estate, Lagos"
            />
          )}
        </div>

        <div className="ml-auto flex items-center gap-4">
          <h6 className="text-base font-medium text-black">Welcome!</h6>
          <img className="" src={avatar} alt="logo" />
        </div>
      </div>

      {input && (
        <CustomInput
          cancel
          className="mt-3 lg:hidden h-12 w-full flex gap-3 items-center px-2"
          placeholder="Enter a text"
          value="Bonny and Clyde Street, Ajao Estate, Lagos"
        />
      )}
    </div>
  );
};

export default Header;
