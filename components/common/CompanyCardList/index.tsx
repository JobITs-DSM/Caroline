import { FC } from "react";
import s from "./CompanyCardList.module.css";
import { CompanyCardProps } from "./../../../interfaces/company";
import CompanyCard from "../CompanyCard";

interface Props {
  companyList: CompanyCardProps[];
}

const CompanyCardList: FC<Props> = (props) => {
  if (props.companyList.length === 0)
    return <div className={s.company_is_none}>모집중인 취업처가 없습니다.</div>;
  return (
    <div className={s.list_wrap}>
      {props.companyList.map((company, index) => (
        <CompanyCard key={index} company={company} />
      ))}
    </div>
  );
};

export default CompanyCardList;
