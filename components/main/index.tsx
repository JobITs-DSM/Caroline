import s from "./main.module.css";
import ProfileCard from "../common/ProfileCard";
import CompanyCardList from "../common/CompanyCardList";
import SlidePage from "./slidePage";
import Chart from "./Chart";
import recruitment from "../../apis/company/recruitment";
import { useQuery } from "react-query";
import { QueryKeys } from "../../constants/queryKeys";
import { useRecoilValue } from "recoil";
import { searchRequirementState } from "./../../atoms/searchRequirement";
import CompanyListFilter from "../common/CompanyListFilter";
import { LoadingSpiner } from "../common/LoadingSpiner";
import ListTitle from "../common/ListTitle";

const Main = () => {
  const searchRequirement = useRecoilValue(searchRequirementState);

  const currentRecruimentCompanyQuery = useQuery(
    [QueryKeys.currentRecruitmentCompanyList, searchRequirement],
    () => recruitment.getCurrentRecruitmentCompanyList(searchRequirement),
    {
      staleTime: Infinity,
    }
  );

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
      <CompanyListFilter />
      {currentRecruimentCompanyQuery.isLoading ? (
        <LoadingSpiner />
      ) : (
        <>
          <ListTitle content="현재 모집중인 취업처" />
          <CompanyCardList
            companyList={currentRecruimentCompanyQuery.data?.data.recruitments}
          />
        </>
      )}
    </div>
  );
};

export default Main;
