import React from "react"

import {
  FaGithub,
  FaEnvelope,
} from "react-icons/fa"
import { IconContext } from "react-icons"
import Header from "../Header/header"

import styles from "./hero.module.scss"

const Hero = () => {
  return (
    <section className={styles.container}>
      <Header />
      <div className={styles.heroContent}>
        <h1 className={styles.title}>
          Jun Yu Lu
        </h1>
        <h2 className={styles.subtitle}>Software Engineer</h2>
        <a
          className={styles.resumeButton}
          target="#"
          href="https://drive.google.com/open?id=1fdRQ7NwkWkTfbtKXEURG8gXG7hbC8Bhp"
          rel="noopener noreferrer"
          aria-label="View a copy of my resume"
        >
          RESUME
        </a>
      </div>
      <div className={styles.contactInfo}>
        <ul>
          <li>
            <a
              href="https://github.com/thejbomb"
              target="#"
              rel="noopener noreferrer"
              aria-label="View my work on Github"
            >
              <IconContext.Provider value={{ size: "1.5em" }}>
                <FaGithub />
              </IconContext.Provider>
              <span className={styles.contactLabel}>thejbomb</span>
            </a>
          </li>
          <li>
            <a
              href="mailto:junnpei0077@gmail.com"
              aria-label="Send me an e-mail"
            >
              <IconContext.Provider value={{ size: "1.5em" }}>
                <FaEnvelope />
              </IconContext.Provider>
              <span className={styles.contactLabel}>junnpei0077@gmail.com</span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Hero
