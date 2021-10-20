import CompanyCardList from "../components/common/CompanyCardList";
import { companyDummy } from "./../export/dummyData";
export default function Home() {
  return (
    <CompanyCardList title="현재 모집중인 취업처" companyList={companyDummy} />
  );
}
