import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { Instagram, Facebook, Twitter, Twitch } from 'lucide-react';


const Home2 = () => {

    useEffect(() => {
        AOS.init({duration:1000})
    })
    return(
        <div>
            <div className="container-flex h-128 bg-home_color">
                <div class="flex flex-col md:flex-row">
                    <div class="basis-1/2 mt-10 ml-20 pr-10 md:m-10 md:p-10">
                        <div className="text-3xl font-medium pb-5 md:text-5xl font-serif md:font-medium" data-aos="fade-left">
                            Welcome to my world, where I create beautiful things
                        </div>
                    
                        <div className="md:pb-5 text-xl md:py-10" data-aos="fade-left">
                        Come with me on a creative journey!
                        </div>
                        {/* <button className="bg-gray-900 hover:bg-gray-500 text-white font-bold pt:10 py-3 px-7 scroll-smooth focus:scroll-auto">
                            Find Out More!
                        </button> */}
                    </div>

                    <div class="basis-1/2 md:mt-20 mr-20 mb-20 ml-20 py-10 " data-aos="fade-down">
                        <img className="h-29 w-14.5" src="./home.jpeg"></img>
                    </div>
                </div>
            </div>

            <div className="container-flex md:mt-20">
                <div class="flex flex-row">
                    <div class="basis-1/2 mt-10 py-10 flex hidden md:block"  data-aos="fade-up">
                        <img className="m-20 h-50 w-15 pt-10" src="./homepg.png"></img>
                    </div>
                    <div class="basis-1/2 ml-20 pl-10 mt-10 md:m-20 md:p-20">
                        <div className="text-3xl ml-15 pl:15 md:text-5xl font-serif font-medium md:mt-20 md:mb-2 md:py-10">
                            ABOUT ME!
                        </div>
                        <div>
                            <p className="md:mb-2 md:py-10">Hello! I'm Apoorva, a computer science engineer with a deep passion for painting. In my free time, I love exploring different artistic mediums, including acrylics, watercolors, and sketching.</p>
                        </div>
                        <Link to="/about">
                        <button className="bg-gray-900 hover:bg-gray-500 text-white font-bold my-5 py-5 px-7">
                                Find Out More!
                        </button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="container-md bg-black pt-7">
                <div className="text-white text-center font-serif text-5xl md:text-8xl">MY PASSION</div>
                <div class="flex flex-col md:flex-row">
                    <div class="basis-1/3 text-white item-center">
                        <div>
                            <img className="p-10 h-12.5 w-12.5 md:h-25 md:w-25" src="./acrylic.png"></img>
                        </div>
                        <div className="text-2xl ml-16 pl-20 mb-20 font-serif md:text-4xl">ACRYLIC</div>
                    </div>
                    <div class="basis-1/3 text-white">
                        <div>
                            <img className="p-10 h-12.5 w-12.5 md:h-25 md:w-25" src="./img2.png"></img>
                        </div>
                        <div className="text-2xl ml-16  pl-20 mb-20 font-serif md:text-4xl">PAINTING</div>
                    </div>
                    <div class="basis-1/3 text-white">
                        <div>
                            <img className="p-10 h-12.5 w-12.5 md:h-25 md:w-25" src="./img3.png"></img>
                        </div>
                        <div className="text-2xl ml-16  pl-20 mb-20 font-serif md:text-4xl">DRAWING</div>
                    </div>
                </div>
            </div>

            <div className="container-md">
                <div className="font-serif text-3xl md:text-5xl text-center mt-20 ">GALLERY</div>
                <div className="container-sm m-20 pl-5">
                <div class="flex flex-row">
                    <div class="basis-1/4 hidden md:block md:basis-1/2 text-center">
                        <img className="h-25 w-25" src="./acrylic.jpeg"></img>
                    </div>
                    <div class="basis-1/2  md:basis-1/2 text-left bg-home_col md:pl-10">
                        <div className="pt-20 pr-5 pl-5 md:pr-20 text-white text-5xl font-serif justify-content">
                        Acrylic Painings
                        </div>
                        <div className=" pl-10 mt-10 pr-16 text-white justify-content">
                        Acrylic paintings are created using acrylic paints, known for their versatility and vibrant colors. These paints are water-based, fast-drying, and can be applied to a variety of surfaces such as canvas, paper, and wood. 
                        </div>
                        <Link to='/gallery'>
                            <button className="ml-5 bg-gray-900 hover:bg-gray-500 text-white font-bold my-5 py-5 px-10">
                                    View More!
                            </button>
                        </Link>
                    </div>
                </div>
                </div>
            </div>

            {/* <div className="container-md bg-home_color pt-20 pb-20 mb-10 mt-10">
                <div class="flex flex-col item-center justify-center">
                    <div class="flex flex-col">
                        <div className="text-2xl md:text-5xl text-center md:ml-20 md:mr-20 pr-20 pl-20">
                            Write to me and we will find the perfect solutions for you!
                        </div>
                        <div class="grid justify-items-center ...">
                            <div>
                                <button className="l-20 w-40 bg-gray-900 hover:bg-gray-500 text-white font-bold mt-10 ml-20 mr-20 p-5">
                                Contact
                                </button>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div> */}

            <div className="container-md pt-10 pb-10 mb-10 mt-10">
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
                            <div class="flex flex-row mt-10 item-between gap-2">
                                <div><Instagram/></div>
                                <div><Facebook/></div>
                                <div><Twitter/></div>
                                <div><Twitch/></div>
                            </div>
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
    );
}

export default Home2