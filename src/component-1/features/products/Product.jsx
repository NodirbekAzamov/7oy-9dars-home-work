import React, { useState } from 'react'
import { useDeleteProductMutation,  useGetProductQuery, } from './ProductSlice'
import ProductModal from '../../Modals/ProductModal'
import "../../scss/style.scss"
import { Link } from 'react-router-dom'

export default function Product() {
    const { data: product } = useGetProductQuery()
    const [deleteProduct] = useDeleteProductMutation()
    const [item, setItem] = useState("")
    const [modal, setModal] = useState(false)

    const openModal = () => {
        setModal(true)
        setItem("")
    }

    const remove = (id) => {
        deleteProduct(id)
    }

    const ProductEdit = (item) => {
        setModal(true)
        setItem(item)
    }

    const toggle = () => {
        setModal(false)
    }

    return (
        <div className='product'>
            <ProductModal open={modal} toggle={toggle} item={item} />
            <div className="row my-3">
                <div className="col-6">
                    <button onClick={openModal} className='btn btn-primary '>add product</button>
                </div>
            </div>
            <div className='product_boxs'>
                {
                    product?.map((item, index) => {
                        return <div className="product_card" key={index}>
                            <h4>Name: <span>{item.name}</span></h4>
                            {/* <h4>Price: <span> {item.price}</span></h4> */}
                            {/* <h4>Brand: <span>{item.brands}</span></h4> */}
                            {/* <h4>Model: <span>{item.models}</span></h4> */}
                            <p className='descr'>Description: <span>{item.description}</span></p>
                            <div className="">
                                <button onClick={() => ProductEdit(item)} className='btn btn-info'>edit</button>
                                <button onClick={() => remove(item.id)} className='btn btn-danger mx-2'>delete</button>
                                <Link to={`single_page/${item.id}`} className='btn btn-success my-2 w-100'>Single page</Link>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}
