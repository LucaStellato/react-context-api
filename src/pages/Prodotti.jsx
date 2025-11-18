import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'



export default function Prodotti() {
    const [products, setProducts] = useState([]);
    const endpoint = 'https://fakestoreapi.com/products'
    useEffect(fetchProducts, [])
    function fetchProducts() {
        axios.get(endpoint).then(response => {

            setProducts(response.data)
        })
    }
    return (
        <>
            <h2 style={{ textAlign: 'center', color: '#802c6e', marginTop: '20px', marginBottom: '30px' }}>ECCO I NOSTRI PRODOTTI</h2>
            <div className="row  " style={{ width: 'auto', marginTop: '20px', marginBottom: '20px', display: 'flex', marginLeft: '80px' }}>
                {products.map((product) => (
                    <div className="card  m-3 " style={{ width: "18rem", border: '0' }}>
                        <img src={product.image} className="card-img-top" style={{ width: '200px', objectFit: 'cover' }} />
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title">{product.title}</h5>

                            <h5>{product.price}€</h5>
                            <Link to={`/prodotti/${product.id}`} className="btn mt-auto" style={{ backgroundColor: '#802c6e', color: 'white' }}>Dettagli </Link>
                        </div>
                    </div>


                ))}
            </div>

        </>
    )
}