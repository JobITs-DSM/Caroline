import * as React from "react";
import { RotatingLines } from "react-loader-spinner";

export const LoadingSpiner = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <RotatingLines width="50" strokeWidth="2" strokeColor="#3c70ff" />
    </div>
  );
};
