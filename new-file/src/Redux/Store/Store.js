import { configureStore } from "@reduxjs/toolkit";
import CrudSlicereducer from "../Slices/CrudSlice";

export default configureStore({
  reducer:{
    posts:CrudSlicereducer,
  }
})