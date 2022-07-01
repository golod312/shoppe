
const shuffleGoods = (state) => {
          return state.sort(() => Math.random() - 0.5)
}

export default shuffleGoods