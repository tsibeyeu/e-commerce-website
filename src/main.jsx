import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import store from "./store.js";
import './index.css'
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
    <ToastContainer position='top-center'/>
  </Provider>,
)
