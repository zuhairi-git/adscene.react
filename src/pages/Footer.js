import { useState } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Footer() {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = () => {
    if (email) {
      // Perform subscribe action or API call here
      console.log(`Subscribing with email: ${email}`);
      setEmail('');
    }
  };

  return (
    <>
      {/* Footer */}
      <footer id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">

              <div className="col-lg-4 col-md-6">
                <div className="footer-info">
                  <img src="/assets/img/adscene-white.png" className="mb-3" alt="Logo" style={{ width: "128px" }} />
                  <div>
                    <div>Espoo, Suurpelto</div>
                    <strong>Email:</strong> info@adscene.cc
                  </div>
                  <div className="social-links mt-3">
                    <a href="https://twitter.com/AliZohairi" className="twitter"><i className="bx bxl-twitter"></i></a>
                    <a href="https://www.facebook.com/zuhairi.one" className="facebook"><i className="bx bxl-facebook"></i></a>
                    <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
                    <a href="https://www.linkedin.com/in/ali-zuhairi/" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 footer-links">
                <h4>Our Services</h4>
                <ul>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">Advertising</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">Web Design</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">Business Processes</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">Product Management</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">Photography / Graphic Design</a></li>
                </ul>
              </div>

              <div className="col-lg-4 col-md-6 footer-newsletter">
                <h4>Our Newsletter</h4>

                <Form.Text className="text-light">
                  Get the latest update and offers
                </Form.Text>
                <InputGroup className="mb-3">
                  <Form.Control
                    type="email"
                    placeholder="Your Email Address"
                    aria-label="Your Email Address"
                    aria-describedby="basic-addon2"
                    value={email}
                    onChange={handleEmailChange}
                  />
                  <Button variant="btn-subscribe" id="btn-subscribe" onClick={handleSubscribe}>
                    Subscribe
                  </Button>
                </InputGroup>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <hr />
          <div className="copyright">
            <strong><span>AD SCENE</span></strong><br />Made with React JS
          </div>
        </div>
      </footer>
      {/* End Footer */}
    </>
  );
}

export default Footer;
