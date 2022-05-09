import s from "./main.module.css";
import { FC } from "react";
import ProfileCard from "../common/ProfileCard";
import CompanyCardList from "../common/CompanyCardList";
import { companyDummy } from "../../lib/export/dummyData";
import SlidePage from "./slidePage";
import Chart from "./Chart";

const Main: FC = () => {
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
      <CompanyCardList
        title="현재 모집중인 취업처"
        companyList={companyDummy}
      />
    </div>
  );
};

export default Main;
