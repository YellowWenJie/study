import React, { Suspense, useState } from "react";
import { router, unAuthRouter } from "./router";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
function View() {
  const [count, setCount] = useState(0);
  return (
    <>
      {/* suspense 配合 router 的 lazy */}
      <Suspense fallback={<></>}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            {router.map((r) => {
              return <Route path={r.path} key={r.key} element={r.component} />;
            })}
            {unAuthRouter.map((r) => {
              return <Route path={r.path} key={r.key} element={r.component} />;
            })}
          </Routes>
        </BrowserRouter>
      </Suspense>
    </>
  );
}
export default View;
