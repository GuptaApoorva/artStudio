import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, Twitch } from 'lucide-react';
import { NavLink } from "react-router-dom";
import {Menu, X} from "lucide-react";
import { useState } from "react";

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
const Gallery = () => {
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
            
            <div className="container-md">
                
                <div className="font-serif text-3xl md:text-5xl text-center mt-20 ">GALLERY</div>
                <div className="container-sm m-20 md:pl-10">
                <div class="flex flex-row">
                    <div class="basis-1/4 hidden md:block md:basis-1/2 text-center">
                        <img className="h-25 w-25" src="./acrylic.jpeg"></img>
                    </div>
                    <div class="basis-1/2 pl-10 pr-10 mr-10 md:basis-1/2 text-left bg-home_col md:pl-10">
                        <div className="pt-20 md:pr-20 text-white text-5xl font-serif justify-content">
                        Acrylic Painings
                        </div>
                        <div className="mt-10 pr-16 pb-10 text-white justify-content">
                        Acrylic paintings are created using acrylic paints, known for their versatility and vibrant colors. These paints are water-based, fast-drying, and can be applied to a variety of surfaces such as canvas, paper, and wood. Artists appreciate acrylics for their flexibility, as they can be diluted with water for a watercolor effect or used straight from the tube for a texture similar to oil paints. Acrylics also offer durability, resisting yellowing and fading over time. Their quick drying time allows for faster layering and the ability to easily correct mistakes, making them a popular choice for both beginners and professional artists.
                        </div>
                        {/* <Link to='/blog1'>
                            <button className="bg-gray-900 hover:bg-gray-500 text-white font-bold my-5 py-5 px-10">
                                    Read More!
                            </button>
                        </Link> */}
                    </div>
                </div>
                </div>
            </div>

            <div className="container-md">
                <div className="container-sm m-20 md:pl-10">
                <div class="flex flex-row">
                    <div class="basis-1/4 hidden md:block md:basis-1/2 text-center">
                        <img className="h-25 w-25" src="./drawing.jpeg"></img>
                    </div>
                    <div class="basis-1/2 pl-7 pr-7 mr-10 md:basis-1/2 text-left bg-home_col md:pl-10">
                        <div className="pt-20 md:pr-20 text-white text-5xl font-serif justify-content">
                        Sketching
                        </div>
                        <div className="mt-10 pr-16 pb-10 text-white justify-content">
                        Sketching is a foundational art technique involving quick, freehand drawing to capture the essence of a subject. It serves as a preliminary stage for more detailed works or as an independent art form. Artists use various tools like pencils, charcoal, or ink to create sketches, often focusing on basic shapes, proportions, and light and shadow. Sketching is valued for its spontaneity and the ability to quickly convey ideas and concepts. It enhances observation skills and provides a versatile medium for artistic expression and experimentation.
                        </div>
                        {/* <Link to='/blog2'>
                        <button className="bg-gray-900 hover:bg-gray-500 text-white font-bold my-5 py-5 px-10">
                                Read More!
                        </button>
                        </Link> */}
                        
                    </div>
                </div>
                </div>
            </div>

            <div className="container-md">
                <div className="container-sm m-20 md:pl-10">
                <div class="flex flex-row">
                    <div class="basis-1/4 hidden md:block md:basis-1/2 text-center">
                        <img className="h-25 w-25" src="./mandala.jpeg"></img>
                    </div>
                    <div class="basis-1/2 pl-10 pr-10 mr-10 md:basis-1/2 text-left bg-home_col md:pl-10">
                        <div className="pt-20 md:pr-20 text-white text-5xl font-serif justify-content">
                        Mandala
                        </div>
                        <div className="mt-10 pr-16 pb-10 text-white justify-content">
                        A mandala is a geometric design that holds spiritual significance in various cultures, particularly in Hinduism and Buddhism. It typically features a circular form with intricate patterns radiating from the center, symbolizing the universe and the concept of wholeness. Creating mandalas can be a meditative practice, promoting mindfulness and a sense of inner peace. Artists often use vibrant colors and symmetrical shapes to construct these detailed artworks. Mandalas are used in meditation, art therapy, and as decorative pieces, celebrated for their aesthetic beauty and spiritual depth.
                        </div>
                        {/* <button className="bg-gray-900 hover:bg-gray-500 text-white font-bold my-5 py-5 px-10">
                                Read More!
                        </button> */}
                    </div>
                </div>
                </div>
            </div>

            <div className="container-md pt-10 mt-10 ">
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

export default Gallery;