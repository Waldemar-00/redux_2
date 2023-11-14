import { StrictMode } from 'react' 
import { createRoot } from 'react-dom/client' 
import { createStore } from 'redux'
// const initialState = 10
const reducer = (state = 0, action) => {
  switch(action.type) {
    case 'INC': return state + 1 // need 'return'
    case 'DEC': return state - 1
    case 'RANDOM' : return state = action.payload
    default: return state
  }
}
const store = createStore(reducer)
const increment = () => ({ type: 'INC' })
const decrement = () => ({ type: 'DEC' })
const random = (value) => ({type: 'RANDOM', payload: +value})
store.subscribe(() => {
  document.querySelector('.counter').innerText = store.getState() //will be fulfilled when the state is changed
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

