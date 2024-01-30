import React, { useState } from 'react'
import { Modal, ModalBody, ModalHeader } from 'reactstrap'
import { useAddBrandMutation, useUpDateBrandMutation } from '../features/products/ProductSlice'

export default function BrandModal({ open, toggle, item }) {
    const [addBrand] = useAddBrandMutation()
    const [upDateBrand] = useUpDateBrandMutation()
    const [title, setTitle] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault()
        let payload = {
            title: title ? title : item.title
        }
        if (item) {
            upDateBrand({ ...payload, id: item.id })
        } else {
            addBrand({ ...payload })
        }
        toggle()
    }

    let active = null
    if (item) {
        active = true
    } else {
        active = Boolean(title) 
    }


    return (
        <Modal isOpen={open} toggle={toggle}>
            <ModalHeader>
                <h3>add brand</h3>
            </ModalHeader>
            <ModalBody>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder='add brand...' onChange={(e)=> setTitle(e.target.value)} defaultValue={item.title} className='form-control my-2' />
                    <button type='submit' disabled={!active} className='btn btn-primary'>save</button>
                </form>
            </ModalBody>
        </Modal>
    )
}
