import { FieldKey, SortKey } from "../interfaces/requirements";
import { RequirementOptions } from "../interfaces/requirements";

export const fields: RequirementOptions<FieldKey>[] = [
  {
    key: null,
    name: "전체 분야",
  },
  {
    key: "FRONTEND",
    name: "프론트엔드",
  },
  {
    key: "BACKEND",
    name: "백엔드",
  },
  {
    key: "FULL_STACK",
    name: "풀스택",
  },
];

export const SortOptions: RequirementOptions<SortKey>[] = [
  {
    key: "LATEST",
    name: "최신순",
  },
  {
    key: "PERIOD",
    name: "과거순",
  },
  {
    key: "POPULAR",
    name: "인기순",
  },
];
