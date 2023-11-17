import React from 'react'
import {
    AiOutlineGithub,
    AiOutlineLinkedin,
    AiOutlineMail,
    AiOutlineFilePdf,
  } from "react-icons/ai"

const Footer = () => {
  return (
    <footer className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
        <hr className="w-full h-0.5 mx-auto mt-8 bg-neutral-200 border-0"></hr>
        <div className="mx-auto p-4 flex flex-col text-center text-neutral-900 md:flex-row md:justify-between">
            <div className="text-neutral-500">© 2023 Andre Tandoc</div>
            <div className="flex flex-row items-center justify-center space-x-2 mb-1">
            <a href="https://github.com/andretandoc" rel="noreferrer" target="_blank">
            <AiOutlineGithub
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500"
              size={30}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/andretandoc/"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineLinkedin
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500"
              size={30}
            />
          </a>

          <a
            href="mailto:andrevonvince@gmail.com"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineMail
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500"
              size={30}
            />
          </a>
          <a
            href="https://drive.google.com/file/d/1Bnfswc5zz1xqs3c0LYz9nStJHsWqSmg8/view?usp=sharing"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineFilePdf
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500"
              size={30}
            />
            </a>
            </div>
        </div>
    </footer>
  )
}

export default Footer