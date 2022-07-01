import { configureStore } from "@reduxjs/toolkit";
import goodsSliceReducer from "../slice/goodsSlice"


export default configureStore({
          reducer: {
                    goods: goodsSliceReducer,
          }
})