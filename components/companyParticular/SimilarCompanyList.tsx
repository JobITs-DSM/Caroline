import * as React from "react";
import recruitment from "../../apis/company/recruitment";
import { FieldKey } from "../../interfaces/requirements";
import ListTitle from "../common/ListTitle";
import { useQuery } from "react-query";
import { QueryKeys } from "../../constants/queryKeys";
import CompanyCardList from "../common/CompanyCardList";

interface Props {
  hiringCode: FieldKey;
}

export const SimilarCompanyList: React.FC<Props> = ({ hiringCode }) => {
  const { data } = useQuery(
    [QueryKeys.similarCompanyList, hiringCode],
    () => recruitment.getSimilarCompanyList({ hiringCode: hiringCode }),
    {
      staleTime: Infinity,
    }
  );
  return (
    <React.Fragment>
      <ListTitle content="비슷한 취업처" />
      {/*       {data && <CompanyCardList companyList={data.data.recruitments} />} */}
    </React.Fragment>
  );
};
