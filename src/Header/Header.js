import React, { useState } from "react";
import Button from "./Button";
import logo from '../images/Logo.png';
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

const Header = () => {

    let Links =[
        {name:"HOME",link:"/"},
        {name:"ABOUT",link:"/"},
        {name:"PORTFOLIO",link:"/"},
        {name:"CLIENTS",link:"/"},
        {name:"ARTICLES",link:"/"},
        {name:"CONTACT US",link:"#footer"},
      ];
  
    const [open,setOpen] = useState(false);


  return (

    <div className='shadow-md w-full fixed top-0 left-0'>
      <div className='md:flex items-center justify-between bg-cyan-800 py-4 md:px-10 px-7'>
        <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
        text-gray-800'>
            <img src={logo} alt=""></img>
        </div>
      
        <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-4 cursor-pointer md:hidden'>
            <AiOutlineMenu className="text-gray-100 text-3xl"></AiOutlineMenu>
        </div>
            <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-teal md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
            {
            Links.map((link)=>(
                <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
                <a as={HashLink} href={link.link} className='text-yellow-400 hover:text-gray-400 duration-500'>{link.name}</a>
                </li>
            ))
            }
            <Button> <Link to="/SignIn"> Join Us</Link> </Button>
            </ul>

        </div>
    </div>

  );
};

export default Header;
