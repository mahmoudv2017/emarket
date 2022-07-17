import { Container } from '@mui/system';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import styles from './style.module.css'
import { useCartContext } from '../../context/cartContext';
import currencyFormatter from '../../utilities/currencyFormat';

function Product() {
    const { id } = useParams()
    const {get_product , product} = useCartContext()
    
    useEffect(  () => {
        const fetchapi = async () => {
            await get_product(id)
        }
        fetchapi()

    },[])


    return ( 
        <Container className={styles.product_container}>
          
            {/* images container */}
            <div>
                <h1>images container</h1>
            </div>

            {/* product description */}
            <div>
                <h1>{product.product_name}</h1>
                <p>rating in stars</p>

                <hr />

                <p>Price: <span className={styles.currency}> { currencyFormatter(product.price) }</span></p>

                <table style={{width : '50%'}}>
                    <tbody>
                        <tr>
                            <th>Brand </th>
                            <td>{product.product_brand}</td>
                        </tr>
                    </tbody>
                    
                    

                </table>
                <h1>more attributes</h1>

                <hr />

                <p> <strong>About This Item</strong> </p>

                <p>{product.description}</p>
            </div>

          
        </Container>
     );
}

export default Product;