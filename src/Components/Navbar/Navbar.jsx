import React from 'react'
import { SiConsul } from "react-icons/si";
import { MdOutlineLanguage } from "react-icons/md";
import { BsPhoneVibrateFill } from "react-icons/bs";
import { CgMenuGridO } from "react-icons/cg";
import flight from '../../asset/flight.png'

const Navbar = () => {
  return (
    <div className= 'navbar flex'>
      <div className= 'navBarOne flex'>
        <div>
        <SiConsul className= 'icons' />
        </div>

         <div className= 'flex'>
            <li className= 'flex'> <BsPhoneVibrateFill className= 'icons' /> Support </li>
            <li className= 'flex'> <MdOutlineLanguage className= 'icons' /> Languages </li>
          </div>  
          <div className= 'atb flex'>
            <span>Sign In</span>
            <span>Sign Out</span>
          </div>
      </div>


      <div className= 'navBarTwo flex'>

        <div className= "flightdiv">
          <img src ={flight} className= 'Flight'/>
        </div>

        <div className="navBarMenu">
          <ul className="menu flex">
            <li className="listItem">Home</li>
            <li className="listItem">About</li>
            <li className="listItem">Offers</li>
            <li className="listItem">Seats</li>
            <li className="listItem">Destinations</li>
          </ul>

          <button className='btn flex btnOne'>
            Contact
          </button>

        </div>

        {/* <button className="btn flex btnTwo">
        Contact
        </button> */}
        <div className='toggleIcon'><CgMenuGridO /></div>


      </div>
    </div>
  )
}

export default Navbar