import { Header, Footer, Ballon } from "components";
import Head from "next/head";
import React from "react";

const Layout = (props) => {
  return (
    <>
      <Head>
        <title>{`${props?.pageTitle} - Salimseal`}</title>
      </Head>
      <div>
        <Ballon />
        <Header {...props} />
        <div>{props.children}</div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
