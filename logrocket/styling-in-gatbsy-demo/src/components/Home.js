import React from "react"
import HomeStyles from "../styles/scss/home.module.scss"
import "../styles/scss/home.scss"
import Container from "./Container"

export default function Home() {
  return (
    <section id="home">
      <Container>
        <div className="home-inner">
          <div className="home-inner__start">
            <h1>DEAR LOREM IPSUM</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa
              dolorum et voluptatibus itaque! Perferendis illo commodi, ad dolor
              dolorum alias, nesciunt inventore suscipit sit consequuntur
              tenetur dolorem minus natus dolores.
            </p>
          </div>
          <div className="home-inner__end">
            <div className={HomeStyles.box}></div>
          </div>
        </div>
      </Container>
    </section>
  )
}
