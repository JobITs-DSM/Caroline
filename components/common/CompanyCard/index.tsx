import { FC, useCallback } from "react";
import s from "./CompanyCard.module.css";
import { useRouter } from "next/dist/client/router";
import { CompanyCardProps } from "./../../../interfaces/company";
import { getFiledName } from "./../../../lib/util/getFieldName";

interface Props {
  company: CompanyCardProps;
}

const CompanyCard: FC<Props> = ({ company }) => {
  const router = useRouter();

  const routingToCompanyParticular = useCallback(() => {
    router.push(`/company/${company.hiring.id}`);
  }, []);

  return (
    <div className={s.wrapper}>
      <div className={s.cover_wrap}>
        <img className={s.profile} src={company.enterprise_profile_image_url} />
        <img
          className={s.cover}
          src={company.enterprise_background_image_url}
          onClick={routingToCompanyParticular}
        />
      </div>
      <h1 className={s.main_infor}>
        {getFiledName(company.hiring.code)} • {company.recruit_count}명
      </h1>
      <div className={s.sub_infor_wrap}>
        <h3>회사명</h3>
        <div />
        <span>{company.work_place}</span>
      </div>
      <div className={s.tag_wrap}>
        {company.tags.map((tag, index) => (
          <div key={index}>#{tag}</div>
        ))}
      </div>
    </div>
  );
};

export default CompanyCard;
