import { graphql, PageProps } from "gatsby";
import * as React from "react";
import Layout from "../components/Layout";

const About = ({ data }: PageProps) => {
  /* @ts-ignore */
  const html = data.markdownRemark.html;
  return (
    <Layout>
      <div className="pt-8 px-4 md:flex-row space-between md:h-auto md:pt-8 lg:px-16 xl:px-28 2xl:px-0 max-w-7xl mx-auto">
        <p className="text-3xl pb-6 font-bold">About me</p>
        <div className="flex flex-col md:flex-row pb-32">
          <div className="md:mr-16">
            <div className="section w-full leading-relaxed">
              <div
                dangerouslySetInnerHTML={{
                  __html: html || "<div />",
                }}
                className="about"
              />
            </div>
          </div>
          <img
            src="/images/pantitas.png"
            className="hidden md:block md:w-96 md:h-96"
            alt="logo"
          />
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
