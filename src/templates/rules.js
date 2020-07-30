import React from "react"
import { graphql } from "gatsby"
import Header from '../components/Header';
import Footer from '../components/Footer';

import '../rules.css'


export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { html } = markdownRemark
  console.log(html)
  
  
  return (
    <div className="max-w-8xl m-auto">
    <Header />

      <div className="site">
          <div className="site-content">
            <br />
            <div className="rules" dangerouslySetInnerHTML={{ __html: html}}  />
          </div>
      <Footer />
      </div>
      </div>
  );
}

export const pageQuery = graphql`
{
  markdownRemark {
    html
  }
}
`