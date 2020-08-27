import React from "react"
import NumberStyles from "../styles/sass/numbers.module.sass"
import "../styles/sass/numbers.sass"
import Container from "./Container"

export default function Numbers() {
  return (
    <section id="numbers">
      <Container>
        <div className="numbers-inner">
          <header>
            <div>
              <h1 className="title">Impressive numbers</h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Repellat id necessitatibus quia incidunt, esse debitis dolore
                explicabo ipsa eligendi soluta!
              </p>
            </div>
          </header>
          <ul className={NumberStyles.numbersGrid}>
            <li>
              <h4 className={NumberStyles.percent}>90%</h4>
              <p className={NumberStyles.percentInfo}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </p>
            </li>
            <li>
              <h4 className={NumberStyles.percent}>90%</h4>
              <p className={NumberStyles.percentInfo}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </p>
            </li>
            <li>
              <h4 className={NumberStyles.percent}>90%</h4>
              <p className={NumberStyles.percentInfo}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </p>
            </li>
            <li>
              <h4 className={NumberStyles.percent}>90%</h4>
              <p className={NumberStyles.percentInfo}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </p>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  )
}
