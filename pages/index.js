import { Layout } from "components";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataTodos } from "redux/action/globalAction";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

const Home = () => {
  const { dataTodos } = useSelector((state) => state.global);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDataTodos(dataTodos));
  }, [dispatch]);

  return (
    <Layout pageTitle="Home Page">
      <p className="w-50">
        welcome to the website to app application, click{" "}
        <Link href="/todo">start</Link> to run the feature, oh yes, you can take
        the sample test code for making this todoapp application on github,
        check below :
        <br />
        <br />
        <FaGithub /> github :{" "}
        <a
          href="https://github.com/salimsea/learn-nextjs-todoapp"
          target="_blank"
        >
          https://github.com/salimsea/learn-nextjs-todoapp
        </a>
      </p>
    </Layout>
  );
};

export default Home;
