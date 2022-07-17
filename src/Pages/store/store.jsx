import React from 'react';
import Maincontent from '../../components/StoreComponents/maincontent/maincontent';
import Sidediv from '../../components/StoreComponents/sidediv/sidediv';
import styles from './store.module.css'

export default function Store(){
   

    
    
    return(
        <div className={styles.store_container}>
            <Sidediv />
            <Maincontent />
        </div>
       
    )
}