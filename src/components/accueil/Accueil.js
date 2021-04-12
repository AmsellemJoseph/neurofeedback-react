import React from 'react'
import Logo from './Logo'
import Titre from './Titre'
import EnterButton from './EnterButton'
import { Link } from 'react-router-dom'

const Accueil = () => {
    return <div className='containerAccueil' >
        <div className='fondAccueil'>
            <Logo />
            <Titre />
            <div className='enterButton'>
                <Link to='/home' style={{textDecoration:'none'}}>
            <EnterButton/>
                </Link>
            </div>
        </div>
    </div>
}

export default Accueil