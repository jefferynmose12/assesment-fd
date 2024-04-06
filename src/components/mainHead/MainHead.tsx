import React from "react";
import CustomButton from "../customButton";
import TagIcon from "../icons/tagIcon/TagIcon";
import ShareIcon from "../icons/shareIcon/ShareIcon";
import Badge from "../badge";
import LeftIcon from "../icons/leftIcon/LeftIcon";
import { MainHeadProps } from "../../types";

const MainHead = ({ handleToggle }: MainHeadProps) => {
  const badges = [
    "Schools",
    "Hospitals",
    "Resort Park",
    "Shopping Malls",
    "Airport",
    "Train Station",
    "Nightlife",
    "Public Wifi",
    "Parking Lot",
    "Security",
    "Public Transport",
    "Bus Station",
    "Quiet",
  ];

  return (
    <div className="container mx-auto px-2 md:px-4 xl:px-8 2xl:px-4">
      <div className="flex flex-col gap-3">
        <div className="flex flex-col lg:flex-row justify-between gap-3 lg:gap-0 lg:items-center">
          <div className="flex flex-col gap-1">
            <h3 className="text-2xl font-medium">
              Bonny and Clyde Street, Ajao Estate, Lagos
            </h3>
            <p className="font-medium">
              “450” Reviews (People are raving about the selected location)
            </p>
          </div>

          <div className="flex items-center gap-4">
            <CustomButton
              title="Leave a review"
              className="px-6 lg:px-10 text-white"
              onClick={handleToggle}
            />
            <CustomButton
              title={<TagIcon />}
              className="border-2 border-primary-color bg-transparent px-5"
            />
            <CustomButton
              title={<ShareIcon />}
              className="border-2 border-primary-color bg-transparent px-4"
            />
          </div>
        </div>
        <div className="flex items-start justify-between gap-2">
          <div className="flex flex-wrap gap-2 items-center">
            {badges.map((badge) => (
              <Badge id={badge} title={badge} />
            ))}
          </div>

          <button className="w-8 h-8 rounded-2xl bg-badge-bg flex items-center justify-center hover:bg-primary">
            <LeftIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainHead;
