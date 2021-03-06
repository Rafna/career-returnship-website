// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Announcements = (props: PageProps) => (
  <Layout>
    <SEO title="Announcements" />
    <h1>You reached Announcements</h1>
    <p>Here's the props.path: ({props.path})</p>
    <Link to="/">Homepage</Link>
    <br />
    <Link to="/about/">About Us</Link>
    <br />
    <Link to="/projects/">Projects</Link>
  </Layout>
)

export default Announcements
