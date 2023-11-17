import React from 'react'
import Image from "next/image"

const skills = [
    { skill:"Git" },
    { skill: "TypeScript" },
    { skill:"HTML" },
    { skill: "CSS" },
    { skill:"JavaScript" },
    { skill: "Node.js" },
    { skill: "React" },
    { skill:"Python" },
    { skill: "R" },
    { skill: "SQL" },
    { skill: "C" },
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
                <p>Hello! My name is Andre and I&#39;m currently a full-time student
                    at McGill University studying computer science and statistics. 
                </p>
                <br />
                <p>
                I am an aspiring software engineer who loves learning about new and
                    emerging technologies. I always strive to challenge myself by 
                    solving problems using efficient and elegant solutions. 
                </p>
                <br />
                <p>
                Building applications that will be able to increase the quality
                    of life of others through simplification or automation is a deep
                    passion of mine, as it also allows me to grow and acquire new skills
                    while giving me a creative outlet.
                </p>
                <br />
                <p>
                Besides that, I enjoy working out, travelling and trying new foods
                    in the company of good friends. I also love going to concerts and 
                    discovering new music. During the colder parts of the year (or when my
                    social battery is drained lol), I prefer to stay inside and play video
                    games or watch shows.
                </p>
                <br />
                <p>
                Reach out to me via email at 
                    <span className="font-semibold text-teal-600">
                    {" "} andrevonvince@gmail.com
                    </span>
                    .
                </p>
                <br />
                <p>
                &quot;The days are slow, but the years go by fast.&quot;
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
                className="hidden md:block md:relative md:top-8 md:left-8 md:z-8"
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