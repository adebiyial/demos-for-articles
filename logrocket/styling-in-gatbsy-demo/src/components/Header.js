import { Link } from "gatsby"
import React from "react"
import NavStyle from "../styles/stylus/header.module.styl"
import "../styles/stylus/header.styl"
import Container from "./Container"

export default function Header() {
  return (
    <section id="nav">
      <Container>
        <nav className={NavStyle.navInner}>
          <div className="nav-inner__start">
            <h1 className="emoji">🙁</h1>
          </div>
          <div className="nav-inner__center">
            <Link to="/" className="link">
              Products
            </Link>
            <Link to="/" className="link">
              Customers
            </Link>
            <Link to="/" className="link">
              Pricing
            </Link>
          </div>
          <div className="nav-inner__end">
            <Link to="/" className={NavStyle.cta}>
              GET STARTED
            </Link>
          </div>
        </nav>
      </Container>
    </section>
  )
}
