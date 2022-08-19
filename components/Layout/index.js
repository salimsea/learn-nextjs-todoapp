import { Header, Footer, Ballon } from "components";
import Head from "next/head";
import React from "react";

const Layout = (props) => {
  return (
    <>
      <Head>
        <title>{`${props?.pageTitle} - Salimseal`}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={`${props?.pageDescription}`} />
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
