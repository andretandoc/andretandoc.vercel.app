"use client"
import React from 'react'
import Image from "next/image"
import { Link } from 'react-scroll/modules'
import { HiArrowDown } from "react-icons/hi"

const HeroSection = () => {
  return (
    <section id="home"> 
        <div className="flex flex-col text-center items-center justify-center my-10 py-16 sm:py-32 md:flex-row md:space-x-4 md:text-left md:py-52">
        <div className="md:w-1/2 md:mt-2">
        <Image className="rounded-full shadow-2xl" src="/headshot.png" alt="" width={300} height={300}/>
        </div>
        <div className="md:w-3/5 md:mt-2">
            <h1 className="font-bold text-4xl mt-6  md:mt-0" >Hello, I&#39;m Andre.</h1>
            <p className="text-lg mt-4 mb-6 ">
                I&#39;m a{" "} 
                <span className="font-semibold text-teal-600">
                Computer Science Student{" "}
                </span>
                at McGill University.
            </p> 
            <Link
            to="projects"
            className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700 cursor-pointer"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            >
            Projects
            </Link>
        </div>
    </div>

    <div className="flex flex-row justify-center">

    </div>
    </section> 
)
}

// section id="home" ; this is how the navbar is going to know where to scroll when we click on "Home"
// within our div, we have two more divs to represent the image and the description textbox

export default HeroSection