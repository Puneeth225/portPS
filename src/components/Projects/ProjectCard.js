import React from 'react'
import { getImageUrl } from '../../util'
import styles from './ProjectCard.module.css'

export const ProjectCard = ({project: {title, imageSrc, description, skills, demo, source}}) => {
    return (
        <div className={styles.container}>
            <img src={getImageUrl(`https://raw.githubusercontent.com/Puneeth225/GOgetObject/main/assets/${imageSrc}`)} alt={title} className={styles.image}></img>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
            <ul className={styles.skills}>
                {
                    skills.map((skill, id) => {
                        return <li key={id} className={styles.skill}>{skill}</li>
                    })
                }
            </ul>
            <div className={styles.links}>
                <a href={demo} className={styles.link}>Demo</a>
                <a href={source} className={styles.link}>Source</a>
            </div>
        </div>
    )
}
