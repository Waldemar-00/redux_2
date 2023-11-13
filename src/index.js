import { StrictMode } from 'react' 
import { createRoot } from 'react-dom/client' 

const initialState = 0
const reducer = (state = 0, action) => {
  switch(action.type) {
    case 'INC': return state = state + 1 // need 'return'
    default: return state
  }
}
let state = reducer(undefined, { type: 'INC', })
state = reducer(state, { type: 'INC', })
state = reducer(state, { type: 'INC', })
state = reducer(state, { type: 'INC', })
state = reducer(state, { type: 'INC', })
console.log(state)
createRoot(document.querySelector('#root')).render(
  <StrictMode>

  </StrictMode>
) 

