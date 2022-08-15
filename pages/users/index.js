import { Layout } from "components";
import Link from "next/link";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataUsers } from "redux/action/globalAction";

const Users = () => {
  const { dataUsers } = useSelector((state) => state.global);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDataUsers());
  }, [dispatch]);

  return (
    <Layout pageTitle="Pengguna">
      <h1 className="title">Users</h1>
      {dataUsers.error && <span>{dataUsers.msg}</span>}
      <ul>
        {!dataUsers.error &&
          dataUsers.items.map((v, i) => {
            return <li key={i}>{v.name}</li>;
          })}
      </ul>
      <Link href={"users/1"}>Go Detail</Link>
    </Layout>
  );
};

export default Users;
