import * as React from "react";
import { RequirementOptions } from "./../../../interfaces/requirements";

type Props = {
  name: "field" | "sort";
  event: React.ChangeEventHandler<HTMLSelectElement>;
  requirementOptionArray: RequirementOptions<any>[];
};

export const Selector = (props: Props) => {
  return (
    <select name={props.name} onChange={props.event}>
      {props.requirementOptionArray.map((option, index) => (
        <option value={option.key ? option.key : "null"} key={index}>
          {option.name}
        </option>
      ))}
    </select>
  );
};
