import "./SocialLinks.css"

import { BsLinkedin } from "react-icons/bs"
import { AiOutlineGithub } from "react-icons/ai"
import { AiFillTwitterCircle } from "react-icons/ai"
import { MdOutlineComputer } from "react-icons/md"
import { IconContext } from "react-icons"
import React from "react"

const SocialLinks = () => {
  return (
    <IconContext.Provider
      value={{ color: "green", className: "global-class-name", size: "40px" }}
    >
      <div className="social-links">
        <a
          href="https://www.linkedin.com/in/zachinjapan888/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <BsLinkedin className="social-link-img" />
        </a>
        <a
          href="https://github.com/zachinjapan"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <AiOutlineGithub className="social-link-img" />
        </a>
        <a
          href="https://twitter.com/zachinjapan888"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <AiFillTwitterCircle className="social-link-img" />
        </a>
        <a
          href="https:zstone.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <MdOutlineComputer className="social-link-img" />
        </a>
      </div>
    </IconContext.Provider>
  )
}

export default SocialLinks