import { graphql, PageProps } from "gatsby";
import * as React from "react";
import Layout from "../components/Layout";

const About = ({ data }: PageProps) => {
  /* @ts-ignore */
  const html = data.markdownRemark.html;
  return (
    <Layout>
      <div className="section">
        <h1>This is a content area of about page</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: html || "<div />",
          }}
          className="mt-8 about"
        />
      </div>
    </Layout>
  );
};

export default About;
export const query = graphql`
  query AboutPage {
    markdownRemark(frontmatter: { slug: { eq: "/md-about" } }) {
      html
      frontmatter {
        title
        cover
        date(formatString: "MMM DD, YYYY")
      }
    }
  }
`;
