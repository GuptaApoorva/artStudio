import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import {Menu, X} from "lucide-react";
import Home2 from "./home2";

const NavLinks = () => {
    return(
        <>
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/about">ABOUT ME</NavLink>
        <NavLink to="/gallery">GALLERY</NavLink>
        </>
    );
}
const Home = () =>{
    const[isOpen, setIsOpen] = useState(false);
    const toggleNavBar = () => {
        setIsOpen(!isOpen);
    };

    
    return(
        <>
            <nav className="p-3 flex flex-wrap bg-home_color pd-20 justify-between items-center">
            <a href="." className="flex gap-2 item-center">
                <img className="h-12 w-21" src="./logo.png"></img>
            </a>
            <div id="nav-menu" className="hidden md:flex gap-10 font-medium">
                <NavLinks/>
            </div>
            <button  className="md:hidden" onClick={toggleNavBar}>{isOpen ? <X/>: <Menu/>}
                    {/* <FontAwesomeIcon icon={faBars} className="text-black-600" /> */}
            </button>
            </nav>
            {isOpen && (
                <div className="flex flex-col pd-3 justify-center item-center basis-full bg-home_color pl-20 pt-10 ">
                    <NavLinks />
                </div>
            )}

            <div> <Home2/> </div>
        </>
        
    );
}

export default Home;