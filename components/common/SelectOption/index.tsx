import s from "./SelectOption.module.css";
import { FC } from "react";

const SelectOption: FC = () => {
  return (
    <div className={s.wrapper}>
      <div>
        <select>
          <option value="">태그별 모아보기</option>
        </select>
        <select name="" id="">
          <option value="">전체 지역</option>
        </select>
        <select name="" id="">
          <option value="">전체 분야</option>
        </select>
      </div>
      <div>
        <select name="" id="">
          <option value="">최신순</option>
        </select>
      </div>
    </div>
  );
};

export default SelectOption;
