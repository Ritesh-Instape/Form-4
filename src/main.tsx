import React from "react";
import ReactDOM from "react-dom/client";
import { CustomProvider } from "rsuite";
import App from "./App.tsx";
import "rsuite/styles/index.less";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CustomProvider theme="light">
      <App />
    </CustomProvider>
  </React.StrictMode>
);
