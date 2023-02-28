import React from 'react';
import Head from '../components/Title';

const HomePage = (props)=>{
    return (
        <>
            <nav>
                <h1>Hello From Home Page</h1>
                <Head name={props.name}/>
            </nav>
        </>
    )
}

export default HomePage;