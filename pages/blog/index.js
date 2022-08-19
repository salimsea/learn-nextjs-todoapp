import axios from "axios";
import { Layout } from "components";
import ComponentBlog from "components/Pages/Blog";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setDataBlogs } from "redux/slice/blogSlice";

const Blog = (data) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      setDataBlogs({
        items: {
          contents: data.blog.retContents,
          category: data.blog.retCategory,
        },
      })
    );
  }, []);
  return (
    <Layout
      pageTitle="Blog Page"
      pageDescription="This page is for sharing knowledge, news about technology and coding"
    >
      <ComponentBlog />
    </Layout>
  );
};

export async function getServerSideProps() {
  const resBlog = await axios.post(`${process.env.BASE_URL}/api/blog`, {
    start: "1",
    max: "1000",
  });

  const blog = await resBlog.data.data;

  return { props: { blog } };
}

export default Blog;
