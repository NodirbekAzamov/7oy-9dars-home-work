import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
import "bootstrap/dist/css/bootstrap.min.css"
import api from './component-1/features/products/ProductSlice.jsx'
import { ApiProvider } from '@reduxjs/toolkit/query/react'
import { BrowserRouter } from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ApiProvider api={api}>
      <App />
    </ApiProvider>
  </BrowserRouter>
)
