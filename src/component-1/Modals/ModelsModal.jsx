import React from 'react'
import { Modal, ModalBody, ModalHeader } from 'reactstrap'
import { useAddModelsMutation, useUpDateModelsMutation } from '../features/products/ProductSlice';

export default function ModelsModal({ open, toggle, item }) {
    const [addModel] = useAddModelsMutation()
    const [upDateModels] = useUpDateModelsMutation()
    const handleSubmit = (e) => {
        e.preventDefault();
        let payload = {
            title: e.target[0].value
        }
        if (item) {
            upDateModels({...payload, id: item.id})
        } else {
            addModel({ ...payload })
        }
        toggle()
    }
    return (
        <Modal isOpen={open} toggle={toggle}>
            <ModalHeader>
                <h4>add Model</h4>
            </ModalHeader>
            <ModalBody>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder='add Model...' defaultValue={item.title} className='form-control my-2' />
                    <button type='submit' className='btn btn-primary'>save</button>
                </form>
            </ModalBody>
        </Modal>
    )
}
