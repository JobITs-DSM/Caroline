import s from "./companyParticular.module.css";
import { FC, useEffect } from "react";
import Review from "./Review";
import { textareaResizing } from "../../lib/util/textareaResizing";
import ProfileCard from "./../common/ProfileCard/index";
import { useRouter } from "next/dist/client/router";
import recruitment from "../../apis/company/recruitment";
import { useQuery } from "react-query";
import { QueryKeys } from "../../constants/queryKeys";
import { SimilarCompanyList } from "./SimilarCompanyList";

const CompanyParticular: FC = () => {
  const router = useRouter();
  const company_id = router.query.id as string;

  /*   const companyQuery = useQuery(
    [QueryKeys.recruitmentCompanyDetail, company_id],
    () =>
      recruitment.getRecuruitmentCompanyDetail({
        company_id: company_id,
      }),
    {
      staleTime: Infinity,
      enabled: !!company_id, // id가 존재할때만 호출
    }
  ); */

  useEffect(() => {
    textareaResizing("company-description");
  }, []);

  return (
    <div className={s.wrapper}>
      <div className={s.flex_wrapper}>
        <div className={s.cover_maininfor_wrap}>
          <img src="https://jpassets.jobplanet.co.kr/production/uploads/company_story/contents/2020/10/07/2a39a34e-7386-46a3-8111-7607618385fd.jpg" />
          <div className={s.company_main_info}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQnTKaRXoOCdv-pDk7OYHx3C_jcfIVUTCWlr3T-oUbdMsJAkTGOE6zCofHYC-7mnDsiuA&usqp=CAU" />
            <div>
              <h1>프론트엔드</h1>
              <h3>
                배달의 민족 <span>서울</span>
              </h3>
            </div>
          </div>
          <div className={s.tag_wrap}>
            <div>#병역특례</div>
            <div>#지인 추천</div>
            <div>#레전드 회사</div>
          </div>
          <textarea
            defaultValue="원티드랩은"
            className={s.description}
            id="company-description"
            readOnly
          />
        </div>
        <div className={s.side_wrap}>
          <div className={s.sticky_wrap}>
            <ProfileCard />
            <div className={s.review_wrap}>
              <h1>면접 후기</h1>
              <div className={s.review_list}>
                <Review />
                <Review />
              </div>
              <h1>실습 후기</h1>
              <div className={s.review_list}>
                <Review />
                <Review />
              </div>
            </div>
          </div>
        </div>
      </div>
      <SimilarCompanyList hiringCode="BACKEND" />
    </div>
  );
};

export default CompanyParticular;
