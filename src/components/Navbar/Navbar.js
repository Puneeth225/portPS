import React, {useState} from 'react'
import styles from "./Navbar.module.css";
import { getImageUrl } from '../../util';

export const Navbar = () => {
    const [menuOpen,setMenuOpen] = useState(false);
  return (
    <nav className={styles.navbar}>
        <a href='/' className={styles.title}>Portfolio</a>
        <div className={styles.menu}>
              <img className={styles.menuBtn} src={
                  menuOpen ? getImageUrl('https://raw.githubusercontent.com/Puneeth225/GOgetObject/main/assets/nav/closeIcon.png') : getImageUrl('https://raw.githubusercontent.com/Puneeth225/GOgetObject/main/assets/nav/menuIcon.png')
              } alt="menu-button"
                  onClick={() => setMenuOpen(!menuOpen)} />
            <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`} onClick={()=>setMenuOpen(false)}>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href='#experience'>Experience</a>
                </li>
                <li>
                    <a href='#projects'>Projects</a>
                </li>
                <li>
                    <a href='#contact'>Contact</a>
                </li>
            </ul>
        </div>
    </nav>
  )
}
