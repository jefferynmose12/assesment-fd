import { ChangeEvent, useState } from "react";
import Header from "../../components/header";
import MainHead from "../../components/mainHead";
import first from "../../assets/firstimg.png";
import second from "../../assets/secondimg.png";
import third from "../../assets/thirdimg.png";
import fourth from "../../assets/fourthimg.png";
import { reviews } from "../../data";
import rating from "../../assets/Rating.png";
import LikeIcon from "../../components/icons/likeIcon/LikeIcon";
import UnlikeIcon from "../../components/icons/unlikeIcon/UnlikeIcon";
import CommentIcon from "../../components/icons/commentIcon/CommentIcon";
import DialogModal from "../../components/dialog/DialogModal";
import avatar from "../../assets/avatar.png";
import anony from "../../assets/anony.png";
import empty from "../../assets/emptystate.png";
import { toast } from "react-toastify";
import CustomButton from "../../components/customButton";
import { ReviewProps } from "../../types";

const ReviewPage = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [reviewList, setReviewList] = useState(reviews);
  const [reviewDetails, setReviewDetails] = useState<any>({
    rate: 0,
    review: "",
    checked: false,
  });

  const handleCheckboxChange = () => {
    setReviewDetails((prev: any) => ({
      ...prev,
      checked: !reviewDetails.checked,
    }));
  };

  const ratingChanged = (newRating: Number) => {
    setReviewDetails((prev: any) => ({
      ...prev,
      rate: newRating,
    }));
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setReviewDetails((prev: any) => ({
      ...prev,
      review: e.target.value,
    }));
  };

  const toggleDialog = () => {
    setOpenDialog(!openDialog);
  };

  const handleSubmit = () => {
    let newArr: any;

    if (reviewDetails.checked) {
      newArr = [
        ...reviewList,
        {
          img: anony,
          name: "Anonymous.",
          review: reviewDetails.review,
          date: 1,
          rating: reviewDetails.rate,
          comment: 10,
          likes: 1234,
          unlike: 4,
        },
      ];
    } else {
      newArr = [
        ...reviewList,
        {
          img: avatar,
          name: "Yomi 0.",
          review: reviewDetails.review,
          date: 3,
          rating: reviewDetails.rate,
          comment: 15,
          likes: 225,
          unlike: 1,
        },
      ];
    }
    setReviewList(newArr);
    toast.success("Review added to List", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
    });
    toggleDialog();
    setReviewDetails({
      rate: 0,
      review: "",
      checked: false,
    });
  };

  return (
    <div className="mx-auto ">
      <div className="fixed mx-auto bg-secondary-color w-full z-40 pb-5">
        <Header input />
        <MainHead handleToggle={toggleDialog} empty={reviewList.length === 0} />
      </div>

      <div className="container mx-auto flex flex-col-reverse lg:flex-row gap-8 pt-[380px] sm:pt-[330px] lg:pt-[230px] 2xl:pt-60 px-2 md:px-4 xl:px-8 2xl:px-4 ">
        <div className="lg:w-[60%] flex flex-col gap-5">
          {reviewList.length === 0 ? (
            <div className="pb-20 lg:pb-0 flex flex-col gap-6 items-center justify-center min-h-full">
              <img src={empty} alt="empty" />
              <p>Oops! No reviews yet.</p>
              <CustomButton
                title="Leave a review"
                className="px-6 lg:px-10 text-white"
                onClick={toggleDialog}
              />
            </div>
          ) : (
            reviewList?.map((review: ReviewProps) => (
              <div className="flex flex-col gap-3 pb-5 border-b border-border-color">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <img src={review.img} alt="rating" className="w-6 h-6" />
                    <h6>{review.name}</h6>
                    <p className="text-gray-300">{review.date} Month ago</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <img src={rating} alt="rating" />
                    <p className="">{review.rating}.0</p>
                  </div>
                </div>
                <p className="text-base capitalize">{review.review}</p>

                <div className="flex gap-5 items-center">
                  <div className="flex items-center gap-1 cursor-pointer">
                    <LikeIcon />
                    <p>{review.likes}</p>
                  </div>

                  <div className="flex items-center gap-1 cursor-pointer">
                    <UnlikeIcon />
                    <p>{review.unlike}</p>
                  </div>

                  <div className="ml-5 flex items-center gap-1 cursor-pointer">
                    <CommentIcon />
                    <p>{review.comment}</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="lg:w-[40%] flex flex-col gap-3">
          <div className="flex flex-col md:flex-row gap-3 md:gap-0 justify-between">
            <img
              src={first}
              alt="firstimg"
              className="rounded-lg md:w-[49%] h-60 lg:h-auto"
            />
            <img
              src={second}
              alt="secimg"
              className="rounded-lg md:w-[49%] h-60 lg:h-auto"
            />
          </div>
          <div className="flex flex-col md:flex-row gap-3 md:gap-0 justify-between">
            <img
              src={third}
              alt="thirdimg"
              className="rounded-lg md:w-[49%] h-60 lg:h-auto"
            />
            <img
              src={fourth}
              alt="fourthimg"
              className="rounded-lg md:w-[49%] h-60 lg:h-auto cursor-pointer"
            />
          </div>
        </div>
      </div>
      <DialogModal
        open={openDialog}
        handleToggle={toggleDialog}
        handleRating={ratingChanged}
        handleChange={handleChange}
        value={reviewDetails.review}
        checked={reviewDetails.checked}
        onCheckbox={handleCheckboxChange}
        onSubmit={handleSubmit}
        disable={reviewDetails.review.length === 0}
      />
    </div>
  );
};

export default ReviewPage;
