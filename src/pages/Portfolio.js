
import React, { useState } from "react";
import Breadcrumbs from "../dynamic/BreadCrumbs";
import PortfolioContent from "./PortfolioContent";

function Portfolio() {
  const [breadcrumbs, setBreadcrumbs] = useState([
    { label: "Home", path: "/" },
    { label: "Portfolio", path: "" },
  ]);

  const updateBreadcrumbs = (updatedBreadcrumbs) => {
    setBreadcrumbs(updatedBreadcrumbs);
  };

  return (
    <>
      {/* Breadcrumbs */}
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      {/* End Breadcrumbs */}
      <PortfolioContent updateBreadcrumbs={updateBreadcrumbs} />

    </>

  );
}

export default Portfolio;

