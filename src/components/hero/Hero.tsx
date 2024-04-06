import React from "react";
import CustomInput from "../customInput/CustomInput";
import CustomButton from "../customButton";
import frame1 from "../../assets/Frame1.png";
import frame2 from "../../assets/Frame2.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="container mx-auto py-5 px-2 md:px-4 xl:px-8 2xl:px-4 h-full">
      <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center h-[100%] pt-20 lg:pt-0">
        <div className="lg:w-[50%] flex flex-col items-center lg:items-start gap-5 xl:gap-6">
          <h3 className="text-2xl md:text-3xl xl:text-5xl 2xl:text-6xl font-bold leading-16 w-4/5 lg:w-8/12 text-center lg:text-left">
            Find a place you will love to live!
          </h3>
          <p className="mt-1 xl:mt-2 text-base xl:text-xl 2xl:text-2xl leading-6 lg:leading-8 font-medium lg:w-8/12 text-center lg:text-left">
            See through the lenses of people who have lived or visited the
            neighbourhood you might have in mind.
          </p>

          <CustomInput
            placeholder="Enter a text"
            className="h-10 flex gap-2 items-center px-2 bg-input-hero-bg w-[90%] lg:w-9/12"
          />

          <div>
            <Link to="/review">
              <CustomButton title="SEARCH" className="px-6 lg:px-10 text-white" />
            </Link>
          </div>
        </div>

        <div className="hidden lg:block w-[50%] h-full">
          <div className="w-[80%] bg-gray-50 flex ml-auto h-[100%]">
            <img
              src={frame1}
              alt="frame1"
              className="max-h-full w-[50%] overflow-hidden"
            />
            <img
              src={frame2}
              alt="frame2"
              className="max-h-full w-[50%] overflow-hidden"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
