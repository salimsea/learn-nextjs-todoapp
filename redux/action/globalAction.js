const { default: axios } = require("axios");
const { setDataUsers } = require("redux/slice/globalSlice");

export const getDataUsers = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:3000/api/hello")
      .then((res) => {
        dispatch(
          setDataUsers({
            items: res.data,
          })
        );
      })
      .catch((err) => {
        dispatch(
          setDataUsers({
            msg: err.message,
          })
        );
      });
  };
};
