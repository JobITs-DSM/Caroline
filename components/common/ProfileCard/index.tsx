import s from "./ProfileCard.module.css";
import { FC } from "react";

const ProfileCard: FC = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.profile_infor}>
        <img src="http://image.kmib.co.kr/online_image/2020/0122/202001220402_11170924119205_1.jpg" />
        <div>
          <h1>김팔복</h1>
          <h3>프론트엔드</h3>
        </div>
      </div>
      <button>지원하기</button>
    </div>
  );
};

export default ProfileCard;
