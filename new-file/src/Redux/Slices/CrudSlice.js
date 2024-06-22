import { createSlice } from "@reduxjs/toolkit";

export const CrudSlice = createSlice({
  name: "posts",
  initialState: {
    data: [],
    status: "idial",
  },
  reducers: {
    dataSuccess: (state, action) => {
      state.data = action.payload;
    },

    createpost: (state, action) => {
      state.data.push(action.payload);
    },

    deletePost: (state, action) => {
      const deletedata = action.payload;
      state.data = state.data.filter((post) => post.id !== deletedata);
    },

    updatePost: (state, action) => {
      const updatedPost = action.payload;
      state.data = state.data.map((post) =>
        post.id === updatedPost.id ? updatedPost : post
      );
    },
  },
});

export const { dataSuccess, createpost, deletePost, updatePost } =
  CrudSlice.actions;
export default CrudSlice.reducer;
