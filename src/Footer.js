//Komponenti i footer
export function Footer() {
  return (
    <div className="footer" id="footer1">
      <div className="sb_footer section_padding">
        <div className="sb_footer-links">
          <div className="sb_footer-links_div">
            <h4>Help</h4>
            <a href="#empoyer">
              <p>Payment methods accepted</p>
            </a>
            <a href="#healthplan">
              <p>*Brands excluded from promotions</p>
            </a>
            <a href="#individual">
              <p>*Conditions of our offers</p>
            </a>
          </div>
          <div className="sb_footer-links_div">
            <h4>Our services</h4>
            <a href="#individual">
              <p>Product Care</p>
            </a>
            <a href="#individual">
              <p>Easy return of a product</p>
            </a>
            <a href="#individual">
              <p>my account</p>
            </a>
          </div>
          <div className="sb_footer-links_div">
            <h4>About</h4>
            <a href="#individual">
              <p>Discover The Unlimited Power of Beauty</p>
            </a>
          </div>
          <div className="sb_footer-links_div">
            <h4>Privacy and cookies information</h4>
            <a href="#individual">
              <p>Cookie settings</p>
            </a>
            <a href="#individual">
              <p>General conditions of the loyalty program</p>
            </a>
            <a href="#individual">
              <p>Terms and conditions for publication</p>
            </a>
            <a href="#contact">
              <p>General conditions of Sale</p>
            </a>
          </div>
          <div className="sb_footer-links_div">
            <h4>Cooming soon on</h4>
            <div className="socialmedia">
              <p>
                <img src="img" alt="" />
                Fb
              </p>
              <p>
                <img src="img" alt="" />
                twitter
              </p>
              <p>
                <img src="img" alt="" />
                linkedin
              </p>
              <p>
                <img src="img" alt="" /> insta
              </p>
            </div>
          </div>
        </div>
        <hr></hr>
        <div className="sb_footer-below">
          <div className="sb_footer-copyright">
            <p>@{new Date().getFullYear()} eFurriku. All right reserved</p>
          </div>
          <div className="sb_footer-below-links">
            <a href="/terms">
              <div>
                <p>Terms & Conditions</p>
              </div>
            </a>
            <a href="/terms">
              <div>
                <p>Privacy</p>
              </div>
            </a>
            <a href="/terms">
              <div>
                <p>Security</p>
              </div>
            </a>
            <a href="/Security">
              <div>
                <p>Cookie Declaration</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
