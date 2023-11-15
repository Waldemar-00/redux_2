import { StrictMode } from 'react' 
import { createRoot } from 'react-dom/client' 
import { createStore } from 'redux'
import { increment, decrement, random }  from './actions'
import reducer from './reducer'

const store = createStore(reducer)
const { dispatch, getState, subscribe } = store

subscribe(() => {
  document.querySelector('.counter').innerText = getState().counter //will be fulfilled when the state is changed
})
document.querySelector('#dec').addEventListener('click', () => {
  dispatch(decrement())
})
document.querySelector('#inc').addEventListener('click', () => {
  dispatch(increment())
})
document.querySelector('#random').addEventListener('click', () => {
  dispatch(random((Math.random() * 100).toFixed()))
})
createRoot(document.querySelector('#root')).render(
  <StrictMode>

  </StrictMode>
) 

