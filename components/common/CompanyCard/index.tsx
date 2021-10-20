import { FC } from "react";
import s from "./CompanyCard.module.css";

interface Props {
  profile: string;
  cover: string;
  name: string;
  field: string;
  tags: string[];
  applicantCnt: number;
  companyId: number;
  area: string;
}

const CompanyCard: FC<Props> = (res) => {
  return (
    <div className={s.wrapper}>
      <div className={s.cover_wrap}>
        <img className={s.profile} src={res.profile} />
        <img className={s.cover} src={res.cover} />
        <h1 className={s.main_infor}>
          {res.field} • {res.applicantCnt}명
        </h1>
        <div className={s.sub_infor_wrap}>
          <h3>회사명</h3>
          <div />
          <span>{res.area}</span>
        </div>
        <div className={s.tag_wrap}>
          {res.tags.map((tag, index) => (
            <div key={index}>{tag}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyCard;
