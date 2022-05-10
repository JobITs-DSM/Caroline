import { FieldKey } from "../../interfaces/requirements";

export const getFiledName = (filed: FieldKey): string => {
  if (filed === "BACKEND") return "백엔드";
  if (filed === "FRONTEND") return "프론트엔드";
  if (filed === "FULL_STACK") return "풀스택";
  return "";
};
