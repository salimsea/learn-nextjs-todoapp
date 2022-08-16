import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <section className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="text-center">
              <img
                src={
                  "https://user-images.githubusercontent.com/49223890/184792742-185ddb27-fdea-4c0a-b176-67638223f9a0.png"
                }
                width="50"
                className="img-fluid"
              />
              <h4 className="text-copyright-salim mt-2">
                salimsea.netlify.app
              </h4>
              <button
                onClick={() => (window.location = "#")}
                className="btn-costum-primary-outline px-4 py-1 mt-2 mb-3"
              >
                DOWNLOAD RESUME
              </button>
            </div>
          </div>
          <div className="col-md-2">
            <h2>Menu Link</h2>
            <ul>
              <li>
                <div className="bulet-white"></div>
                <Link href={"/portfolio"}>Portfolio</Link>
              </li>
              <li>
                <div className="bulet-white"></div>
                <Link href="https://salim-tekno.blogspot.com/" target="_blank">
                  Blog
                </Link>
              </li>
              <li>
                <div className="bulet-white"></div>
                <Link href={"/tools"}>Tools</Link>
              </li>
              <li>
                <div className="bulet-white"></div>
                <Link href={"/login"}>Admin Console</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-2">
            <div className="mb-3">
              <h2>Location</h2>
              <h6>Bogor, Indonesia</h6>
            </div>
            <div className="mb-3">
              <h2>Whatsapp</h2>
              <h6>+62 821 1223 5774</h6>
            </div>
            <div className="mb-3">
              <h2>Instagram</h2>
              <h6>@salimseal</h6>
            </div>
            <div className="mb-3">
              <h2>Github</h2>
              <h6>@salimsea</h6>
            </div>
          </div>
          <div className="col-md-5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d613.3419266035773!2d106.79596052048245!3d-6.526681395508915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c3ffddca0c23%3A0x41126629b3c1218f!2sDAPUR%20UMMAH%20-%20TAHU%20BAKSO%20%26%20DIMSUM%20ENAK!5e0!3m2!1sid!2sid!4v1643425267942!5m2!1sid!2sid"
              width="100%"
              height="300"
              style={{ borderRadius: "20px" }}
              allowFullScreen
              loading="lazy"
              title="oi"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="copyright">© COPYRIGHT {new Date().getFullYear()}</div>
    </section>
  );
};

export default Footer;
