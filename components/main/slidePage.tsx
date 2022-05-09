import s from "./main.module.css";
import { FC } from "react";
import { companyDummy } from "../../lib/export/dummyData";

const SlidePage: FC = () => {
  return (
    <div className={s.page}>
      <div className={s.intro}>
        <h1>
          미래에
          <br />
          당신을 위한
          <br />
          최고의 기업들
        </h1>
        <h3>전체 • 2020.10.10</h3>
      </div>
      <div className={s.company_list}>
        {companyDummy.map((company, index) => (
          <div className={s.company} key={index}>
            <img src={company.profile} />
            <div>
              <h1>{company.name}</h1>
              <h3>{company.field} 개발자</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SlidePage;
