import React, { useState } from 'react'
import { Modal, ModalBody, ModalHeader } from 'reactstrap'
import { useAddModelsMutation, useUpDateModelsMutation } from '../features/products/ProductSlice';

export default function ModelsModal({ open, toggle, item }) {
    const [addModel] = useAddModelsMutation()
    const [upDateModels] = useUpDateModelsMutation()
    const [title, setTitle] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault();
        let payload = {
            title: title ? title : item.title,
        }
        if (item) {
            upDateModels({...payload, id: item.id})
        } else {
            addModel({ ...payload })
        }
        toggle()
    }

    let active = null;
    if (item) {
        active = true
    } else {
        active = Boolean(title)
    }

    return (
        <Modal isOpen={open} toggle={toggle}>
            <ModalHeader>
                <h4>add Model</h4>
            </ModalHeader>
            <ModalBody>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder='add Model...' onChange={(e)=> setTitle(e.target.value)} defaultValue={item.title} className='form-control my-2' />
                    <button type='submit' disabled={!active} className='btn btn-primary'>save</button>
                </form>
            </ModalBody>
        </Modal>
    )
}
