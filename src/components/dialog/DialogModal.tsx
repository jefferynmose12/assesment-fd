import { DialogModalProps } from "../../types";
import CustomSelectInput from "../customSelectInput";
import ReactStars from "react-rating-stars-component";
import CustomButton from "../customButton";

const DialogModal = ({
  open,
  handleToggle,
  handleRating,
  value,
  handleChange,
  onSubmit,
  disable,
  checked,
  onCheckbox
}: DialogModalProps) => {
  return (
    <div
      className={`modal fixed w-full h-full top-0 left-0 items-center justify-center z-50 ${
        open ? "flex" : "hidden"
      }`}
    >
      <div
        className="modal-overlay absolute w-full h-full bg-modalbg-color opacity-95"
        onClick={handleToggle}
      ></div>

      <div className="modal-container bg-white w-11/12 md:w-1/2 mx-auto rounded shadow-lg z-50 overflow-y-auto">
        <div className="modal-content py-6 px-6">
          <div className="modal-header text-center">
            <h3 className="text-lg font-medium">Review Location</h3>
          </div>
          <div className="modal-body mt-3">
            <p className="text-xl font-medium mb-1">
              Bonny and Clyde Street, Ajao Estate, Lagos
            </p>
            <CustomSelectInput />

            <div className="mt-5">
              <h6 className="text-sm font-medium">Rate location</h6>
              <ReactStars
                count={5}
                onChange={(rate) => handleRating(rate)}
                size={32}
                activeColor="#ffd700"
              />
            </div>

            <div className="mt-3">
              <h6 className="text-sm font-medium">Write Review</h6>

              <textarea
                placeholder="Write a review"
                value={value}
                onChange={handleChange}
                className="my-3 border border-input-border p-2 w-full rounded-md outline-none focus:outline-none "
                cols={20}
                rows={5}
              />

              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={onCheckbox}
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border border-input-border rounded"
                />
                <label className="ml-2 block text-sm text-gray-900">
                  Post as Anonymous
                </label>
              </div>
            </div>
          </div>
          <div className="mt-4 modal-footer flex items-center justify-between">
            <CustomButton
              title="SUBMIT"
              disabled={disable}
              className="w-[49%] text-white"
              onClick={onSubmit}
            />
            <CustomButton
              title="CANCEL"
              className="w-[49%] border-2 border-primary-color bg-transparent text-primary-color"
              onClick={handleToggle}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DialogModal;
