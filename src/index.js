import { StrictMode } from 'react' 
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App'
import  store  from './store/store'
import './index.css'
createRoot(document.querySelector('#root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
) 

