
import data from './data'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import shuffleGoods from 'selectors'







export const getGoodsItems = createAsyncThunk(
    'goods/fetchGoods',
    async (url = 'http://localhost:3000/data?_page=1&_limit=6') => {
        return fetch(url)
            .then((resp) => resp.json())
            .catch((err) => console.log(err))

    }
)


const goodsSlice = createSlice({
    name: "goods",
    initialState: {
        goodsItems: [],
        shuffleGoods: [],
        isLoading: true,
        goodsBasket: [],

    },
    reducers: {
        addToBasket(state, action) {

            console.log(action.payload)
            state.goodsBasket.push(action.payload)
        }
    },
    extraReducers: {
        [getGoodsItems.pending]: (state) => {
            state.isLoading = true
        },
        [getGoodsItems.fulfilled]: (state, action) => {
            console.log(action.payload);
            state.goodsItems = action.payload
            state.shuffleGoods = shuffleGoods(action.payload)
            state.isLoading = false
        },
        [getGoodsItems.rejected]: (state) => {
            state.isLoading = false
        }
    }

})

export const { addToBasket } = goodsSlice.actions
export default goodsSlice.reducer