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
    <Layout pageTitle="Blog Page">
      <ComponentBlog />
    </Layout>
  );
};

export async function getServerSideProps() {
  const resBlog = await fetch(`${process.env.BASE_URL}/api/blog`);
  const blog = await resBlog.json();

  return { props: { blog } };
}

export default Blog;
