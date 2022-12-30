import * as React from "react";
import Layout from "../components/Layout";
import Button from "../components/Button";
import "../styles/index.css";
import logo from "../images/logo.png";

const IndexPage = () => {
  return (
    <Layout>
      {/* Section 1: Welcome */}
      <section>
        <div class="flex flex-col lg:flex-row space-between pt-16 px-4 md:px-6 lg:px-16 xl:px-28 2xl:px-0 max-w-7xl mx-auto">
          <img class="h-72" src={logo} alt="logo" />
          <div class="flex">
            <div class="flex flex-col justify-center pl-10">
              <p class="text-xl">Hey Friends, I am</p>
              <p class="text-5xl font-semibold pt-6">Pantita Suksa-nga</p>
              <p class="text-xl py-6 text-neutral-600">
                I am a UX/UI Designer, who is always curious and hungry for an
                adventure of designing things.
              </p>
              <Button title="About Me" />
            </div>
            <div class="flex flex-col justify-center pl-10">
              <p>icon</p>
              <p>icon</p>
              <p>icon</p>
            </div>
          </div>
        </div>
      </section>
      {/* Section 1: NewsCard */}
      <section>
        <div class="py-32 px-4 md:px-6 lg:px-16 xl:px-28 2xl:px-0 max-w-7xl mx-auto">
          <div>
            <h1 class="text-3xl font-bold align-middle">Section Header</h1>
          </div>
          <div>
            <p class="w-auto h-40 bg-neutral-600">Hello</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default IndexPage;
