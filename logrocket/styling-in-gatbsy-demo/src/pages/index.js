import React from "react"
import Helmet from "react-helmet"
import Banner from "../components/Banner"
import Features from "../components/Features"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Home from "../components/Home"
import Numbers from "../components/Numbers"

export default function IndexPage() {
  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;1,400;1,500&display=swap"
          rel="stylesheet"
        />
        <title>Styling in Gatsby</title>
      </Helmet>
      <Banner />
      <Header />
      <Home />
      <Numbers />
      <Features />
      <Footer />
    </>
  )
}
