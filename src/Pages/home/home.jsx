import React from 'react';
import './style.scss'
import Footer from '../../components/footer/footer'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import MyContainer from '../../components/Mycontainer/Mycontainer';
export default function Home(){
    const navigaete = useNavigate()
    return(
        <>
            <MyContainer className='my_container'>
                <div className='first'>
                    <p>Frames <br/> Win<br/> Games</p>
                    <Button onClick={() => {
                        navigaete('/store' , {replace : true})
                    }} variant='dark'>Shop Now</Button>
                </div>

                <div className='second'>
                    <img src="https://media.istockphoto.com/vectors/ninja-esport-vector-id1253989842?k=20&m=1253989842&s=612x612&w=0&h=YLJZtIzr3PHxCj3-4Bs2gCLyhoRlvOqQO23SA0yTT0M=" alt="no_somn" />
                </div>
            </MyContainer>

            <MyContainer className='flex_container'>

                <h1>What We Do</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui odio possimus accusamus atque aperiam distinctio quo recusandae maiores. Cum placeat distinctio illum officiis beatae! Architecto dolore dolores omnis! Maiores, iste corporis. Corporis atque esse maiores, officiis aut nihil architecto. Veritatis beatae deleniti rerum enim voluptatum, dolorum culpa exercitationem nulla! Amet provident voluptatum eius impedit at quas cum neque magnam blanditiis maiores reprehenderit dignissimos, illum quisquam laboriosam unde cupiditate labore totam minus pariatur, et non? Culpa aliquid ea asperiores ad magnam, dicta eum tenetur consequuntur dolores, voluptatibus veritatis quae quaerat labore vero nisi corrupti ipsam obcaecati minus, voluptas autem? Assumenda, temporibus officiis! Eaque tenetur fugiat recusandae veniam aspernatur placeat, quibusdam praesentium vel adipisci earum suscipit eum, nulla non, laborum architecto dolorum.</p>
                <Button variant='dark'>Learn More</Button>  
            </MyContainer>


            <MyContainer className='home_container'>


                <div>
                    <img src="https://media.istockphoto.com/vectors/ninja-esport-vector-id1253989842?k=20&m=1253989842&s=612x612&w=0&h=YLJZtIzr3PHxCj3-4Bs2gCLyhoRlvOqQO23SA0yTT0M=" alt="no_somn" />
                    <h3>name</h3>
                    <p >$5000</p>
                </div>

                <div>
                    <img src="https://media.istockphoto.com/vectors/ninja-esport-vector-id1253989842?k=20&m=1253989842&s=612x612&w=0&h=YLJZtIzr3PHxCj3-4Bs2gCLyhoRlvOqQO23SA0yTT0M=" alt="no_somn" />
                    <h3>name</h3>
                    <p >$5000</p>
                </div>

                <div>
                    <img src="https://media.istockphoto.com/vectors/ninja-esport-vector-id1253989842?k=20&m=1253989842&s=612x612&w=0&h=YLJZtIzr3PHxCj3-4Bs2gCLyhoRlvOqQO23SA0yTT0M=" alt="no_somn" />
                    <h3>name</h3>
                    <p>$5000</p>
                </div>

                <div>
                    <img src="https://media.istockphoto.com/vectors/ninja-esport-vector-id1253989842?k=20&m=1253989842&s=612x612&w=0&h=YLJZtIzr3PHxCj3-4Bs2gCLyhoRlvOqQO23SA0yTT0M=" alt="no_somn" />
                    <h3>name</h3>
                    <p>$5000</p>
                </div>
            </MyContainer>






            <Footer />
        </>
    )
}