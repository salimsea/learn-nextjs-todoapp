import { configureStore } from "@reduxjs/toolkit";
import globalSlice from "./slice/globalSlice";
import blogSlice from "./slice/blogSlice";

export default configureStore({
  reducer: {
    global: globalSlice,
    blog: blogSlice,
  },
});
