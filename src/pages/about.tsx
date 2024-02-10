import { graphql, PageProps, withPrefix } from "gatsby";
import * as React from "react";
import Layout from "../components/Layout";

const About = ({ data }: PageProps) => {
  /* @ts-ignore */
  const html = data.markdownRemark.html;
  return (
    <Layout>
      <div className="pt-8 px-4 md:flex-row space-between md:h-auto md:pt-8 lg:px-16 xl:px-28 2xl:px-0 max-w-7xl mx-auto">
        <p className="text-3xl pb-6 font-bold">About me</p>
        <div className="flex flex-col-reverse md:flex-row pb-32">
          <div className="w-full md:mr-16 md:w-3/5">
            <div className="section w-full leading-relaxed">
              <div
                dangerouslySetInnerHTML={{
                  __html: html || "<div />",
                }}
                className="about"
              />
            </div>
          </div>
          <div className="w-full flex pb-10 md:pb-0 items-center space-y-10 flex-col md:w-2/5">
            <img
              src="/images/new-pantitas.png"
              // className="hidden md:block md:w-96 md:h-96"
              className="w-full"
              alt="logo"
            />
            <a
              target="__blank"
              href={withPrefix("images/dotted-bg.png")}
              className="w-fit px-4 py-1.5 rounded-md bg-neutral-900 text-neutral-200"
            >
              <span>Click to Download Resume</span>
            </a>
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
