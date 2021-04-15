import React,{useState} from 'react';
import Nav from '../NavBar/Nav'
import Footer from '../footer/Footer'
import Card from './Card'

import Jenny from '../../assets/images/Jenny.jpeg'
import Joseph from '../../assets/images/Joseph.jpg'

import Israel from '../../assets/images/20x15/il.png'

const Wellness = ()=>{

const [wellnessProvider] = useState([
    {
        id:1,
        photo:Jenny,
        nom:'Jennifer Amsellem',
        status:'Facilitatrice et représentante',
        adresse:'David Remez 13, Netanya',
        drapeau:Israel,
        pays:' Israel',
        whatsapp:'https://wa.me/+972548136396',
        tel:'tel:+972548136396',
        telAffiche:'0548136396',
        description1:`Salut je m'appelle Jenny`,
        description2:`Salut je m'appelle Jenny`,
        description3:`Salut je m'appelle Jenny`,
        description4:`Salut je m'appelle Jenny`,
        description5:`Salut je m'appelle Jenny`,
    },
    {
        id:2,
        photo:Joseph,
        nom:'Joseph Amsellem',
        status:'Wellness Provider',
        adresse:'David Remez 13, Netanya',
        drapeau:Israel,
        pays:' Israel',
        whatsapp:'https://wa.me/+972523473910',
        tel:'tel:+972523473910',
        telAffiche:'0523473910',
        description1:`Je m'appelle Joseph, j'ai 34ans.`,
        description2:`Papa de quatre enfants dont 3 sur le scpectre autistique, j'ai décidé de me lancer dans l'aventure Neuroptimal® après avoir constaté des effets surprenants sur mes enfants et sur moi même.`,
        description3:`Wellness providers depuis bientot 5ans, je me ferai un plaisir de vous aider.`,
        description4:``,
        description5:``,
    },
])

    return(
        <div className='Wellness'>
            <Nav/>
            {wellnessProvider.map((wellness)=>{
                return(
                    <Card
                    key={wellness.id}
                    photo={wellness.photo}
                    nom={wellness.nom}
                    status={wellness.status}
                    adresse={wellness.adresse}
                    drapeau={wellness.drapeau}
                    pays={wellness.pays}
                    whatsapp={wellness.whatsapp}
                    tel={wellness.tel}
                    telAffiche={wellness.telAffiche}
                    description1={wellness.description1} 
                    description2={wellness.description2} 
                    description3={wellness.description3} 
                    description4={wellness.description4} 
                    description5={wellness.description5} 
                    />
                )
            })}
            <Footer/>
        </div>
    )
}

export default Wellness