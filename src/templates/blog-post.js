import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";

import "./blog-post.scss";

export default function Post({ data }) {
  const { html } = data.markdownRemark;
  const { title, date } = data.markdownRemark.frontmatter;
  return (
    <Layout>
      <div className="title">{title}</div>
      <div className="data">{date}</div>
      <div
        className="content_post"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </Layout>
  );
}
export const query = graphql`
  query PostQuery($id: String) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;
