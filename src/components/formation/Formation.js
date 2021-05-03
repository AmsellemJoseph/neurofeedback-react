import React,{useState} from 'react';
import Nav from '../NavBar/Nav'
import Footer from '../footer/Footer'
import Ecrivez from '../material-ui/Ecrivez-nous'

import TextBase from './TextBase'

const Formation = ()=>{

    return(
        <div className='formationContainer'>
            <Nav/>
            <TextBase/>
            <Ecrivez/>
            <Footer/>
        </div>
    )
}

export default Formation