import React from "react"

import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/Layout"

import styles from "./index.module.css"

export default function Home() {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <Layout>
      <div id={styles.hero}>
        <h1>{data.site.siteMetadata.title}</h1>
      </div>
    </Layout>
  )
}
