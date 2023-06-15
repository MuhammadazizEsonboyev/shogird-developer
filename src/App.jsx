import { Navigate, Route, Routes } from "react-router-dom";
import { NavbarPage } from "./pages/NavbarPages";
import { navbar } from "./utils";
import React from "react";
import NotFound from "./components/NotFound/NotFound";
// import { FooterPages } from "./pages/FooterPages";

export default function App() {
  return (
    <>
      <NavbarPage />

      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Navigate to="/home" />} />
        {navbar?.map(({ path, element }, index) => {
          return (
            <React.Fragment key={index}>
              <Route path={path} element={element} />
            </React.Fragment>
          )
        })}
      </Routes>
      {/* <FooterPages/> */}
    </>
  )
}
