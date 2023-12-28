import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const apiSlice = createSlice({
  name: "api",
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    start: (state, action) => {
      if (process.env.NODE_ENV === "development") {
        console.log("START", action.payload);
      }
      state.loading = true;
      state.data = null;
      state.error = null;
    },
    ok: (state, action) => {
      if (process.env.NODE_ENV === "development") {
        console.log("OK", action.payload);
      }
      state.loading = false;
      state.data = action.payload;
      state.error = null;
    },
    bad: (state, action) => {
      if (process.env.NODE_ENV === "development") {
        console.log("BAD", action.payload);
      }
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const { start, ok, bad } = apiSlice.actions;

export function request({
  method,
  url,
  options,
  callback,
  isLoader = false,
  isOk = false,
}) {
  return async function (dispatch) {
    try {
      if (isLoader) {
        document.querySelector("dialog").showModal();
      }
      dispatch(start());
      const res = await axios({
        method,
        url,
        ...options,
        data: options.data,
      });
      document.querySelector("dialog").close();
      dispatch(ok(res.data));
      if (callback) {
        callback(res.data);
      }
      if (isOk) {
        document.querySelector("dialog").showModal();
      }
    } catch (error) {
      if (error.response === undefined) {
        console.log(error);
        dispatch(bad("error"));
      } else {
        dispatch(bad(error.response.data.message));
      }
      document.querySelector("dialog").showModal();
    }
  };
}

export default apiSlice.reducer;
