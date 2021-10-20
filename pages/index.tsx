import CompanyCardList from "../components/common/CompanyCardList";
import SelectOption from "../components/common/SelectOption";
import { companyDummy } from "./../export/dummyData";
export default function Home() {
  return (
    <>
      <SelectOption />
      <CompanyCardList
        title="현재 모집중인 취업처"
        companyList={companyDummy}
      />
    </>
  );
}
