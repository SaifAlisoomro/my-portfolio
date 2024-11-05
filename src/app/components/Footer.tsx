import Link from 'next/link';
import React from 'react'
import { FaFacebook , FaInstagram, FaTwitter,FaLinkedin } from "react-icons/fa";



const Footer = () => {
  return (
    <div>
     <div className='footer'>
    
        <ul className='icons'>
            <li> <Link href=""><FaFacebook /></Link></li>
            <li> <Link href=""> < FaInstagram /></Link></li>
            <li> <Link href=""> < FaTwitter /> </Link></li>
            <li> <Link href=""> < FaLinkedin /></Link></li>
        </ul>
        <p> Copyright &copy; 2024 all Rights reserved </p>

     </div>
    </div>
  )
}

export default Footer
