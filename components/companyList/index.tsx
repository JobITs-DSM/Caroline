import { CurrentRecruitmentCompanyList } from "../common/CurrentRecruitmentCompanyList";
import s from "./companyList.module.css";

const CompanyList = () => {
  return (
    <div className={s.wrapper}>
      <CurrentRecruitmentCompanyList />
    </div>
  );
};

export default CompanyList;
