import { StrictMode } from 'react' 
import { createRoot } from 'react-dom/client' 
import { createStore } from 'redux'
const initialState = 10
const reducer = (state = 0, action) => {
  switch(action.type) {
    case 'INC': return state = state + 1 // need 'return'
    default: return state
  }
}
const store = createStore(reducer)
store.subscribe(() => {
  console.log(store.getState()) //will be fulfilled when the state is changed
})
store.dispatch({ type: 'INC' })
store.dispatch({ type: 'INC' })
store.dispatch({ type: 'INC' })
// let state = reducer(undefined, { type: 'INC', })
// state = reducer(state, { type: 'INC', })
// state = reducer(state, { type: 'INC', })
// state = reducer(state, { type: 'INC', })
// state = reducer(state, { type: 'INC', })
// console.log(state)
createRoot(document.querySelector('#root')).render(
  <StrictMode>

  </StrictMode>
) 

