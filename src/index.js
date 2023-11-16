import { StrictMode } from 'react' 
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import Counter from './Counter'
import { store } from './store'
import './index.css'
createRoot(document.querySelector('#root')).render(
  <StrictMode>
    <Provider store={store}>
      <Counter />
    </Provider>
  </StrictMode>
) 

