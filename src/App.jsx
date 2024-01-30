import React from 'react'
import "./component-1/scss/style.scss"
import { Route, Routes } from 'react-router-dom'
import Menu from './component-1/features/products/Menu'
import Product from './component-1/features/products/Product'
import Brands from './component-1/features/products/Brands'
import Models from './component-1/features/products/Models'
import Single_Page from './component-1/features/products/Single_Page'
export default function App() {
  return (
    <>
      <div className='app'>
        <div className='app_menu'>
          <Menu />
        </div>
        <div className='app_routes'>
          <Routes>
            <Route path='/' element={<Product />} />
            <Route path='brands' element={<Brands />} />
            <Route path='models' element={<Models />} />
            <Route path='single_page/:id' element={<Single_Page/>}/>
          </Routes>
        </div>
      </div>
    </>
  )
}


