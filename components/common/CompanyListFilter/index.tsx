import s from "./CompanyListFilter.module.css";
import { ChangeEvent, FC } from "react";
import { fields, SortOptions } from "../../../constants/requirementArrays";
import { useRecoilState } from "recoil";
import { searchRequirementState } from "../../../atoms/searchRequirement";
import { Selector } from "./selector";

const CompanyListFilter: FC = () => {
  const [searchRequirement, setSearchRequirement] = useRecoilState(
    searchRequirementState
  );

  const updateSearchRequirement = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSearchRequirement({
      ...searchRequirement,
      [event.target.name]: value === "null" ? null : value,
    });
  };
  return (
    <div className={s.wrapper}>
      <div>
        <select>
          <option value="">태그별 모아보기</option>
        </select>
        <select name="" id="">
          <option value="">전체 지역</option>
        </select>
        <Selector
          event={updateSearchRequirement}
          name="field"
          requirementOptionArray={fields}
          defaultValue={searchRequirement.field}
        />
      </div>
      <div>
        <Selector
          event={updateSearchRequirement}
          name="sort"
          requirementOptionArray={SortOptions}
          defaultValue={searchRequirement.sort}
        />
      </div>
    </div>
  );
};

export default CompanyListFilter;
