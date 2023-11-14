import { StrictMode } from 'react' 
import { createRoot } from 'react-dom/client' 
import { createStore } from 'redux'
const initialState = { counter: 0 }
const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'INC': return {
      ...state,
      counter: +state.counter + 1
    } // need 'return'
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
const store = createStore(reducer)
const increment = () => ({ type: 'INC' }) // will get an error in the console it is plus of the creators
const decrement = () => ({ type: 'DEC' })
const random = (value) => ({type: 'RANDOM', payload: +value})
store.subscribe(() => {
  document.querySelector('.counter').innerText = store.getState().counter //will be fulfilled when the state is changed
})
document.querySelector('#dec').addEventListener('click', () => {
  store.dispatch(decrement())
})
document.querySelector('#inc').addEventListener('click', () => {
  store.dispatch(increment())
})
document.querySelector('#random').addEventListener('click', () => {
  store.dispatch(random((Math.random() * 100).toFixed()))
})
createRoot(document.querySelector('#root')).render(
  <StrictMode>

  </StrictMode>
) 

