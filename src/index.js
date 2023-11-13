import { StrictMode } from 'react' 
import { createRoot } from 'react-dom/client' 

const initialState = 0
const reducer = (state, action) => {
  if (action.type === 'INC') {
    return state = state + 1
  }
  return 0
}
let state = reducer(initialState, { type: 'INC', })
state = reducer(state, { type: 'INC', })
state = reducer(state, { type: 'INC', })
state = reducer(state, { type: 'INC', })
state = reducer(state, { type: 'INC', })
console.log(state)
createRoot(document.querySelector('#root')).render(
  <StrictMode>

  </StrictMode>
) 

