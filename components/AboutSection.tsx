import React from 'react'
import Image from "next/image"

const skills = [
    { skill:"HTML" },
    { skill: "CSS" },
    { skill:"JavaScript" },
    { skill: "TypeScript" },
    { skill: "React" },
    { skill:"Next.js" },
    { skill: "Tailwind CSS" },
    { skill:"Python" },
    { skill: "Java" },
    { skill:"Git" },
    { skill: "GitHub" },
]

const AboutSection = () => {
  return (
    <section id="about">
        <div className="my-12 pb-12 md:pt-16 md:pb-48">
            <h1 className="text-center font-bold text-4xl">
                About Me
                <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
                </h1>
            <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:flex-row md:text-left md:p-4 md:space-y-0 md:space-x-10">
            <div className="md:w-1/2">
                <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
                    Get to know me</h1>
                <p>Hello! My name is Andre and I&#39;m currently a full time student
                    at McGill University studying computer science. 
                </p>
                <br />
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <br />
                <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse 
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                cupidatat non proident, sunt in culpa qui officia deserunt mollit 
                anim id est laborum.
                </p>
            </div>
            <div className="md:w-1/2">
                <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
                    My Skills
                    </h1>
                    <div className="flex flex-wrap flex-row justify-center md:justify-start">
                        {skills.map((item, idx) => {
                            return <p key={idx} className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold">
                                {item.skill}
                                </p>
                        })}
                    </div>
                <Image
                className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-8"
                src="/about-image.png" 
                alt="" 
                width={325} 
                height={325}
                />
            </div>
            </div>
        </div>
        </section>
  )
}

export default AboutSection