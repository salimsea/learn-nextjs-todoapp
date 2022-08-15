import { Layout } from "components";
import { useRouter } from "next/router";
import React from "react";

const Detail = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <Layout pageTitle="Detail Pengguna">
      <h1 className="title">Detail Pengguna</h1>
      <span>Id Pengguna : {id}</span>
    </Layout>
  );
};

export default Detail;
