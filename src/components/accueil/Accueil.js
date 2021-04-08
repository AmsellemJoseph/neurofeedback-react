import React from 'react'
import Logo from './Logo'
import Titre from './Titre'

const Accueil = () => {
    return <div className='containerAccueil' >
        <div className='fondAccueil'>
            <Logo />
            <Titre />
        </div>
    </div>
}

export default Accueil