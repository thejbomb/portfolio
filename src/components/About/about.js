import React from "react"
import SkillIcon from "../SkillIcon/skillIcon"
import Fade from "react-reveal/Fade"

import styles from "./about.module.scss"

const About = () => {
  return (
    <section name="about" className={styles.container}>
      <article>
        <Fade top duration={1000} distance="10%">
          <h1 className={styles.header}>ABOUT ME</h1>
          <p>
            A Software Engineer. 
            Passionate in
            improving my skills and learning about the latest technologies. 
          </p>
        </Fade>
      </article>
      <article>
        <Fade top duration={1000} distance="10%">
          <h1 className={styles.header}>SKILLS</h1>
          <p className={styles.subtitle}>
            I have experience with the following tools and technologies:
          </p>

          <div className={styles.skillIcons}>
            <SkillIcon iconType="html5" iconSize="2.5em" />
            <SkillIcon iconType="css3" iconSize="2.5em" />
            <SkillIcon iconType="javascript" iconSize="2.5em" />
            <SkillIcon iconType="react" iconSize="2.5em" />
            <SkillIcon iconType="sass" iconSize="2.5em" />
            <SkillIcon iconType="git" iconSize="2.5em" />
            <SkillIcon iconType="npm" iconSize="2.5em" />
            <SkillIcon iconType="node" iconSize="2.5em" />
            <SkillIcon iconType="express" iconSize="2.5em" />
            <SkillIcon iconType="postgre" iconSize="2.5em" />
          </div>
        </Fade>
      </article>
    </section>
  )
}

export default About
