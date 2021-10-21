import s from "./companyParticular.module.css";
import { FC, useEffect } from "react";
import Review from "./Review";
import { textareaResizing } from "../../lib/util/textareaResizing";

const CompanyParticular: FC = () => {
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
            defaultValue="원티드랩은 ‘우리 모두의 커리어 여정을 더 행복하게’라는 미션과 함께  2015년 5월 서비스 출시 이후 
            커리어 산업을 주도하고 있습니다. 오랫동안 광고와 헤드헌터에만 의존하고 있던 보수적인 채용 
            시장에서 모바일 지인 추천, 축제 분위기의 채용 행사, AI를 활용한 매칭 등을 통해 
            다양한 변화를 이끌었습니다.
            
            현재 아시아 5개국에서 200만+ 유저, 1만+ 기업을 연결하고 있으며 채용을 넘어 교육, 
            긱스(프리랜서 매칭), HR 솔루션 등 다양한 커리어 서비스를
             제공합니다.
            유저들과 매일 함께 호흡하는 커리어 습관이 되어 국내를 넘어 아시아, 더 나아가 글로벌에서 
            ‘가장 사랑받는 Life Career Platform’이 되겠습니다.
            
            주요업무
            • 원티드의 HR SaaS 국내 및 글로벌 서비스 기능 제공을 위한 신규 기능 개발 및 유지보수
            • 고객과 직접적인 커뮤니케이션을 통한 기능 개선
            • 단위/기능 테스트 코드 작성
            
            자격요건
            • 원티드의 기업문화, Wanted Way 와 잘 맞는 분 (https://bit.ly/3sWddfk)
            • Javascript MVC 프레임워크 (React, AngularJS, Vue.js, etc)를 사용한 경험
            • 컴퓨터 사이언스 기본 지식 (데이터베이스, 네트워크, 자료구조 등)
            • HTML, CSS, Javascript에 대한 이해가 깊은 분
            • 원활한 커뮤니케이션 능력
            
            우대사항
            • 디자인 시스템 경험
            • 서비스 개선 경험 (UI/UX/성능 및 속도 이슈 등)
            • UI/UX에 대한 경험이 있으신 분
            
            혜택 및 복지
            [업무에 몰입]
            • 전 직원 스톡옵션 지급
            • 하루 8시간, 야근을 지양하고 근무시간에 집중하는 문화 (야근 시 택시비 지원)
            • 서울의 대표 랜드마크인 롯데월드타워 35층에 위치하여 쾌적하고 안전한 사무실
            • 편리한 출퇴근 (지하철 2/8호선 잠실역에서 사무실 바로 연결)
            • 집중 업무공간 및 공용 스탠딩 데스크에서 업무 가능
            • 직무 수행에 필요한 최신 장비/소프트웨어 제공 (랩톱 3년마다 교체)
             
            [건강과 리프레시]
            • 휴가다운 휴가 (사유나 승인 없이 스스로 휴가 계획)
            • 리프레시 휴가 제도 (3/5/7년 만근 시 2주 리프레시 휴가)
            • 명절 전날, 생일이 있는 주 조기 퇴근
            • 명절 상품권 지급
            • 건강 관리 지원 (건강 검진/백신 휴가/인플루엔자 예방접종/Play zone)
            • 경조 규정에 따라 경조금 지원 (본인 결혼 시 100만 원, 출산 시 50만 원 등)"
            className={s.description}
            id="company-description"
            readOnly
          />
        </div>
        <div className={s.side_wrap}>
          <div className={s.item2}></div>
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
  );
};

export default CompanyParticular;
