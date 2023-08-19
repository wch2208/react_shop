import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import CssBaseline from "@mui/material/CssBaseline";
import { RecoilRoot } from "recoil";
import Typography from "@mui/material/Typography";
import FetchData from "./utils/FetchData";
import { ToggleColorMode } from "./components/MUIcomponents/DarkMode";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <CssBaseline />
    <RecoilRoot>
      <FetchData>
        <ToggleColorMode>
          <React.Suspense
            fallback={
              <Typography
                variant={"h3"}
                sx={{ mt: "1000px", textAlign: "center" }}
              >
                Loading...
              </Typography>
            }
          >
            <App />
          </React.Suspense>
        </ToggleColorMode>
      </FetchData>
    </RecoilRoot>
  </React.StrictMode>
);
