import recruitment from "../../../apis/company/recruitment";
import { useQuery } from "react-query";
import { QueryKeys } from "../../../constants/queryKeys";
import { useRecoilValue } from "recoil";
import { searchRequirementState } from "../../../atoms/searchRequirement";
import { Fragment } from "react";
import CompanyListFilter from "../../common/CompanyListFilter";
import { LoadingSpiner } from "../../common/LoadingSpiner";
import ListTitle from "../../common/ListTitle";
import CompanyCardList from "../../common/CompanyCardList";

export const CurrentRecruitmentCompanyList = () => {
  const searchRequirement = useRecoilValue(searchRequirementState);

  const currentRecruimentCompanyQuery = useQuery(
    [QueryKeys.currentRecruitmentCompanyList, searchRequirement],
    () => recruitment.getCurrentRecruitmentCompanyList(searchRequirement),
    {
      staleTime: Infinity,
    }
  );

  return (
    <Fragment>
      <CompanyListFilter />
      <ListTitle content="현재 모집중인 취업처" />
      {currentRecruimentCompanyQuery.isLoading ? (
        <LoadingSpiner />
      ) : (
        <CompanyCardList
          companyList={currentRecruimentCompanyQuery.data?.data.recruitments}
        />
      )}
    </Fragment>
  );
};
