import React from "react";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import '../../style/footer.css'
const Footer = () => {



  return (


    <>

      <div className="footer">
        <div className="footer-container">
          <div><p>Privacy Policy</p></div>
          <div><p>© 2024 Mindfire Solutions. All Rights Reserved.</p></div>
          <div className="social-icons">
            <div><FaInstagram /></div>
            <div><FaFacebook /></div>
            <div><FaLinkedin /></div> {/* Corrected LinkedIn icon */}
            {/* <div><FaThreads /></div> */}
          </div>
        </div>

      </div>


    </>
  )

}

export default Footer
