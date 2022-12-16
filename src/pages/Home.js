function Home() {
  return (
    <>

      {/* Hero Section */}
      <section id="hero">
        <div id="heroCarousel" data-bs-interval="5000" className="carousel slide carousel-fade" data-bs-ride="carousel">

          <ol className="carousel-indicators" id="hero-carousel-indicators"></ol>

          <div className="carousel-inner" role="listbox">

            {/* Slide 1 */}
            <div className="carousel-item active">
              <div className="carousel-container">
                <div className="container">
                  <h2 className="animate__animated animate__fadeInDown">Welcome to <span>Ad Scene</span></h2>
                  <p className="animate__animated animate__fadeInUp">In AD Scene we want to bring your ideas or products to life by visualizing and advertising them.
                    If you have an idea about tangible or digital products, we can start defining your ideas and put them into the process to be advertised.</p>
                  <a href="#about" className="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</a>
                </div>
              </div>
            </div>

          </div>

          <a className="carousel-control-prev" href="#heroCarousel" role="button" data-bs-slide="prev">
            <span className="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>
          </a>

          <a className="carousel-control-next" href="#heroCarousel" role="button" data-bs-slide="next">
            <span className="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>
          </a>

        </div>
      </section>
      {/* End Hero */}

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">

          <div className="row content">
            <div className="col-lg-6">
              <h2>The Big Picture</h2>
              <h3>The idea is to demonstrate your products in a simple and visual ways for the end users. Nothing work better than visualizing what you want to offer.</h3>
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0">
              <p>Having a product will help you to understand what kind of problem you want to solve and get you focused, and it is easier to specify the product on a higher level and direct them to the right market.
                As a consumer, a product is easier to understand, recognized, and remembered.
              </p>
              <ul>
                <li><i className="ri-check-double-line"></i> The first step is what kind of problem you want to solve or the challenge.</li>
                <li><i className="ri-check-double-line"></i> Second, how are you going to solve it? Or the solution.</li>
                <li><i className="ri-check-double-line"></i> Last, is the result. How your solution resolved the customer challenge.</li>
              </ul>
              <p className="fst-italic">
                These are not easy to explain if you have a complex platform, and that's when having a product makes it easier to demonstrate your solution.
              </p>
            </div>
          </div>

        </div>
      </section>
      {/* End About Section */}

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">

          <div className="row">
            <div className="col-md-6">
              <div className="icon-box">
                <i className="fa-solid fa-display"></i>
                <h4><a href="#">Advertising</a></h4>
                <p>We are promoting your ideas to make selling the products or services accessible to the target audience.</p>
              </div>
            </div>
            <div className="col-md-6 mt-4 mt-md-0">
              <div className="icon-box">
                <i className="fa-solid fa-globe"></i>
                <h4><a href="#">Web Design</a></h4>
                <p>Your website should be a tool to market your products and services. It should be easy to use, maintain, and cost-efficient.</p>
              </div>
            </div>
            <div className="col-md-6 mt-4 mt-md-0">
              <div className="icon-box">
                <i className="fa-solid fa-briefcase"></i>
                <h4><a href="#">Business Processes</a></h4>
                <p>Design, execute, monitor, and optimize. Additionally, we will also analyse and advertise the products for you.</p>
              </div>
            </div>
            <div className="col-md-6 mt-4 mt-md-0">
              <div className="icon-box">
                <i className="fa-solid fa-camera"></i>
                <h4><a href="#">Photography / Graphic Design</a></h4>
                <p>The art of merging photos, graphics, and words to illustrate your ideas for advertising purposes. </p>
              </div>
            </div>
            <div className="col-md-6 mt-4 mt-md-0">
              <div className="icon-box">
                <i className="fa-solid fa-wand-sparkles"></i>
                <h4><a href="#">Genie</a></h4>
                <p>Your wish is my command</p>
              </div>
            </div>
          </div>

        </div>
      </section>
      {/* End Services Section */}

    </>
  );
}

export default Home;