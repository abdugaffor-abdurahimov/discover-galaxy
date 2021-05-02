import { CircularProgress } from "@material-ui/core";
import React, { ReactElement } from "react";

export default function Progress(): ReactElement {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircularProgress />
    </div>
  );
}
