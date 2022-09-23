import React from 'react'
import styles from "./Navbar.module.scss"

const Navbar = () => {
  const navbarLogo = "./images/navbar_logo.png"
  const linkdinIcon = "./images/linkedin.png"
  const instagramIcon = "./images/instagram.png"
  const facebookIcon = "./images/facebook.png"

  return (
    <div className={styles.navbar_container}>
      <div className={styles.navbar}>
      <div className={styles.logo_section}>
      <img src={navbarLogo} alt="navbarlogo" />
      </div>
      <div className={styles.nav_items}>
        <p>Podcasts</p>
        <p>Host</p>
        <p>About</p>
        <p>Blog</p>
        <p>Contacts</p>
         
         <img src={facebookIcon} alt="linkdinIcon" />
         <img src={linkdinIcon} alt="linkdinIcon" />
         <img src={instagramIcon} alt="linkdinIcon" />

      </div>
    </div>
    </div>
  )
}

export default Navbar
