import Link from 'next/link'
import React from 'react'



interface HeaderProps {
  font:{
    className: string;
  };
}
const Header = ( {font}:HeaderProps) => {
  return (
    <div>
  <div className={`${font.className} links-parent`}>
    <ul className='links'>
        <li className='link'> <Link href="">Work</Link></li>
        <li className='link'> <Link href="">Blog</Link></li>
        <li className='link'><Link href="">Contact</Link></li>
    </ul>
  </div>
    </div>
  )
}

export default Header
