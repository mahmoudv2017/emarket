import React, { useState } from 'react';
import SideCompoennt from './sidecomponents/sidecomponents';
import styles from './style.module.css'
import {Slider} from '@mui/material'

const data = [
    {
        id : 'category',
        displayValue : 'Categories',
        values : [
            {
                id : 'category#1',
                displayValue : 'Category 1'
            },
            {
                id : 'category#2',
                displayValue : 'Category 2'
            },
            {
                id : 'category#3',
                displayValue : 'Category 3'
            },
            {
                id : 'category#4',
                displayValue : 'Category 4'
            },
        ]
    }
]





function Sidediv() {
    const [value, setValue] = useState([1500, 2000]);

    const handlechange = (e,value) => {
        setValue(value)
    }
  
    return ( 
        <div className={styles.side_container}>
            <h4>Price</h4>
            <Slider

                sx={{
                    color: '#742e7d'
                }}
                value={value}
                onChange={handlechange}
                valueLabelDisplay="auto"
                min={1500}
                max={3000}
                
                />


            {data.map(item => {
                return(
                    <SideCompoennt key={item.id} {...item} />
                )
            })}

            

                
            <h4>brand</h4>

            <h4>stock availbality</h4>
        </div>
     );
}

export default Sidediv;