import React,{useState} from 'react';
import Nav from '../NavBar/Nav'
import Footer from '../footer/Footer'

import TextBase from './TextBase'

const Formation = ()=>{

    return(
        <div className='formationContainer'>
            <Nav/>
            <TextBase/>
            {/* <Footer/> */}
        </div>
    )
}

export default Formation