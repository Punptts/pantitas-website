import React from "react";
import { graphql, PageProps } from "gatsby";
import Layout from "../components/Layout";

type MarkdownTemplateProps = PageProps;

const MarkdownTemplate = ({ data }: MarkdownTemplateProps) => {
  /* @ts-ignore */
  const { html, frontmatter } = data.markdownRemark || {};
  const { title, cover, date, description } = frontmatter || {};

  return (
    <Layout>
      <section className="relative px-4 pt-2 md:px-8 lg:px-32 max-w-5xl mx-auto">
        <h1 className="font-bold text-3xl lg:text-4xl text-neutral-900">
          {title}
        </h1>
        <div className="flex items-center space-x-2 mt-4">
          <div className="border-l-2 border-l-neutral-900 rounded-md h-10" />
          <h2 className="text-lg text-neutral-900">{description}</h2>
        </div>
        <h2 className="text-md text-neutral-600 mt-4">{date}</h2>
        <div className="my-10">
          <img
            src={cover}
            alt="cover-img"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: html || "<div />" }}
          className="mt-8 markdown"
        />
        <hr className="border-0 h-px bg-neutral-900 mt-10 w-full mb-20" />
      </section>
    </Layout>
  );
};

export default MarkdownTemplate;

export const pageQuery = graphql`
  query MarkdownTemplate($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        cover
        date(formatString: "DD/MM/YYYY")
        description
      }
    }
  }
`;
