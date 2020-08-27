import { Link } from "gatsby"
import React from "react"
import {
  FeatureHeader,
  FeatureInner,
  FeatureSection,
} from "../styles/emotion/FeatureStyles"
import StyledCopy from "../styles/styled-component/StyledCopy"
import StyledRow from "../styles/styled-component/StyledRow"
import Container from "./Container"
import "../styles/bulma/copytitle.scss"

export default function Features() {
  return (
    <FeatureSection>
      <Container>
        <FeatureInner>
          <FeatureHeader>
            <div>
              <h1 className="title">Features</h1>
              <p className="subtitle">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                illum dolore nostrum recusandae ipsam corporis mollitia delectus
                quibusdam quod! Quasi.
              </p>
            </div>
          </FeatureHeader>
          <StyledRow>
            <div className="img">
              <div className="img-wrap"></div>
            </div>
            <StyledCopy className="copy" {...{ section: "global" }}>
              <span className="tag">GLOBAL LIKE YOUR BUSINESS</span>
              <h1 className="copy-title">
                Reach your customers wherever they choose to call home
              </h1>
              <p className="subtitle">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Consectetur, corporis alias. Voluptatem facilis doloribus
                quisquam!
              </p>
              <Link to="/" className="cta">
                Learn more
              </Link>
            </StyledCopy>
          </StyledRow>
          <StyledRow>
            <StyledCopy className="copy" {...{ section: "customer-service" }}>
              <span className="tag">GREAT CUSTOMER SERVICE</span>
              <h1 className="copy-title">
                For what it is worth we will always be at your beck-and-call
              </h1>
              <p className="subtitle">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Consectetur, corporis alias. Voluptatem facilis doloribus
                quisquam!
              </p>
              <div className="items">
                <div className="item">
                  <div className="check-mark">L</div>
                  <p className="about-item">Lorem ipsum dolor sit.</p>
                </div>
                <div className="item">
                  <div className="check-mark">L</div>
                  <p className="about-item">Lorem ipsum dolor sit.</p>
                </div>
                <div className="item">
                  <div className="check-mark">L</div>
                  <p className="about-item">Lorem ipsum dolor sit.</p>
                </div>
                <div className="item">
                  <div className="check-mark">L</div>
                  <p className="about-item">Lorem ipsum dolor sit.</p>
                </div>
              </div>
              <Link to="/" className="cta">
                Learn more
              </Link>
            </StyledCopy>
            <div className="img">
              <div className="img-wrap"></div>
            </div>
          </StyledRow>
          <StyledRow>
            <div className="img">
              <div className="img-wrap"></div>
            </div>
            <StyledCopy className="copy" {...{ section: "proud-history" }}>
              <span className="tag">PROUD HISTORY</span>
              <h1 className="copy-title">
                We are a century and a decade old, that just means we know our
                stuff
              </h1>
              <p className="subtitle">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Consectetur, corporis alias. Voluptatem facilis doloribus
                quisquam!
              </p>
              <Link to="/" className="cta">
                Learn more
              </Link>
            </StyledCopy>
          </StyledRow>
        </FeatureInner>
      </Container>
    </FeatureSection>
  )
}
