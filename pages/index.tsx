import CompanyParticular from "../components/companyParticular";
import CompanyCardList from "./../components/common/CompanyCardList/index";
import { companyDummy } from "./../export/dummyData";

export default function Home() {
  return <CompanyCardList companyList={companyDummy} title="모든 취업처" />;
}
