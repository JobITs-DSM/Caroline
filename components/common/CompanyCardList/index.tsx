import { FC } from "react";
import s from "./CompanyCardList.module.css";
import { CompanyCardProps } from "./../../../interfaces/company";
import CompanyCard from "../CompanyCard";
import CompanyListFilter from "../CompanyListFilter";

interface Props {
  title: string;
  companyList: CompanyCardProps[];
}

const CompanyCardList: FC<Props> = (res) => {
  return (
    <div className={s.wrapper}>
      <CompanyListFilter />
      <h1 className={s.title}>{res.title}</h1>
      <div className={s.list_wrap}>
        {res.companyList.map((company, index) => (
          <CompanyCard
            key={index}
            profile={company.profile}
            cover={company.cover}
            applicantCnt={company.applicantCnt}
            companyId={company.companyId}
            name={company.name}
            field={company.field}
            tags={company.tags}
            area={company.area}
          />
        ))}
      </div>
    </div>
  );
};

export default CompanyCardList;
