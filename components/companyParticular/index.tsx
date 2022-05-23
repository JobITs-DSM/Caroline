import s from "./companyParticular.module.css";
import { FC, useEffect } from "react";
import { textareaResizing } from "../../lib/util/textareaResizing";
import ProfileCard from "./../common/ProfileCard/index";
import { useRouter } from "next/dist/client/router";
import recruitment from "../../apis/company/recruitment";
import { useQuery } from "react-query";
import { QueryKeys } from "../../constants/queryKeys";
import { SimilarCompanyList } from "./SimilarCompanyList";
import { LoadingSpiner } from "../common/LoadingSpiner";
import { CompanyDetail } from "../../interfaces/company";
import ReviewContainer from "./ReviewContainer";

const CompanyParticular: FC = () => {
  const router = useRouter();
  const company_id = router.query.id as string;
  const companyQuery = useQuery(
    [QueryKeys.recruitmentCompanyDetail, company_id],
    () =>
      recruitment.getRecuruitmentCompanyDetail({
        company_id: company_id,
      }),
    {
      staleTime: Infinity,
      enabled: !!company_id, // id가 존재할때만 호출
    }
  );
  const company: CompanyDetail | null = companyQuery.data?.data;

  useEffect(() => {
    textareaResizing("company-description");
  }, []);
  if (companyQuery.isLoading) return <LoadingSpiner />;
  if (company)
    return (
      <div className={s.wrapper}>
        <div className={s.flex_wrapper}>
          <div className={s.cover_maininfo_wrap}>
            <img src={company.enterprise_background_image_url} />
            <div className={s.company_main_info}>
              <img src={company.enterprise_profile_image_url} />
              <div>
                <h1>프론트엔드</h1>
                <h3>
                  {company.enterprise_name} <span>{company.work_place}</span>
                </h3>
              </div>
            </div>
            <div className={s.tag_wrap}>
              {company.tags.map((tag, index) => (
                <div key={index}># {tag}</div>
              ))}
            </div>
            <textarea
              defaultValue={company.introduce}
              className={s.description}
              id="company-description"
              readOnly
            />
          </div>
          <div className={s.side_wrap}>
            <div className={s.sticky_wrap}>
              <ProfileCard />
              <ReviewContainer regist_num={company.registration_number} />
            </div>
          </div>
        </div>
        <SimilarCompanyList hiringCode="BACKEND" />
      </div>
    );
  return <></>;
};

export default CompanyParticular;
