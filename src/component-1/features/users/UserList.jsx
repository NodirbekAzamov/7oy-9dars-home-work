// import React, { useState }  from 'react'
// import {  useDeleteUserMutation, useGetUsersQuery, useUpDateUserMutation } from './UserSlice'
// import ModalAdd from '../../Modals/ModalAdd'
// import "../../scss/style.scss"

// export default function UserList() {
//     const [modal, setModal] = useState(false)
//     const [item, setItem] = useState("")
//     const {data: users} =  useGetUsersQuery()
//     const [deleteUser] = useDeleteUserMutation()

//     const openModal = () => {
//         setModal(true)
//         setItem("")
//     }

//     const edit = (item) => {
//         setModal(true) 
//         setItem(item)
//     }

//     const remove = (id) => {
//         deleteUser(id)
//     }
//     const toggle = ()=> {
//         setModal(false)
//     }

//     return (
//         <div>
//             <ModalAdd open={modal} toggle={toggle} item={item}/>
            

//             {/* <div className="row my-3">
//                 <div className="col-3">
//                     <button onClick={openModal} className='btn btn-primary'>add user</button>
//                 </div>
//             </div>
//             <div className="row">
//                 <div className="col-12">
//                     <table className='table table-bordered table-striped'>
//                         <thead>
//                             <tr>
//                                 <th>T/R</th>
//                                 <th>Name</th>
//                                 <th>Username</th>
//                                 <th>Email</th>
//                                 <th>Address (city)</th>
//                                 <th>Company (name)</th>
//                                 <th>Action</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {
//                                 users?.map((item, index) => {
//                                     return <tr key={index}>
//                                         <td>{index + 1}</td>
//                                         <td>{item.name}</td>
//                                         <td>{item.username}</td>
//                                         <td>{item.email}</td>
//                                         <td>{item.address}</td>
//                                         <td>{item.company}</td>
//                                         <td>
//                                             <button onClick={()=>edit (item)} className='btn btn-info'>edit</button>
//                                             <button onClick={()=> remove (item.id)} className='btn btn-danger'>delete</button>
//                                         </td>
//                                     </tr>
//                                 })
//                             }
//                         </tbody>
//                     </table>
//                 </div>
//             </div> */}
//         </div>
//     )
// }






