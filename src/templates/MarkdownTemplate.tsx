import React from "react";
import { graphql, PageProps } from "gatsby";
import Layout from "../components/Layout";

type MarkdownTemplateProps = PageProps;

const MarkdownTemplate = ({ data }: MarkdownTemplateProps) => {
  /* @ts-ignore */
  const { html, frontmatter } = data.markdownRemark || {};
  const { title, cover, date, timeline } = frontmatter || {};

  return (
    <Layout>
      <section className="relative px-4 md:px-6 lg:px-16 py-10 lg:py-20 max-w-4xl mx-auto">
        <h1 className="font-bold text-2xl lg:text-3xl text-neutral-900">
          {title}
        </h1>
        {timeline && (
          <h2 className="font-bold text-2xl">TIMELINE: {timeline}</h2>
        )}
        <h2 className="text-sm text-neutral-600 mt-2">{date}</h2>
        <img src={cover} alt="cover-img" className="w-96 h-96" />
        <div
          dangerouslySetInnerHTML={{ __html: html || "<div />" }}
          className="mt-10 markdown"
        />
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
        date(formatString: "YYYY MMMM DD")
        timeline
      }
    }
  }
`;
