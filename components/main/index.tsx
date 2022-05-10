import s from "./main.module.css";
import ProfileCard from "../common/ProfileCard";
import SlidePage from "./slidePage";
import Chart from "./Chart";
import { CurrentRecruitmentCompanyList } from "../common/CurrentRecruitmentCompanyList";

const Main = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.grid_wrapper}>
        <div className={s.recommend_company_wrapper}>
          <div className={s.cover_wrapper}>
            <SlidePage />
          </div>
        </div>
        <ProfileCard />
        <Chart />
      </div>
      <CurrentRecruitmentCompanyList />
    </div>
  );
};

export default Main;
