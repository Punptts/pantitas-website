import * as React from "react";
import Layout from "../components/Layout";
import SectionHeader from "../components/SectionHeader";
import BlogCard from "../components/BlogCard";
import { graphql, PageProps, Link } from "gatsby";

type BlogPage = PageProps;

const BlogPage = ({ data }: PageProps) => {
  const { blogs } = data as any;
  const { edges: allBlogs } = blogs;
  return (
    <Layout>
      <div className="section">
        <div className="pt-8 px-4 md:px-6 md:pt-8 lg:px-16 xl:px-28 2xl:px-0 max-w-7xl mx-auto">
          <SectionHeader title="All Experiments" />
          <div className="flex flex-col md:flex-row flex-wrap pt-10">
            {allBlogs.map(({ node }: any, key: any) => {
              const { frontmatter } = node;
              const { title, description, cover, slug, date } = frontmatter;
              return (
                <Link className="w-full md:w-1/2 lg:w-1/3" to={slug} key={key}>
                  <BlogCard
                    title={title}
                    coverImage={cover}
                    desc={description}
                    createdAt={date}
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BlogPage;

export const query = graphql`
  query BlogPage {
    blogs: allMarkdownRemark(
      filter: { frontmatter: { slug: { regex: "/blog/" } } }
      sort: [{ frontmatter: { date: DESC } }]
    ) {
      edges {
        node {
          frontmatter {
            title
            description
            cover
            slug
            date(formatString: "DD/MM/YYYY")
          }
        }
      }
    }
  }
`;
