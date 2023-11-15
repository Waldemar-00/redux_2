import { StrictMode } from 'react' 
import { createRoot } from 'react-dom/client' 
import { createStore } from 'redux'
import { increment, decrement, random }  from './actions'
import reducer from './reducer'

const store = createStore(reducer)
const { dispatch, getState, subscribe } = store
const icrementWithDispatch = () => dispatch(increment())
const decrementWithDispatch = () => dispatch(decrement())
const randomWithDispatch = () => dispatch(random((Math.random() * 100).toFixed()))
subscribe(() => {
  document.querySelector('.counter').innerText = getState().counter
})
document.querySelector('#inc').addEventListener('click',  icrementWithDispatch)
document.querySelector('#dec').addEventListener('click',  decrementWithDispatch)
document.querySelector('#random').addEventListener('click', randomWithDispatch)
createRoot(document.querySelector('#root')).render(
  <StrictMode>

  </StrictMode>
) 

