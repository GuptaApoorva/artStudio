import React from "react";
import {Menu, X} from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Instagram, Facebook, Twitter, Twitch } from 'lucide-react';

const NavLinks = () => {
    return(
        <>
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/about">ABOUT ME</NavLink>
        <NavLink to="/blog">BLOG</NavLink>
        <NavLink to="/">CONTACT</NavLink>
        </>
    );
}

const Blog1 = () => {
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
                    <div className="flex flex-col pd-3 item-center basis-full bg-home_color">
                        <NavLinks />
                    </div>
                )}
            
            <div className="container-md relative">
                <div className="mt-20 ml-20 mr-20 mb-20">
                    <img className="h-25 w-50" src="blog1_read.png"></img>
                </div>
                <div className="container-sm bg-white ml-20 pl-20 pr-20 mr-20 pt-0 absolute bottom-0 left-0">
                
                <div className="text-5xl pl-20 pr-20" >
                What to keep in mind when creating a visual brand identity?
                </div>
                <div className="pl-20 pr-20 pt-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sem integer vitae justo eget. Ultrices eros in cursus turpis massa. Gravida in fermentum et sollicitudin ac orci phasellus. Mauris pharetra et ultrices neque ornare aenean. Augue mauris augue neque gravida in fermentum et sollicitudin ac. Ut diam quam nulla porttitor. Tincidunt lobortis feugiat vivamus at augue eget arcu dictum. Dignissim enim sit amet venenatis urna. Varius sit amet mattis vulputate enim nulla.
                </div>
                <div className="pl-20 pr-20 pt-10">
                Tristique et egestas quis ipsum. Vel eros donec ac odio tempor orci dapibus ultrices. Adipiscing elit ut aliquam purus. Velit aliquet sagittis id consectetur. Diam quis enim lobortis scelerisque fermentum. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit. Tellus pellentesque eu tincidunt tortor aliquam. Posuere ac ut consequat semper viverra. Mauris augue neque gravida in fermentum et sollicitudin. Faucibus vitae aliquet nec ullamcorper sit amet risus. Magna fermentum iaculis eu non.
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
                                <button className="text-2xl pt-10">
                                @paintdrop_
                                </button>
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
                        <img className="h-50 w-50 transition duration-300 ease-in-out hover:scale-110" src="./imgg3.png"></img>
                    </div>
                    <div class="basis-1/4 relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
                        <img className="h-50 w-50 transition duration-300 ease-in-out hover:scale-110" src="./imgg4.png"></img>
                    </div>
                </div>

                <div className="mt-20">
                    <div class="flex flex-row">
                        <div class="basis-1/3 text-white text-center">
                            <ul className="text-xl md:text-3xl font-serif">
                                <li className="flex justify-start pl-5 pb-2 md:pl-20 md:pb-5">Main</li>
                                <li className="flex justify-start pl-5 pb-2 md:pl-20 md:pb-5">About Me</li>
                                <li className="flex justify-start pl-5 pb-2 md:pl-20 md:pb-5">Offer</li>
                                <li className="flex justify-start pl-5 pb-2 md:pl-20 md:pb-5">Blog</li>
                                <li className="flex justify-start pl-5 md:pl-20">Contact</li>
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

export default Blog1;