import React from 'react'
import { Modal, ModalBody, ModalHeader } from 'reactstrap'
import { useAddBrandMutation, useUpDateBrandMutation } from '../features/products/ProductSlice'

export default function BrandModal({ open, toggle, item }) {
    const [addBrand] = useAddBrandMutation()
    const [upDateBrand] = useUpDateBrandMutation()
    const handleSubmit = (e) => {
        e.preventDefault()
        let payload = {
            title: e.target[0].value
        }
        if (item) {
            upDateBrand({ ...payload, id: item.id })
        } else {
            addBrand({ ...payload })
        }
        toggle()
    }
    return (
        <Modal isOpen={open} toggle={toggle}>
            <ModalHeader>
                <h3>add brand</h3>
            </ModalHeader>
            <ModalBody>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder='add brand...' defaultValue={item.title} className='form-control my-2' />
                    <button type='submit' className='btn btn-primary'>save</button>
                </form>
            </ModalBody>
        </Modal>
    )
}
