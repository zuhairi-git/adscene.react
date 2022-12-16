import PortfolioContent from "./PortfolioContent";
function Portfolio() {
  return (
    <>

      {/* Breadcrumbs */}
      <section id="breadcrumbs" className="breadcrumbs">
        <div className="container">

          <div className="d-flex justify-content-between align-items-center">
            <h2>Portolio</h2>
            <ol>
              <li><a href="index.html">Home</a></li>
              <li>Portolio</li>
            </ol>
          </div>

        </div>
      </section>
      {/* End Breadcrumbs */}

      <PortfolioContent />

    </>
  );
}

export default Portfolio;