import { FieldKey } from "../interfaces/field";

interface field {
  key: FieldKey;
  name: string;
}

export const fields: field[] = [
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
