import React from 'react'
import Logo from './Logo'
import Titre from './Titre'
import EnterButton from './EnterButton'

const Accueil = () => {
    return <div className='containerAccueil' >
        <div className='fondAccueil'>
            <Logo />
            <Titre />
            <div className='enterButton'>
            <EnterButton/>
            </div>
        </div>
    </div>
}

export default Accueil