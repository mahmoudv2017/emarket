import React from 'react';
import './style.scss'
import twitter from '../../assets/images/twitter.png'
import MyContainer from '../Mycontainer/Mycontainer';

function Footer() {
    return ( 
        
        <MyContainer className='footer_container mx-4'>

            <h1>title</h1>

            <ul>
                <li> shop </li>
                <li> lookbook </li>
                <li> Legal </li>
            
            </ul>

            <ul>
                <li> about </li>
                <li> privacy policy </li>
                <li> terms & condition </li>
                
            </ul>

            <ul>
                <li> subscribe to the newsletter </li>
                <input type="text" placeholder='Your Email' />
            </ul>

            <ul>
                <li>Social media</li>
                <ul className='buttons'>
                    <div>
                        <img src={twitter} alt='asd' />
                    </div>
                    <div>
                        <img src={twitter} alt='asd'/>
                    </div>
                    <div>
                        <img src={twitter} alt='asd'/>
                    </div>

                </ul>
            </ul>

        </MyContainer>
        
     );
}

export default Footer;