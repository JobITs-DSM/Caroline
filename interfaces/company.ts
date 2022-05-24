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

type HiringOnCompanyDetail = {
  hiring_id: number;
  code: string;
  task: string;
};

export interface CompanyDetail {
  registration_number: string;
  reception_year: string;
  region: number;
  enterprise_background_image_url: string;
  enterprise_profile_image_url: string;
  introduce: string;
  enterprise_name: string;
  work_place: string;
  hiring_area: Hiring;
  recruit_count: number;
  tags: string[];
  hiring: HiringOnCompanyDetail;
}

export type CompanyReview = {
  content: string;
  user_name: string;
  user_profile_image_url: string;
};

export interface CompanyReviews {
  interview_review_list: CompanyReview[];
  training_review_list: CompanyReview[];
}

export interface CompanyInforForApply {
  registration_number: string;
  hiring_id: number;
}
