import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Main from "../components/Main";
import Pagination from "../components/Pagination";

const BlogList = (props) => {
  const currentPageProps = props.pageContext.currentPage;
  const [currentPage, setCurrentPage] = React.useState(currentPageProps);

  const totalPost = props.data.allMarkdownRemark.totalCount;
  function filter(data) {
    let arr = {};
    data.allMarkdownRemark.edges.forEach((e, i) => {
      arr[i] = {
        title: e.node.frontmatter.title,
        content: e.node.html,
        date: e.node.frontmatter.date,
        id: e.node.id,
      };
    });
    return arr;
  }
  return (
    <Layout>
      <Main data={Object.values(filter(props.data))} totalPost={totalPost} />
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={totalPost}
        pageSize={5}
        onPageChange={(page) => setCurrentPage(page)}
        currentPageProps={currentPageProps}
      />
    </Layout>
  );
};

export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      limit: $limit
      skip: $skip
      sort: { frontmatter: { date: DESC } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
          html
          id
        }
      }
      totalCount
    }
  }
`;
export default BlogList;
