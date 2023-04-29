import * as React from "react";
import Layout from "../components/Layout";
import SectionHeader from "../components/SectionHeader";
import BlogCard from "../components/BlogCard";
import { graphql, PageProps, Link } from "gatsby";

const BlogPage = () => {
  return (
    <Layout>
      <div className="section">
        <div className="pt-8 px-4 md:px-6 md:pt-8 lg:px-16 xl:px-28 2xl:px-0 max-w-7xl mx-auto">
          <SectionHeader title="All Experiments" />
        </div>
      </div>
    </Layout>
  );
};

export default BlogPage;
