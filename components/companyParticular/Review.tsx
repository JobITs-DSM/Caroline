import { FC } from "react";
import { CompanyReview } from "../../interfaces/company";

interface Props {
  review: CompanyReview;
}

const Review: FC<Props> = ({ review }) => {
  return (
    <div>
      <img src={review.user_profile_image_url} />
      <p>{review.content}</p>
    </div>
  );
};

export default Review;
