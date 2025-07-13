import React from 'react'
import { getImageUrl } from '../../util'
import styles from './Contact.module.css'

export const Contact = () => {
    return (
        <footer id='contact' className={styles.container}>
            <div>

                <div className={styles.text}>
                    <h2>Contact</h2>
                    <p>Feel free to reach out!!</p>

                </div>
                <div className={styles.cpy}>
                    <p>© Copyright | 2024 | Puneeth Sharma</p>
                </div>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={getImageUrl('https://raw.githubusercontent.com/Puneeth225/GOgetObject/main/assets/contact/UserIcon.png')} alt='Resume Icon'></img>
                    <a href="https://docs.google.com/viewer?url=https://raw.githubusercontent.com/Puneeth225/GOgetObject/main/assets/contact/Puneeth_Sharma_1.pdf&embedded=true" target='_blank' rel='noreferrer'>Resume</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl('https://raw.githubusercontent.com/Puneeth225/GOgetObject/main/assets/contact/emailIcon.png')} alt='Email-Icon'></img>
                    <a href='mailto:p.puneeth2002@gmail.com'>Gmail</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl('https://raw.githubusercontent.com/Puneeth225/GOgetObject/main/assets/contact/linkedinIcon.png')} alt='linkedin-Icon'></img>
                    <a href='https://www.linkedin.com/in/puneeth-sharma-b826b018a/'>Linkedin</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl('https://raw.githubusercontent.com/Puneeth225/GOgetObject/main/assets/contact/githubIcon.png')} alt='github-Icon'></img>
                    <a href='https://github.com/Puneeth225'>Github</a>
                </li>
            </ul>


        </footer>
    )
}
