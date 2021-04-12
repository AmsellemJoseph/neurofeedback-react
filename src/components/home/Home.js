import React, { useState } from 'react'
import Nav from '../NavBar/Nav'
import Footer from '../footer/Footer'
import Popup from './Popup'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Descriptif from './Descriptif'
import { Link } from 'react-router-dom'

const Home = () => {


    const [description] = useState([
        {
            className: 'containerDescriptifGauche',
            font: 'leaf',
            titre: 'La méthode',
            explication: 'Découvrez en quoi consiste cette méthode entièrement naturelle.',
            link:'/methode',
        },
        {
            className: 'containerDescriptifDroite',
            font: 'users',
            titre: 'Vos Wellness Providers',
            explication: 'Trouvez le wellness provider le plus proche de chez vous.',
            link:'/wellness',
        },
        {
            className: 'containerDescriptifGauche',
            font: 'newspaper',
            titre: 'Retrouvez nous dans la presse.',
            explication: 'Voici differents articles que nous avons fait à propos de la méthode.',
            link:'/news',
        },
        {
            className: 'containerDescriptifDroite',
            font: 'video',
            titre: 'Nos vidéos',
            explication: 'Une séléction de nos interviews et autres explications.',
            link:'/video',
        },
        {
            className: 'containerDescriptifGauche',
            font: 'chalkboard-teacher',
            titre: "S'équiper et se former",
            explication: "Ne ratez pas les prochaines formations afin de vous lancer dans l'aventure",
            link:'/formation',
        },
        {
            className: 'containerDescriptifDroite',
            font: 'rss',
            titre: 'Blog',
            explication: "Restez informé sur l'actualité à travers de nombreux posts.",
            link:'/blog',
        },
        
    ])
    // className: 'containerDescriptifDroite',
    // font: 'rss',
    // titre: 'Blog',
    // explication: "Restez informé sur l'actualité.",
    // link:'/contact',
    return (
        <div>
            <Nav />
            <div className='DescriptifMainContainer'>
                <div className='DescriptifMainContainerGD'>
                    {description.map((description, i) => {
                        return (
                            <Link className={description.className} key={i} to={description.link} style={{textDecoration:'none'}}>
                            <Descriptif titre={description.titre} explication={description.explication} />
                            <FontAwesomeIcon icon={['fas', description.font]} style={{fontSize:'40px',margin:'20px',color:'#a7d5f2'}} />
                            </Link>
                        )
                    })}
                    {/* <div className='containerDescriptifGauche'>
                        <Descriptif />
                        <FontAwesomeIcon icon={['fas', 'leaf']} />
                    </div>
                    <div className='containerDescriptifGauche'>
                        <Descriptif />
                        <FontAwesomeIcon icon={['fas', 'leaf']} />
                    </div>
                    <div className='containerDescriptifGauche'>
                        <Descriptif />
                        <FontAwesomeIcon icon={['fas', 'leaf']} />
                    </div>
                    <div className='containerDescriptifGauche'>
                        <Descriptif />
                        <FontAwesomeIcon icon={['fas', 'leaf']} />
                    </div>
                    <div className='containerDescriptifGauche'>
                        <Descriptif />
                        <FontAwesomeIcon icon={['fas', 'leaf']} />
                    </div>
                    <div className='containerDescriptifGauche'>
                        <Descriptif />
                        <FontAwesomeIcon icon={['fas', 'leaf']} />
                    </div> */}
                </div>
            </div>
            {/* <Popup /> */}
            <Footer />
        </div>
    )
}


export default Home