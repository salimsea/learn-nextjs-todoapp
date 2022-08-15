import Footer from "components/Footer";
import Header from "components/Header";
import Head from "next/head";
import React from "react";

const Layout = (props) => {
  return (
    <>
      <Head>
        <title>{`TodoApp - ${props?.pageTitle}`}</title>
      </Head>
      <div>
        <Header />
        <div>{props.children}</div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
