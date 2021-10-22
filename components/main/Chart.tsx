import s from "./main.module.css";
import { FC } from "react";
import { PieChart } from "react-minimal-pie-chart";

const Chart: FC = () => {
  return (
    <div className={s.graph_wrapper}>
      <div className={s.chart_area}>
        <PieChart
          label={({ dataEntry }) => `${Math.round(dataEntry.percentage)}% 취업`}
          labelStyle={{
            fontSize: "9px",
            fontWeight: "normal",
            fill: "#fff",
          }}
          data={[
            { title: "One", value: 20, color: "#E384FF" },
            { title: "Two", value: 15, color: "#71F3C7" },
            { title: "Three", value: 20, color: "#FFAB61" },
          ]}
          animationDuration={1000}
          animate={true}
        />
      </div>
      <div className={s.graph_infor}>
        <div>
          <div className={s.square} style={{ background: "#E384FF" }} />
          <span>SW 개발과</span>
        </div>
        <div>
          <div className={s.square} style={{ background: "#71F3C7" }} />
          <span>임베디드과</span>
        </div>
        <div>
          <div className={s.square} style={{ background: "#FFAB61" }} />
          <span>정보 보안과</span>
        </div>
      </div>
      <button>더 보기</button>
    </div>
  );
};

export default Chart;
