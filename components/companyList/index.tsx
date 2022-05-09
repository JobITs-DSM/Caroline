import { FC } from "react";
import CompanyCardList from "../common/CompanyCardList";
import { companyDummy } from "../../lib/export/dummyData";

const CompanyList: FC = () => {
  return (
    <CompanyCardList title="현재 모집중인 취업처" companyList={companyDummy} />
  );
};

export default CompanyList;
