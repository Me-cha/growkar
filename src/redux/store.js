import { configureStore } from "@reduxjs/toolkit";
import userControlsReducers from "./reducer/userControlsReducers";

export default configureStore({
  reducer: {
    userControls: userControlsReducers,
  },
});
