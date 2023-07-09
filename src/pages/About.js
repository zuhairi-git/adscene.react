
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Link } from "react-router-dom";

function About() {
  return (
    <>

      {/* Breadcrumbs */}
      <section id="breadcrumbs" className="breadcrumbs">
        <div className="container">

          <div className="d-flex justify-content-between align-items-center">
            <h2>About</h2>
            <ol>
              <li><Link to="/">Home</Link></li>
              <li>About</li>
            </ol>
          </div>

        </div>
      </section>
      {/* End Breadcrumbs */}

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="row content d-flex justify-content-center">
            <div className='col-lg-auto'>
              <img src="/assets/img/adscene-logo.png" alt="Logo" style={{ width: '210px' }} />
            </div>
            <div className="col-lg">
              <h2>What we do?</h2>
              <h3>At AD SCENE, our goal is to transform your ideas or products into captivating visuals and effective advertisements. Whether you have a concept for tangible or digital products, we specialize in bringing your visions to life. From defining your ideas to executing the advertising process, we are here to help you showcase your offerings to the world.</h3>
            </div>
          </div>

        </div>
      </section>
      {/* End About Section */}

      {/* Team Section */}
      <section id="team" className="team section-bg">
        <div className="container">

          <div className="section-title">
            <h2>Team</h2>
            <p>Our Hardowrking Team</p>
          </div>

          <div className="row">

            <div className="col-lg-6">
              <div className="member d-flex align-items-start">
                <div className="pic"><img src="assets/img/team/ali-right.png" className="img-fluid" alt="" /></div>
                <div className="member-info">
                  <h4>Ali Zuhairi</h4>
                  <span>Founder / Producer</span>
                  <p>Establish and manage the company to creates advertising campaigns</p>
                  <div className="social">
                    <a href=""><i className="ri-twitter-fill"></i></a>
                    <a href=""><i className="ri-facebook-fill"></i></a>
                    <a href=""><i className="ri-instagram-fill"></i></a>
                    <a href=""> <i className="ri-linkedin-box-fill"></i> </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 mt-4 mt-lg-0">
              <div className="d-none member d-flex align-items-start">
                <div className="pic"><img src="assets/img/team/hayder.png" className="img-fluid" alt="" /></div>
                <div className="member-info">
                  <h4>Hayder Rasheed</h4>
                  <span>Co-founder / Professional Barber and Photograhper</span>
                  <div className="social">
                    <a href=""><i className="ri-twitter-fill"></i></a>
                    <a href=""><i className="ri-facebook-fill"></i></a>
                    <a href=""><i className="ri-instagram-fill"></i></a>
                    <a href=""> <i className="ri-linkedin-box-fill"></i> </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="d-none col-lg-6 mt-4">
              <div className="member d-flex align-items-start">
                <div className="pic"><img src="assets/img/team/ahmed.png" className="img-fluid" alt="" /></div>
                <div className="member-info">
                  <h4>Ahmed</h4>
                  <span>Fashion Model</span>
                  <p>Quisquam facilis cum velit laborum corrupti</p>
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

      {/* Our Skills Section */}
      <section id="skills" className="skills">
        <div className="container">

          <div className="section-title">
            <h2>Our Skills</h2>
            <p>Check our Our Skills</p>
          </div>

          <div className="row skills-content">

            <div className="col-lg-6">

              <div className="progress">
                <span className="skill">Advertising <i className="val">90%</i></span>
                <ProgressBar striped now={90} label={``} />
              </div>

              <div className="progress">
                <span className="skill">HTML / CSS / React JS UI Development <i className="val">90%</i></span>
                <ProgressBar striped now={90} label={``} />
              </div>

              <div className="progress">
                <span className="skill">Product Management <i className="val">90%</i></span>
                <ProgressBar striped now={90} label={``} />
              </div>

            </div>

            <div className="col-lg-6">

              <div className="progress">
                <span className="skill">Web Design <i className="val">90%</i></span>
                <ProgressBar striped now={90} label={``} />
              </div>

              <div className="progress">
                <span className="skill">WordPress / HubSpot CMS <i className="val">90%</i></span>
                <ProgressBar striped now={90} label={``} />
              </div>

              <div className="progress">
                <span className="skill">Photoshop / Photography <i className="val">90%</i></span>
                <ProgressBar striped now={90} label={``} />
              </div>

            </div>

          </div>

        </div>
      </section>
      {/* End Our Skills Section */}


    </>
  );
}
export default About;