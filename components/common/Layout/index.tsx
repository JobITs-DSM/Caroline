import { FC } from "react";
import Header from "../Header";
import s from "./Layout.module.css";

const Layout: FC = ({ children }) => {
  return (
    <div className={s.root}>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
