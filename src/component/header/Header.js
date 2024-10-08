import React from "react";
import '../../style/header.css'
import { FaSearch } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
const Header = () => {




  return (


    <>

      <div className="header-box-1">

        <div>
          <img className="company-name-logo" src="https://www.mindfiresolutions.com/home-assets/images/logo.webp" alt="company-name-logo" />
        </div>
        <div className="header-center-div">
          <ul className="hedaer-list-ul">

            <li className="dropdown">
              About Us <RiArrowDropDownLine />
              <ul className="dropdown-menu">
                <li>Our Team</li>
                <li>Our History</li>
                <li>Mission & Vision</li>
              </ul>
            </li>
            <li>Services <RiArrowDropDownLine /></li>
            <li>Industries <RiArrowDropDownLine /></li>
            <li>Knowledge </li>
            <li>Portfolio <RiArrowDropDownLine /></li>
            <li>People <RiArrowDropDownLine /></li>
            <li>Contact us</li>
          </ul>

        </div>
        <div className="serach-btn"><FaSearch /></div>
      </div>



    </>
  )
}

export default Header
