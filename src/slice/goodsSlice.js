
import data from './data'
import { createSlice } from '@reduxjs/toolkit'
import shuffleGoods from 'selectors'


const mockData = data

const goodsSlice = createSlice({
          name: "goods",
          initialState: {
                    goodsItems: mockData,
                    shuffleGoods: shuffleGoods(mockData),
                    isLoading: true,
                    goodsBasket: [],

          },
          reducers: {
                    addToBasket(state, action) {

                              console.log(action.payload)
                              state.goodsBasket.push(action.payload)
                    }
          }

})

export const { addToBasket } = goodsSlice.actions
export default goodsSlice.reducer