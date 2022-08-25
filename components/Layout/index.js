import { Header } from "components";
import Head from "next/head";
import React from "react";

const Layout = (props) => {
  return (
    <>
      <Head>
        <title>{`${props?.pageTitle} - TodoApp`}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={`${props?.pageDescription}`} />
      </Head>
      <div>
        <Header {...props} />
        <div className="container mt-4">
          <h4 className="mb-2">{props?.pageTitle}</h4>
          {props.children}
        </div>
      </div>
    </>
  );
};

export default Layout;
