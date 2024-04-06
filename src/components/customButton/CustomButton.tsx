import { CustomButtonProps } from "../../types";

const CustomButton = ({
  className,
  title,
  onClick,
  disabled,
}: CustomButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${className} h-[40px] lg:h-[50px] font-medium text-base rounded ${
        disabled
          ? "bg-disable-btn hover:bg-disable-btn "
          : "bg-primary-color hover:bg-blue-900"
      }`}
    >
      {title}
    </button>
  );
};

export default CustomButton;
