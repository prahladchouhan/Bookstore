import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./reducers/userSlice";
import booksSlice from "./reducers/booksSlice";

export default configureStore({
  reducer: {
    user: userSlice,
    books: booksSlice,
  },
});
