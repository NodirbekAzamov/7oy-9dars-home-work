import React, { useState } from 'react'
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'
import { useAddProductMutation, useGetBrandsQuery, useGetModelsQuery, useUpDateProductMutation } from '../features/products/ProductSlice'

export default function ProductModal({ open, toggle, item }) {
    const { data: brands } = useGetBrandsQuery()
    const { data: models } = useGetModelsQuery()
    const [brand, setBrands] = useState("")
    const [model, setModels] = useState("")
    const [addProduct] = useAddProductMutation()
    const [upDateProduct] = useUpDateProductMutation()
    const handleSubmit = (e) => {
        e.preventDefault();
        let payload = {
            name: e.target[0].value,
            price: e.target[1].value,
            brands: brand,
            models: model,
            description: e.target[4].value,
        }
        if (item) {
            upDateProduct({...payload, id: item.id})
        } else {
            addProduct({ ...payload })
        }
        toggle()
    }

    return (
        <Modal isOpen={open} toggle={toggle}>
            <ModalHeader>
                <h4>Add Product</h4>
            </ModalHeader>
            <ModalBody>
                <form onSubmit={handleSubmit} id='form'>
                    <input type="text" placeholder='name...' defaultValue={item.name} className='form-control my-1' />
                    <input type="text" placeholder='price...' defaultValue={item.price} className='form-control my-1' />
                    <select onChange={(e) => setBrands(e.target.value)} defaultValue={item.brands} className='form-control my-1' >
                        <option value="brand" hidden>Brands</option>
                        {
                            brands?.map((item,index) => {
                                return <option value={item.title} key={index}>{item.title}</option>
                            })
                        }
                    </select>
                    <select onChange={(e) => setModels(e.target.value)} defaultValue={item.models} className='form-control my-1'>
                        <option value="models" hidden>Models</option>
                        {
                            models?.map((item,index) => {
                                return <option value={item.title} key={index}>{item.title}</option>
                            })
                        }

                    </select>
                    <textarea cols="30" rows="5" placeholder='description' defaultValue={item.description} className='form-control' my-1></textarea>
                </form>
            </ModalBody>
            <ModalFooter>
                <button type='submit' form='form' className='btn btn-success'>save</button>
            </ModalFooter>
        </Modal>
    )
}
