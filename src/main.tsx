import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import CssBaseline from "@mui/material/CssBaseline";
import { RecoilRoot } from "recoil";
import Typography from "@mui/material/Typography";
import FetchData from "./utils/FetchData";
import { ToggleColorMode } from "./utils/DarkMode";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <CssBaseline />
    <RecoilRoot>
      <React.Suspense
        fallback={
          <Typography variant={"h3"} sx={{ m: "auto", textAlign: "center" }}>
            Loading...
          </Typography>
        }
      >
        <FetchData>
          <ToggleColorMode>
            <App />
          </ToggleColorMode>
        </FetchData>
      </React.Suspense>
    </RecoilRoot>
  </React.StrictMode>
);
