import * as React from "react";
import Layout from "../components/Layout";

const IndexPage = () => {
  return (
    <Layout>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div className="container">
        <h1>This is a content area</h1>
      </div>
    </Layout>
  );
};

export default IndexPage;
