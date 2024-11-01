import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { collection, getDocs,getDoc, deleteDoc, doc } from 'firebase/firestore'
import { db } from '../firebaseConfig/firebase'

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)

const SHow = () => {
    // configuramos hooks
    const [products, setProducts] = useState( [] )

    // referencias a DB
    const productsCollection = collection(db, 'products')

    // funciona mostrar
    const getProducts = async () => {
        const data = await getDocs(productsCollection)
        //console.log(data.docs)
        setProducts(
            data.docs.map( (doc) => ( { ...doc.data(), id:doc.id}))
        )
        console.log(products)
        
    }

    // funciona eliminar un doc
    const deleteProduct = async (id) => {
        const productDoc = doc(db, "products", id)
        await deleteDoc(productDoc)
        getProducts()
    }

    // funcion confirmacion sweetalert2
    const confirmDelete = (id) => {
        MySwal.fire({
            title: "Eliminar Producto",
            text: "Esta acción no se puede revertir!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Eliminiar de todas formas",
            cancelButtonText: "Cancelar"
        }).then((result) => {
            if (result.isConfirmed) {
                deleteProduct(id)
                Swal.fire({
                    title: "Eliminado!",
                    text: "El elememento ha sido eleminado.",
                    icon: "success"
                });
            }
        });
    }

    // usamos useEffect
    useEffect( () =>{
        getProducts()
    }, [] )

  return (
    <>
    <div className='container'>
        <div className='row'>
            <div className='col'>
                <div className='d-grid gap-2'>
                    <Link to="/create" className='btn btn-secondary mt-2 mb-2'>Create </Link> 
                </div>

                <table className='table table-dark table-hover'>
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Stock</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {products.map( (product) => (
                            <tr key={(product.id)}>
                                <td>{product.description}</td>
                                <td>{product.stock}</td>
                                <td>
                                    <Link to={`/edit/${product.id}`} className="btn btn-light"><i className="fa-solid fa-pencil"></i></Link>
                                    
                                    <button onClick={ () => {confirmDelete(product.id)}} className='btn btn-danger' ><i className="fa-solid fa-trash-can"></i></button>
                                </td>
                                
                            </tr>
                        ) )}
                    </tbody>

                </table>



            </div>
        </div>
    </div>
    </>
  )
}

export default SHow
