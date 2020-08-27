import { Link } from "gatsby"
import React from "react"
import "../styles/less/footer.less"
import FooterStyle from "../styles/less/footer.module.less"
import Container from "./Container"

export default function Footer() {
  return (
    <footer id="nav">
      <Container>
        <nav className="navInner">
          <div className="nav-inner__start">
            <p>&copy; adebiyi adedotun, 2020</p>
          </div>
          <div className="nav-inner__center">
            <a href="https://twitter.com/adebiyial" className="link">
              Twitter
            </a>
            <a
              href="https://www.linkedin.com/in/adebiyiadedotun"
              className="link"
            >
              LinkedIn
            </a>
            <a href="https://instagram.com/adebiyial" className="link">
              Instagram
            </a>
          </div>
          <div className="nav-inner__end">
            <Link to="/" className={FooterStyle.cta}>
              GET STARTED
            </Link>
          </div>
        </nav>
      </Container>
    </footer>
  )
}
