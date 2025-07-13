import React from 'react'
import { getImageUrl } from '../../util'
import styles from './MoreMe.module.css'

export const MoreMe = () => {
  return ( 
    <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img src={getImageUrl('https://raw.githubusercontent.com/Puneeth225/GOgetObject/main/assets/about/l3.png')} alt='SitLaptop' className={styles.aboutImage}></img>
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl('https://raw.githubusercontent.com/Puneeth225/GOgetObject/main/assets/about/cursorIcon.png')} alt='CursorIcon'></img>
                    <div className={styles.aboutItemText}>
                        <h3>Software Developer</h3>
                        <p>A passionate software developer with a profound experience in software development life cycles. Designing and debugging along with new learnings is the motto.</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl('https://raw.githubusercontent.com/Puneeth225/GOgetObject/main/assets/about/serverIcon.png')} alt='ServerIcon'></img>
                    <div className={styles.aboutItemText}>
                        <h3>Web Developer</h3>
                        <p>The user interactive web designs and hands on in MERN stack and other development skills.</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl('https://raw.githubusercontent.com/Puneeth225/GOgetObject/main/assets/about/uiIcon.png')} alt='UIIcon'></img>
                    <div className={styles.aboutItemText}>
                        <h3>Android Developer</h3>
                        <p>Mobile application developer, with android studio, Java, and XML. Building Tomorrow’s Android Solutions Today.</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  )
}
