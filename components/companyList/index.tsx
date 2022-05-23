import { CurrentRecruitmentCompanyList } from "../common/CurrentRecruitmentCompanyList";
import ListTitle from "../common/ListTitle";
import s from "./companyList.module.css";

const CompanyList = () => {
  return (
    <div className={s.wrapper}>
      <CurrentRecruitmentCompanyList />
      <ListTitle content="모든 취업처" />
    </div>
  );
};

export default CompanyList;
