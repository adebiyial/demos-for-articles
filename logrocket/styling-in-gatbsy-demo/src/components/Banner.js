import React from "react"
import bannerStyles from "../styles/modules/banner.module.css"

export default function Banner() {
  return (
    <section className={bannerStyles.banner}>
      <h1 className={bannerStyles.bannerTitle}>
        This site uses cookies. We don't need your consent.
      </h1>
    </section>
  )
}
