import { Layout } from "components";
import ComponentBlogDetail from "components/Pages/BlogDetail";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setDataBlog } from "redux/slice/blogSlice";

const Detail = (data) => {
  const router = useRouter();
  const { slug } = router.query;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      setDataBlog({
        items: {
          item: data.blog.item,
          recentPost: data.blog.recentPost,
        },
      })
    );
  }, [slug]);

  return (
    <Layout
      pageTitle={`Detail Blog : ${data.blog.item?.title || "loading"} `}
      pageDescription={`${data.blog.item?.postContentText}`}
    >
      <ComponentBlogDetail slug={slug} />
    </Layout>
  );
};
// export async function getStaticPaths() {
//   const resBlogs = await fetch(`${process.env.BASE_URL}/api/blog`);
//   const blogs = await resBlogs.json();
//   const paths = blogs.retContents.map((item) => ({
//     params: { slug: item.slug },
//   }));
//   return { paths, fallback: false };
// }

export async function getServerSideProps(context) {
  const resBlog = await fetch(
    `${process.env.BASE_URL}/api/blog/${context.params.slug}`
  );
  const blog = await resBlog.json();

  return { props: { blog } };
}

export default Detail;
