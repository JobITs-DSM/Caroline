import { FC } from "react";
import s from "./CompanyCardList.module.css";
import { CompanyCardProps } from "./../../../interfaces/company";
import CompanyCard from "../CompanyCard";

interface Props {
  companyList: CompanyCardProps[];
}

const CompanyCardList: FC<Props> = (props) => {
  return (
    <div className={s.list_wrap}>
      {props.companyList.map((company, index) => (
        <CompanyCard key={index} company={company} />
      ))}
    </div>
  );
};

export default CompanyCardList;
