import React from "react";
import { Link, useLocation } from "react-router-dom";

function Breadcrumbs({ breadcrumbs }) {
  const location = useLocation();

  return (
    <section id="breadcrumbs" className="breadcrumbs">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <h2>{breadcrumbs[breadcrumbs.length - 1].label}</h2>
          <ol>
            {breadcrumbs.map((breadcrumb, index) => (
              <li key={index}>
                {breadcrumb.path === location.pathname ? (
                  <span>{breadcrumb.label}</span>
                ) : (
                  <Link to={breadcrumb.path}>{breadcrumb.label}</Link>
                )}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Breadcrumbs;
