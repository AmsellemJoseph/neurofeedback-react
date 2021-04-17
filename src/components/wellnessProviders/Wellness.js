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
        description1:`Je me suis toujours sentie différente, sans jamais mettre de mot dessus; mais, quand mon fils a montré les mêmes signes de différences, en ajoutant la colère en plus, j'étais prête à tout pour lui éviter de ressentir les mêmes choses que moi. `,
        description2:`Alors; quand il a commencé à manifester son mal-être en explosant de colère en classe dès 5 ans, on a cherché par tous les moyens à l'aider à se calmer tout en évitant des traitements trop lourds.`,
        description3:`Je suis tombée par hasard sur une page parlant de la méthode neuroptimal® et nous avons fait des dizaines de kilomètres plusieurs fois par semaine pour tester. Je ne pouvais pas me lancer dans n'importe quoi après avoir testé plein d'autres méthodes.
        Quand j'ai vu les résultats j'ai voulu diffuser ce bien-être autour de moi et surtout le tester sur mes autres enfants et moi même.`,
        description4:`Les résultats ont été différents sur chacun mais assez extraordinaires. En même temps, quand on est maman autiste de 4 enfants dont 3 autistes et un hyper actif, la vie est extraordinaires…`,
        description5:`Je me ferai un plaisir de vous aider et vous accompagner dans vos entraînements pour obtenir le meilleur de la vie.`,
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
        description1:`Après avoir poussé ma femme à se lancer dans l'aventure neuroptimal®, j'ai voulu à tout prix tester sur moi.`,
        description2:`Les résultats ont été pour le moins surprenants. Comme beaucoup j'avais des attentes particulières, pourtant, au bout de quelques sessions je me suis rendu compte, qu'il y avait des effets spectaculaires sur moi, mais pas du tout sur le point visé à la base, j'ai alors compris que cette méthode était aussi merveilleuse que surprenante.`,
        description3:`Quand ma femme a eu besoin que je prenne la relève quelques mois pour des raisons de santé, c'est naturellement que je me suis lancé dans l'aventure, non plus en tant que simple utilisateur de la méthode mais en tant qu'entraineur, et j'y ai tellement pris goût que je n'ai pas voulu lâcher quand elle a pu reprendre sa place.`,
        description4:`yant voulu aller plus loin dans l'aide et l'accompagnement, je me suis également formé en pnl et imagination guidée par la transe (technique proche de l'hypnose ericksonienne), mais on revient vite a son premier amour.`,
        description5:`Je suis donc là, à votre disposition, pour vous accompagner, surtout que j'ai l'habitude de gérer des "atypiques".`,
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