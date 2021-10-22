import { FC } from "react";
import s from "./Header.module.css";
import Link from "next/link";

const Header: FC = () => {
  return (
    <div className={s.root}>
      <div className={s.top_bar}>
        <div>
          <Link href="/">
            <h1 className={s.logo}>JobITs</h1>
          </Link>
          <div className={s.menu_wrap}>
            <Link href="/list">
              <span>기업 목록</span>
            </Link>
            <Link href="/a">
              <span>취업 통계</span>
            </Link>
            <Link href="/a">
              <span>화원가입/로그인</span>
            </Link>
          </div>
        </div>
      </div>
      <div className={s.under_bar}>
        <div>
          <input className={s.search} placeholder="직종, 회사, 업무 등" />
          <button>검색</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
