import React from "react";
import Home from "./home";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {Menu, X} from "lucide-react";
import { Instagram, Facebook, Twitter, Twitch } from 'lucide-react';
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";


const NavLinks = () => {
    return(
        <>
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/about">ABOUT ME</NavLink>
        <NavLink to="/gallery">GALLERY</NavLink>
        {/* <NavLink to="/">CONTACT</NavLink> */}
        </>
    );
}

const AboutMe = () => {
    useEffect(() => {
        AOS.init({duration:1000})
    })
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
                </button>
                </nav>
                {isOpen && (
                    <div className="flex flex-col pd-3 justify-center item-center basis-full bg-home_color pl-20 pt-10 pb-10">
                        <NavLinks />
                    </div>
                )}
                
                <div>
                    <div class="flex flex-col md:flex-row">
                        <div class="basis-1/2" >
                            <img className=" h-30 w-15 md:h-55 md:w-23.5 mt-20 md:ml-20 pt-10" src="./aboutmee.jpeg"></img>
                        </div>
                        <div class="basis-1/2 mt-20 pt-10 pl-20">
                            <div className="font-serif text-5xl md:mt-20 md:pl-20 md:pt-10" >
                                ABOUT ME!
                            </div>
                            <div>
                                <p className="pt-20 md:pl-20 pr-20" >
                                Hello! I'm Apoorva, a computer science engineer with a deep passion for painting. In my free time, I love exploring different artistic mediums, including acrylics, watercolors, and sketching. I also enjoy creating intricate mandala designs, finding them both relaxing and creatively fulfilling. My artwork showcases a variety of styles and techniques, reflecting my diverse interests. Here are some examples of my recent work.
                                </p>
                            </div>
                            <div className="md:ml-20 mt-10" >
                                <Link to='/gallery'>
                                <button className="bg-gray-900 hover:bg-gray-500 text-white font-bold my-5 py-5 px-10">
                                        View!
                                </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                

                <div>
                    <div class="flex flex-col md:flex-row">
                        <div class="basis-1/2 mt-20 pt-10 pl-20">
                            
                            <div>
                                <p className="pt-20 md:pl-20 pr-20" data-aos="fade-left">
                                My work spans a variety of styles and techniques, from serene landscapes and vibrant abstracts to intricate portraits. I strive to capture the essence of beauty, emotion, and the world around us through my art.

Painting is more than just a hobby for me—it's a way to communicate and connect with others. I invite you to explore my gallery, where every painting tells a unique story and offers a glimpse into my artistic vision.

Thank you for visiting, and I hope my art resonates with you as much as it has enriched my life.
                                </p>
                            </div>
                            <div className="md:ml-20 mt-10">
                                <Link to='/gallery'>
                                <button className="bg-gray-900 hover:bg-gray-500 text-white font-bold my-5 py-5 px-10">
                                        View!
                                </button>
                                </Link>
                            </div>
                        </div>
                        <div class="basis-1/2 flex " data-aos="fade-down">
                            <img className=" h-30 w-30 ml-10 md:h-50 md:w-23.5 mt-20 md:ml-0 pt-10 pr-20" src="./aboutme2.jpeg"></img>
                        </div>
                    </div>
                </div>

                <div className="container-md pt-10 mt-10">
                <div class="flex flex-col item-center justify-center">
                    <div class="flex flex-col">
                        <div className="text-3xl md:text-5xl text-center md:ml-20 md:mr-20 pr-20 pl-20">
                            Follow me on instagram
                        </div>
                        <div class="grid justify-items-center ...">
                            <div>
                            <Link to='https://www.instagram.com/paintdrop__/'>
                                <button className="text-2xl pt-10">
                                @paintdrop_
                                </button>
                                </Link>
                            </div>
                            <div class="flex flex-row mt-10 mb-10 item-between gap-2">
                                <div><Instagram/></div>
                                <div><Facebook/></div>
                                <div><Twitter/></div>
                                <div><Twitch/></div>
                            </div>
                        </div>
                        
                    </div>
                </div>

                <div className="container-flex bg-footer_color pt-10 pb-10">
                <div class="flex flex-col md:flex-row pl-20 pr-20">
                    <div class="basis-1/4 relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
                        <img className="h-50 w-50 transition duration-300 ease-in-out hover:scale-110" src="./imgg1.png"></img>
                    </div>
                    <div class="basis-1/4 relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
                        <img className="h-50 w-50 transition duration-300 ease-in-out hover:scale-110" src="./imgg2.png"></img>
                    </div>
                    <div class="basis-1/4 relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
                        <img className="h-50 w-50 transition duration-300 ease-in-out hover:scale-110" src="./footer2.jpeg"></img>
                    </div>
                    <div class="basis-1/4 relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
                        <img className="h-50 w-50 transition duration-300 ease-in-out hover:scale-110" src="./footer3.jpeg "></img>
                    </div>
                </div>

                <div className="mt-20">
                    <div class="flex flex-row">
                        <div class="basis-1/3 text-white text-center">
                            <ul className="text-xl md:text-3xl font-serif">
                            <Link to='/'>
                                <li className="flex justify-start pl-5 pb-2 md:pl-20 md:pb-5">Home</li>
                                </Link>
                                <Link to='/about'>
                                <li className="flex justify-start pl-5 pb-2 md:pl-20 md:pb-5">About Me</li>
                                </Link>
                                <Link to='/gallery'>
                                <li className="flex justify-start pl-5 pb-2 md:pl-20 md:pb-5">Gallery</li>
                                </Link>
                            </ul>
                        </div>
                        <div class="basis-1/3 text-white">
                            <img className="ml-20 pl-10 h-20 w-21 hidden md:block" src="./footer.png"></img>
                        </div>
                        <div class="basis-1/3 text-white flex justify-end pr-20">
                            <div className="text-md md:text-xl">Art Studio</div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </>
    );
}

export default AboutMe;