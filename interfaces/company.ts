import { FieldKey } from "./requirements";

type Hiring = {
  id: number;
  code: FieldKey;
};

export interface CompanyCardProps {
  enterprise_profile_image_url: string;
  enterprise_background_image_url: string;
  enterprise_name: string;
  recruit_count: number;
  tags: string[];
  work_place: string;
  hiring: Hiring;
}
