import React from 'react'
import Navbar from '../Navbar/Navbar';
import {FaPaperPlane} from "react-icons/fa";
import '../Header/Header.css'

export const Header = () => {
  return (
    <header className='header flex flex-center flex-column'>
        <Navbar/> 
        <div className='header-content text-center flex flex-column'>
            <h1 className='text-uppercase header-title'>marketing agency solution</h1>
            <p className='text-lead'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione inventore cumque optio maiores nulla perspiciatis a, veritatis officiis, quibusdam nihil obcaecati? Laudantium veniam molestiae a minus voluptatibus aut exercitationem inventore.</p>
            <a href="/" className='btn header-btn btn-blue'>
                <FaPaperPlane/>
                    <span>get staeted</span>
            </a>
        </div>
        
        
    </header>

  )
}
 export default Header;
