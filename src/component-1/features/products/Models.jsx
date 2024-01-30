import React, { useState } from 'react'
import { useDeleteModelsMutation, useGetModelsQuery } from './ProductSlice'
import "../../scss/style.scss"
import ModelsModal from '../../Modals/ModelsModal';
export default function Models() {
  const { data: models } = useGetModelsQuery()
  const [model, setModel] = useState(false)
  const [ deleteModels] = useDeleteModelsMutation()
  const [item, setItem] = useState("")
  const addModel = () => {
    setModel(true)
    setItem("")
  }

  const ModelEdit = (item) => {
    setItem(item)
    setModel(true)
  }

  const remove = (id) => {
    deleteModels(id)
  }
  const toggle = () => {
    setModel(false)
  }
  

  return (
    <div className='container'>
      <ModelsModal open={model} toggle={toggle} item={item} />
      <div className="row my-3">
        <div className="col-3 offset-0">
          <button onClick={addModel} className='btn btn-primary'>add Model</button>
        </div>
      </div>
      <div className="model">
        {
          models?.map((item, index) => {
            return <div className='model_box' key={index}>
              <h4>Model: <span> {item.title}</span></h4>
              <div className='mt-5'>
                <button onClick={() => ModelEdit(item)} className='btn btn-info'>edit</button>
                <button onClick={() => remove(item.id)} className='btn btn-danger mx-3'>delete</button>
              </div>
            </div>
          })
        }
      </div>

    </div>
  )
}
