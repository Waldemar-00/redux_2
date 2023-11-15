import { StrictMode } from 'react' 
import { createRoot } from 'react-dom/client' 
import { createStore, bindActionCreators } from 'redux'
import { increment, decrement, random }  from './actions'
import reducer from './reducer'

const store = createStore(reducer)
const { dispatch, getState, subscribe } = store
// function bindActionCreator(dispatch, actionCreator, ...args) { //analog of the function bindActionCreators from Redux
  // return dispatch(actionCreator(...args))
// }
// const incDispatch = bindActionCreators(increment, dispatch)
// const decDispatch = bindActionCreators(decrement, dispatch)
// const rndDispatch = bindActionCreators(() => random((Math.random() * 100).toFixed()), dispatch)
const actionsDispatch = bindActionCreators({
  increment,
  decrement,
  random, 
}, dispatch)
subscribe(() => {
  document.querySelector('.counter').innerText = getState().counter
})
document.querySelector('#inc').addEventListener('click', actionsDispatch.increment)
document.querySelector('#dec').addEventListener('click', actionsDispatch.decrement )
document.querySelector('#random').addEventListener('click', () => {
  actionsDispatch.random((Math.random() * 100).toFixed())
})
createRoot(document.querySelector('#root')).render(
  <StrictMode>

  </StrictMode>
) 

