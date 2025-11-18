import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

import axios from "axios";


export default function SingleProduct() {
    const { id } = useParams();
    const [product, setProduct] = useState({})
    const navigate = useNavigate()
    function fetchData() {

        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(response => {
                console.log(response)
                setProduct(response.data)

            })
            .catch(err => {
                if (err.response?.status === 404) {
                    navigate(-1)
                }

            })

    }
    useEffect(fetchData, [])



    return (
        <>
            <div className="d-flex">
                <img src={product?.image} alt='' style={{ width: '360px', marginLeft: '50px', paddingBottom: '180px', marginTop: '40px' }} />
                <div style={{ marginLeft: '50px', marginTop: '70px' }}>
                    <h4 style={{ color: '#802c6e' }}>{product?.title}</h4>
                    <p style={{ fontSize: '20px' }}>{product?.description}</p>
                    <p style={{ fontSize: '30px' }}>{product?.price}€</p>
                </div>

            </div>
        </>
    )
}