import * as React from "react";
import Layout from "../components/Layout";
import Button from "../components/Button";
import BlogCard from "../components/BlogCard";
import SectionHeader from "../components/SectionHeader";
import ProjectCard from "../components/ProjectCard";
import "../styles/index.css";
import InstagramSVG from "../icons/instagram.inline.svg";
import MediumSVG from "../icons/medium.inline.svg";
import LinkedInSVG from "../icons/linkedin.inline.svg";
import { graphql, PageProps, Link } from "gatsby";

type IndexPage = PageProps;

const IndexPage = ({ data }: PageProps) => {
  /* @ts-ignore */
  const { blogs, projects } = data;
  const { edges: allBlogs } = blogs;
  const { edges: allProjects } = projects;

  return (
    <Layout>
      {/* Section 1: Welcome */}
      <section>
        <div className="flex flex-col items-center pt-8 px-4 md:flex-row space-between md:h-auto md:pt-16 lg:px-16 xl:px-28 2xl:px-0 max-w-7xl mx-auto">
          <img
            src="/images/pantitas.png"
            className="profile w-48 h-48 md:w-64 md:h-64"
            alt="logo"
          />
          <div className="flex flex-col md:flex-row">
            <div className="flex flex-col pt-10 pl-0 items-center md:pt-0 justify-center md:pl-12 md:items-start">
              <p className="text-xl">Hey Friends, I am</p>
              <p className="text-4xl text-center font-semibold pt-5 lg:text-5xl lg:text-left">
                Pantita Suksa-nga
              </p>
              <p className="text-lg text-center py-5 text-neutral-600 lg:text-xl md:text-left">
                I am a Ux/Ui Designer, who is always curious and hungry for an
                adventure of designing things.
              </p>
              <Button title="About Me" />
            </div>
            <div className="flex flex-row pt-12 md:flex-col justify-center md:pt-0 md:pl-12">
              <InstagramSVG className="h-10 w-10 mx-6" />
              <MediumSVG className="h-10 w-10 mx-6 md:mt-8" />
              <LinkedInSVG className="h-10 w-10 mx-6 md:mt-8" />
            </div>
          </div>
        </div>
      </section>
      {/* Section 1: BlogCards */}
      <section>
        <div className="pt-24 px-4 md:px-6 md:pt-32 lg:px-16 xl:px-28 2xl:px-0 max-w-7xl mx-auto">
          <SectionHeader title="Latest Experiment" />
          <div className="flex flex-col md:flex-row flex-wrap justify-between pt-10">
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
          {/* <div className="text-center pt-4">
            <Button title="See More" />
          </div> */}
        </div>
      </section>
      {/* Section 1: ProjectCards */}
      <section>
        <div className="py-32 px-4 md:px-6 lg:px-16 xl:px-28 2xl:px-0 max-w-7xl mx-auto">
          <SectionHeader title="All Projects" />
          <div className="flex flex-col justify-between pt-10">
            {allProjects.map(({ node }: any, key: any) => {
              const { frontmatter } = node;
              const { title, description, cover, timeline, slug } = frontmatter;
              return (
                <Link className="w-full" to={slug} key={key}>
                  <ProjectCard
                    title={title}
                    image={cover}
                    desc={description}
                    timeline={timeline}
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query IndexPage {
    blogs: allMarkdownRemark(
      filter: { frontmatter: { slug: { regex: "/blog/" } } }
    ) {
      edges {
        node {
          frontmatter {
            title
            description
            cover
            slug
            date(formatString: "YYYY MMMM DD")
          }
        }
      }
    }

    projects: allMarkdownRemark(
      filter: { frontmatter: { slug: { regex: "/project/" } } }
    ) {
      edges {
        node {
          frontmatter {
            title
            description
            cover
            timeline
            slug
          }
        }
      }
    }
  }
`;
