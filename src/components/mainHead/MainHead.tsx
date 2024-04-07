import React, { useRef } from "react";
import CustomButton from "../customButton";
import TagIcon from "../icons/tagIcon/TagIcon";
import ShareIcon from "../icons/shareIcon/ShareIcon";
import Badge from "../badge";
import LeftIcon from "../icons/leftIcon/LeftIcon";
import { MainHeadProps } from "../../types";
import Slider from "react-slick";

interface Sliderh {
  slickNext: () => void;
}

const MainHead = ({ handleToggle, empty }: MainHeadProps) => {
  let sliderRef = useRef<Sliderh | null>(null);
  const badges = [
    "Schools",
    "Hospital",
    "Resort",
    "Shop",
    "Airport",
    "Train",
    "Night",
    "Public",
    "Parking",
    "Security",
    "Public",
    "Bus",
    "Quiet",
  ];

  function SampleArrow(props: any) {
    const { onClick } = props;
    return <div className="hidden" onClick={onClick} />;
  }

  const next = () => {
    if (sliderRef.current !== null) {
      sliderRef.current.slickNext();
    }
  };

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 12,
    slidesToScroll: 1,
    initialSlide: 12,
    nextArrow: <SampleArrow />,
    prevArrow: <SampleArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 10,
          slidesToScroll: 3,
          initialSlide: 10,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 3,
          initialSlide: 7,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          initialSlide: 4,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto px-2 md:px-4 xl:px-8 2xl:px-4">
      <div className="flex flex-col gap-3">
        <div className="flex flex-col lg:flex-row justify-between gap-3 lg:gap-0 lg:items-center">
          <div className="flex flex-col gap-1">
            <h3 className="text-xl md:text-2xl font-medium">
              Bonny and Clyde Street, Ajao Estate, Lagos
            </h3>
            <p className="font-medium">
              “450” Reviews (People are raving about the selected location)
            </p>
          </div>

          {!empty && (
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
          )}
        </div>
        <div className="flex items-center justify-between gap-2">
          <Slider
            ref={(slider: Sliderh | null) => {
              sliderRef.current = slider;
            }}
            {...settings}
            className="w-[85%]"
          >
            {badges.map((badge) => (
              <Badge id={badge} title={badge} />
            ))}
          </Slider>

          <div className="w-[10%] flex items-end justify-end">
            <button
              onClick={next}
              className="w-8 h-8 rounded-2xl bg-badge-bg flex items-center justify-center hover:bg-primary"
            >
              <LeftIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHead;
