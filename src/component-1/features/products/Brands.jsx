import React, { useState } from 'react'
import { useDeleteBrandMutation, useGetBrandsQuery } from './ProductSlice'
import "../../scss/style.scss"
import BrandModal from '../../Modals/BrandModal'
export default function Brands() {
  const { data: brands } = useGetBrandsQuery()
  const [deleteBrand] = useDeleteBrandMutation()
  const [modal, setModal] = useState(false)
  const [ item, setItem ] = useState("")

  const addBrand = () => {
    setModal(true)
    setItem("")
  }
  const remove = (id) => {
    deleteBrand(id)
  }
  const BrandEdit = (item) => {
    setModal(true)
    setItem(item)
  }
  const toggle = () => {
    setModal(false)
  }

  return (
    <div className='container'>
      <BrandModal open={modal} toggle={toggle} item={item} />
      <div className="row my-3">
        <div className="col-3 offset-2">
          <button onClick={addBrand} className='btn btn-primary'>add brand</button>
        </div>
      </div>
      <div className="brand">
        {
          brands?.map((item, index) => {
            return <div className='brand_box' key={index}>
              <h4>Brand: <span> {item.title}</span></h4>
              <div className='mt-5'>
                <button onClick={() => BrandEdit(item)} className='btn btn-info'>edit</button>
                <button onClick={() => remove(item.id)} className='btn btn-danger mx-3'>delete</button>
              </div>
            </div>
          })
        }
      </div>
    </div>
  )
}
