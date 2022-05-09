import s from "./SelectOption.module.css";
import { FC } from "react";
import { fields } from "../../../constants/field";

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
        <select name="region">
          {fields.map((field, index) => (
            <option value={field.key?.toString()} key={index}>
              {field.name}
            </option>
          ))}
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
