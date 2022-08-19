const { default: axios } = require("axios");
const { setDataBlogs, setDataBlog } = require("redux/slice/blogSlice");

export const getDataBlogs = () => {
  return (dispatch) => {
    axios
      .get(`${process.env.BASE_URL}/api/blog`)
      .then((res) => {
        dispatch(
          setDataBlogs({
            items: {
              contents: res.data.retContents,
              category: res.data.retCategory,
            },
          })
        );
      })
      .catch((err) => {
        dispatch(
          setDataBlogs({
            msg: err.message,
          })
        );
      });
  };
};
export const getDataBlog = (slug) => {
  return (dispatch) => {
    axios
      .get(`${process.env.BASE_URL}/api/blog/${slug}`)
      .then((res) => {
        console.log(res.data);
        dispatch(
          setDataBlog({
            items: res.data,
          })
        );
      })
      .catch((err) => {
        dispatch(
          setDataBlog({
            msg: err.message,
          })
        );
      });
  };
};
