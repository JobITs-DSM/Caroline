import { FieldKey, SortKey } from "./requirements";

export interface SearchRequirement {
  field: FieldKey;
  sort: SortKey;
}
