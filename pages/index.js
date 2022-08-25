import { Layout } from "components";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataTodos } from "redux/action/globalAction";

const Home = () => {
  const { dataTodos } = useSelector((state) => state.global);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDataTodos(dataTodos));
  }, [dispatch]);

  return (
    <Layout pageTitle="Home Page">
      <h1>hai</h1>
    </Layout>
  );
};

export default Home;
