function Team() {
  return (
    <>
      {/* Breadcrumbs */}
      <section id="breadcrumbs" className="breadcrumbs">
        <div className="container">

          <div className="d-flex justify-content-between align-items-center">
            <h2>Portolio</h2>
            <ol>
              <li><Link to="/">Home</Link></li>
              <li>Portolio</li>
            </ol>
          </div>

        </div>
      </section>
      {/* End Breadcrumbs */}


      {/* Team Section */}
      <section id="team" className="team ">
        <div className="container">

          <div className="row">

            <div className="col-lg-6">
              <div className="member d-flex align-items-start">
                <div className="pic"><img src="assets/img/team/ali.jpg" className="img-fluid" alt="" /></div>
                <div className="member-info">
                  <h4>Ali Zuhairi</h4>
                  <span>Founder / Producer</span>
                  <p>Explicabo voluptatem mollitia et repellat</p>
                  <div className="social">
                    <a href=""><i className="ri-twitter-fill"></i></a>
                    <a href=""><i className="ri-facebook-fill"></i></a>
                    <a href=""><i className="ri-instagram-fill"></i></a>
                    <a href=""> <i className="ri-linkedin-box-fill"></i> </a>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>
      {/* End Team Section */}



    </>
  );
}
export default Team;