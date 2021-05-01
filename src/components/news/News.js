import React from 'react'
import Nav from '../NavBar/Nav'
import Footer from '../footer/Footer'
import News0001 from '../../assets/images/presse0001.jpeg'
import News0002 from '../../assets/images/presse0002.jpeg'
import News0003 from '../../assets/images/presse0003.jpeg'
import News0004 from '../../assets/images/presse0004.jpeg'

const News = ()=>{

    return(
        <div className='newsContainer'>
            <Nav/>
            <h2>ARTICLES DE PRESSE</h2>
            <div className='imgContainer'>
                <a href={News0001} target='_blank' rel="noreferrer"><img src={News0001} alt='presse 01'/></a>
                <a href={News0002} target='_blank' rel="noreferrer"><img src={News0002} alt='presse 02'/></a>
                <a href={News0003} target='_blank' rel="noreferrer"><img src={News0003} alt='presse 03'/></a>
                <a href={News0004} target='_blank' rel="noreferrer"><img src={News0004} alt='presse 03'/></a>
            </div>
            {/* <Footer/> */}
        </div>
    )
}

export default News