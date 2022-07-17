import React, { useEffect, useState } from 'react';
import styles from './style.module.css'
import {get_all} from '../../../data/models'
import Storeitem from '../storeitem/storeitem';

function Maincontent() {

    const [data,setdata] = useState(null)

    useEffect( () => {
        get_all()
        .then(res => {
            setdata(res.data.results)
        })
    } , [])

    return ( 
        <div>
            <h1>Category</h1>
            <h3>Search</h3>

            <div className={styles.storecontent}>
                
                {data ? data.map(item => {
                   return(
                        <Storeitem key={item.id} {...item} />
                    )
                }) : null}
            </div>
        </div>
     );
}

export default Maincontent;