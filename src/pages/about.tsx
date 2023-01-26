import { graphql, PageProps } from "gatsby";
import * as React from "react";
import Layout from "../components/Layout";

const About = ({ data }: PageProps) => {
  /* @ts-ignore */
  const html = data.markdownRemark.html;
  return (
    <Layout>
      <div className="pt-8 px-4 md:flex-row space-between md:h-auto md:pt-16 lg:px-16 xl:px-28 2xl:px-0 max-w-7xl mx-auto">
        <div className="flex flex-row pb-32">
          <div className="section h-40 w-full bg-black mx-4 px-8"></div>
          <div className="section w-full mx-4 px-8">
            <div
              dangerouslySetInnerHTML={{
                __html: html || "<div />",
              }}
              className="about"
            />
          </div>
        </div>
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
