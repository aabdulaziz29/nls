import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/styles/main.css";

import "./18n";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Suspense
    fallback={
      <div className="loader">
        <div class="loader__wrap">
          <div class="bar1"></div>
          <div class="bar2"></div>
          <div class="bar3"></div>
          <div class="bar4"></div>
          <div class="bar5"></div>
          <div class="bar6"></div>
          <div class="bar7"></div>
          <div class="bar8"></div>
          <div class="bar9"></div>
          <div class="bar10"></div>
          <div class="bar11"></div>
          <div class="bar12"></div>
        </div>
      </div>
    }
  >
    <App />
  </Suspense>
);
