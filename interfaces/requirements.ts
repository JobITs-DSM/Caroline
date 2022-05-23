export type FieldKey = "FRONTEND" | "BACKEND" | "FULL_STACK" | null;

export type SortKey = "LATEST" | "PERIOD" | "POPULAR";

export interface RequirementOptions<T> {
  name: string;
  key: T;
}
