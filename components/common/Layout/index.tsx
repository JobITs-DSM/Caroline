import { FC } from "react";
import Header from "../Header";
import s from "./Layout.module.css";

const Layout: FC = ({ children }) => {
  return (
    <>
      <Header />
      <div className={s.root}>
        <div>{children}</div>
      </div>
    </>
  );
};

export default Layout;
