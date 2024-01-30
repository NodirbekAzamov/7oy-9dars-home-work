import React from 'react'
import { Link } from 'react-router-dom'
import "../../scss/style.scss"

export default function Menu() {
  return (
    <div className='menu'>
        <Link to="/" className='btn btn-primary w-75'>Product</Link>
        <Link to="/brands" className='btn btn-primary w-75'>Brand</Link>
        <Link to="/models" className='btn btn-primary w-75'>Models</Link>
    </div>
  )
}
