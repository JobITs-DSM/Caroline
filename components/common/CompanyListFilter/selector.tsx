import * as React from "react";
import {
  FieldKey,
  RequirementOptions,
  SortKey,
} from "./../../../interfaces/requirements";

type Props = {
  name: "field" | "sort";
  event: React.ChangeEventHandler<HTMLSelectElement>;
  requirementOptionArray: RequirementOptions<any>[];
  defaultValue: FieldKey | SortKey;
};

export const Selector = (props: Props) => {
  return (
    <select
      name={props.name}
      onChange={props.event}
      defaultValue={props.defaultValue ? props.defaultValue : "null"}
    >
      {props.requirementOptionArray.map((option, index) => (
        <option value={option.key ? option.key : "null"} key={index}>
          {option.name}
        </option>
      ))}
    </select>
  );
};
