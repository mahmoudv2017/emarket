import React from 'react';
import './style.scss'

function MyContainer( props) {
    return ( <div className={'home_div ' + props.className}>
        <div className='upper'></div>
        {props.children}
        <div className='lower'></div>
    </div> );
}

export default MyContainer;