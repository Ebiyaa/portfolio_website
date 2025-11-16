import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Hackhive from './pages/posts/hackhive.jsx'
import store from './store'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
      {/* <Hackhive /> */}
    </Provider>
  </StrictMode>
)

