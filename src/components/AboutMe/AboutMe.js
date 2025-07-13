import React from 'react'
import { getImageUrl } from '../../util'
import styles from './AboutMe.module.css'

export const AboutMe = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
        <h1 className={styles.title}>Hi, I am Puneeth</h1>
        <p className={styles.description}>Dedicated and committed to my passion for achievements, and to join a renowned Organization to enhance my skills and knowledge and to work for the growth of the Organization. </p>
        <a href='mailto:p.puneeth2002@gmail.com' className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src={getImageUrl('https://raw.githubusercontent.com/Puneeth225/GOgetObject/main/assets/hero/mps.png')} alt='MyImage' className={styles.myImg}></img>
        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div>
    </section>
  )
}
