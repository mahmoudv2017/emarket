import React from 'react';
import styles from './style.module.css'
import {Card } from 'react-bootstrap'
import {  Link} from 'react-router-dom'
import {Skeleton} from '@mui/material'

function Storeitem(props) {


    const paragraph_filter = (para ) => {
        return para ? para.slice(0,100) + '.....' : null
    }
    return ( 
        <Card className={styles.card}>
           
      
            
            {
                props ? 
                <Link to={'/product/' + props.id}  style={{fontStyle:'inherit' , color:'inherit' , textDecoration:'none'}} >
               
                    <Card.Img variant="top" src={props.gallery[0]} className={styles.cardImg} />

                    <Card.Body>
                        <Card.Title>{props.product_name}</Card.Title>
                        <Card.Text className={styles.description}>
                            {paragraph_filter(props.description)}
                        </Card.Text>
        
                        <Card.Title className='text-muted'>Price</Card.Title>
                        
                        <Card.Subtitle style={{fontSize : '3rem'}}>{props.price}</Card.Subtitle>
                    </Card.Body>
                </Link>
                 :
                
                <>
                    <Skeleton variant="rectangular" width={'100%'} height={300} />
                    <Skeleton variant='text' animation='wave' />
                    <Skeleton variant='text' animation='wave' />
                    <Skeleton variant='text' animation='wave' />
                </>
            }
           
    
      

        </Card>
     );
}

export default Storeitem;