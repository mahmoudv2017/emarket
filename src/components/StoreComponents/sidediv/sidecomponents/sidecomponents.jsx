import React from 'react';
import { Col, Row } from 'react-bootstrap';
import styles from './style.module.css'

function SideCompoennt(props) {
    return ( 

        <div className='my-3'>
        
            <h4 className={styles.subtitle}>{props.displayValue}</h4>

            <div>
                {props.values.map( item => {
                    return(
                        <Row key={item.id}>
                            <Col>
                                <input type="checkbox" name={item.id} id={item.id} />
                                <label className='mx-3' htmlFor={item.id}>{item.displayValue}</label>
                            </Col>
                        </Row>
                    )
                })}


            </div>
        </div>
       
     );
}

export default SideCompoennt;