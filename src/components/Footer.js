import React from "react"
import styles from "../css/footer.module.css"
import links from "../constants/links"
import socialicons from "../constants/social-icons"
import { Link } from "gatsby"
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        {links.map((item, index) => {
          return (
            <Link key={index} to={item.path}>
              {item.text}
            </Link>
          )
        })}
      </div>
      <div className={styles.icons}>
        {socialicons.map((item, index) => {
          return (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          )
        })}
      </div>
      <div className={styles.copyright}>
        {" "}
        copyright &copy; backroads travel company {new Date().getFullYear()}{" "}
      </div>
    </footer>
  )
}

export default Footer
