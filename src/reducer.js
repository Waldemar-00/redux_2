const reducer = (state = { counter: 0 }, action) => {
  switch (action.type) {
    case 'INC': return {
      ...state,
      counter: +state.counter + 1
    }
    case 'DEC': return {
      ...state,
      counter: state.counter - 1
    }
    case 'RANDOM': return {
      ...state,
      counter: action.payload
    }
    default: return state
  }
}
export default reducer