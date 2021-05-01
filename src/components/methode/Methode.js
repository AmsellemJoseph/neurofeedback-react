import React from 'react';
import Nav from '../NavBar/Nav'
import Footer from '../footer/Footer'
import Brain from '../../assets/images/00003.jpg';
import Monde from '../../assets/images/00001.png';
import Pasteque from '../../assets/images/00002.jpg';
import Fauteuil from '../../assets/images/00005.jpg';
import Orchestre from '../../assets/images/violon.jpg'
import Zen from '../../assets/images/zen.jpg'
import Saute from '../../assets/images/saute.jpg'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';
import { HashLink as Link } from 'react-router-hash-link';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    root: {
        // display:'flex',
        // alignItems:'center',
        minWidth: 275,
        padding: '10px',
        margin: '10px 0',
        background: '#e5ded5',
        // boxShadow: "5px 5px 5px 0 #3cadf3",
        border: '1px solid #11468c',
    },
    Btnroot: {
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    sommaire:{
        color:"red",
    },
    root2:{
        width:'100%',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        background: '#e5ded5',
        border: '1px solid #11468c',

    }
}));

function ScrollTop(props) {
    const { children, window } = props;
    const classes = useStyles();
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 100,
    });

    const handleClick = (event) => {
        const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

        if (anchor) {
            anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

    return (
        <Zoom in={trigger}>
            <div onClick={handleClick} role="presentation" className={classes.Btnroot}>
                {children}
            </div>
        </Zoom>
    );
}

ScrollTop.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

const Methode = (props) => {

    const classes = useStyles();

    return (<div>
        <CssBaseline />
        <Nav />
        <Toolbar id="back-to-top-anchor" />
        <div className='articleContainer'>
            <div className='article'>
                {/* <h2>LA MÉTHODE</h2> */}
                <section >
                    <Card className={classes.root}>
                        <div>
                            <p>La méthode neuroptimal® permet de rendre le cerveau plus résilient et plus adaptatif grâce au dynamical neurofeedback®.</p>

                            <p className='questionImportant'>Mais qu'est ce que la résilience?</p>
                            <p>La résilience est la capacité de transformer une "limite" en force. Quelqu'un de naturellement résilient, prendra un événement traumatisant et le transformera en force pour avancer.</p>
                            <p className='questionImportant'>La méthode neuroptimal ® permet de rendre le cerveau résilient sans effort et sans prédisposition. </p>

                        </div>
                    </Card>
                </section>
                <section>

                    <Accordion className={classes.root2}>
                        <AccordionSummary 
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography style={{fontSize:'25px',textDecoration:'underline'}}>Sommaire</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <ul className='sommaire'>
                                <li><Link to="#Comment">Comment ça marche?</Link></li>
                                <li><Link to="#Qui">Qui peut faire des sessions d'entraînement neuroptimal ®?</Link></li>
                                <li><Link to="#Que">Que peut-on attendre en suivant un entraînement régulier?</Link></li>
                                <li><Link to="#Combien">Combien de sessions faut-il?</Link></li>
                                <li><Link to="#Combien">Est-ce que vous envoyez des ondes au cerveau?</Link></li>
                                <li><Link to="#Effet">Est-ce qu'il y a des effets secondaires?</Link></li>
                                <li><Link to="#Frequence">A quelle fréquence est-il conseillé de s'entraîner?</Link></li>


                            </ul>
                        </AccordionDetails>
                    </Accordion>


                </section>
                <img className='methodeImg' src={Brain} alt='cerveau' />
                <section id="Comment">
                    <Card className={classes.root}>

                        <p className='questionImportant'>Comment ça marche?</p>
                        <p>Confortablement installé sur un fauteuil, 5 capteurs sont posés sur vous, ils calculeront votre activité cérébrale 256 fois par seconde durant 33 minutes, pendant que vous regardez un film ou écoutez une musique.
                        Chaque fois que le système détectera une perte de contrôle involontaire dans l'activité cérébrale, l'appareil déclenchera une micro coupure son sur ce que vous écoutez.
                        Cette microcoupure indiquera à votre cerveau qu'il peut se corriger, il choisira alors de quelle manière.
                        Comme un entraînement, au fur et à mesure, il apprendra à se rééduquer de manière à gérer de façon optimale et autonome les difficultés du quotidien.
                        Ainsi, au fur et à mesure des entraînements, vous serez capable de mieux vous adapter au quotidien.
                        Tous les désagréments qui peuvent nous bloquer dans la vie et nous empêcher de progresser seront mieux régulés.
                        Ainsi vous pourrez, par exemple:
</p>

                        <div className='listeMethode'>
                            <p><FontAwesomeIcon icon={['fas', 'hand-point-right']} /> Retrouver confiance en vous</p>
                            <p><FontAwesomeIcon icon={['fas', 'hand-point-right']} />     Capable de mieux vous concentrer </p>
                            <p><FontAwesomeIcon icon={['fas', 'hand-point-right']} />     Mieux gérer vos accès de colère</p>
                            <p><FontAwesomeIcon icon={['fas', 'hand-point-right']} />     Vous sentir plus serein</p>
                            <p><FontAwesomeIcon icon={['fas', 'hand-point-right']} />     Oublier vos phobies</p>
                            <p><FontAwesomeIcon icon={['fas', 'hand-point-right']} />     Contrôler vos émotions</p>
                            <p><FontAwesomeIcon icon={['fas', 'hand-point-right']} />     Renforcer votre système immunitaire </p>
                            <p><FontAwesomeIcon icon={['fas', 'hand-point-right']} />     Dépasser vos limites</p>
                            <p><FontAwesomeIcon icon={['fas', 'hand-point-right']} />     Avoir un sommeil réparateur </p>
                            <p><FontAwesomeIcon icon={['fas', 'hand-point-right']} />     Aller au bout de vos projets </p>
                            <p><FontAwesomeIcon icon={['fas', 'hand-point-right']} />     Vous débarrasser de votre stress</p>
                        </div>

                        <p>Et ressentir tellement d'autres bienfaits qu'on ne saurait dresser une liste complète.</p>
                        <ScrollTop >
                            <Fab color="secondary" size="small" aria-label="scroll back to top" style={{ textAlign: 'right', bottom: '0px', right: '0px', background: '#3cadf3', color: '#401902' }}>
                                <KeyboardArrowUpIcon />
                            </Fab>
                        </ScrollTop>
                    </Card>
                </section>
                <img className='methodeImg' src={Fauteuil} alt='fauteil' />
                <section id="Qui">
                    <Card className={classes.root}>
                        <p className='questionImportant'>Qui peut faire des sessions d'entraînement neuroptimal ®?</p>
                        <p>La méthode étant entièrement naturelle et non invasive, elle convient à tout le monde, sans limite d'âge ou de conditions. Ainsi, on pourra aider tout le monde de la naissance, jusqu'à un âge très avancé, de la femme enceinte, à des personnes souffrants de troubles importants.
                Les sessions peuvent avoir un effet positif sur les personnes souffrant des désagréments du vieillissement. On peut également voir une diminution des troubles liés à l'autisme, ou encore une accalmie dans les angoisses du nourrisson.</p>
                    </Card>
                </section>
                <img src={Monde} className='methodeImg' alt='personnes faisant du Dynamical Neurofeedback®' />
                <section id="Que">
                    <Card className={classes.root}>
                        <p className='questionImportant'>Que peut-on attendre en suivant un entraînement régulier?</p>
                        <p>Bien que nous ne puissions rien vous promettre vous pouvez vous attendre à tout.
                        Faire des sessions neuroptimal® régulièrement, aide le cerveau à mieux se réguler de manière naturelle. Bien qu'on ne puisse absolument pas garantir le résultat qu'on va avoir et de quelle manière, on peut s'attendre à une multitude d'effets différents.
                        Les effets seront différents d'une personne à l'autre et peuvent varier du plus simple, comme un apaisement général, une meilleure qualité de sommeil, ou encore un regain de confiance en soi. On peut également constater une meilleure gestion de la concentration, la disparition d'une phobie, le développement de la créativité ou encore une meilleure gestion de la douleur.
                        Les effets sont multiples et varient d'une personne à l'autre. La méthode étant complètement naturelle, on ne peut pas viser un point particulier mais on sait qu'il y aura, quoi qu'il en soit, une évolution.
                </p>
                    </Card>
                </section>
                <img className='methodeImg' src={Pasteque} alt='Personne utilisant une pasteque en guise de sourire' />
                <section id="Combien">
                    <Card className={classes.root}>
                        <p className='questionImportant'>Combien de sessions faut-il?</p>
                        <p>Le nombre de sessions est imprévisible car chaque cerveau est différent et donc chaque personne aura une évolution différente. </p>
                        <p className='questionImportant'>Est-ce que vous envoyez des ondes au cerveau?</p>
                        <p>NON NON et NON aucune onde n'est envoyée dans ce cerveau.</p>
                        <p className='questionImportant'>Si vous n'envoyez rien, pourquoi ça marche? </p>
                        <p>Le subconscient existe pour nous "protéger", il cherche donc en permanence notre confort.
                        Lorsque nous écoutons une musique, ou un son continue, et que le son change d'un coup, notre subconscient se retrouve en situation d'inconfort, il va donc chercher à retrouver la position optimale, il va chercher à aller vers le mieux. C'est grâce à ce fonctionnement que notre méthode permet au cerveau de se corriger. Chaque micro coupure permettra d'indiquer à notre cerveau que quelque chose ne va pas, pour sortir de cette zone d'inconfort, notre cerveau va chercher à améliorer sa condition. Tel un chef d'orchestre, il essayera de chercher d'où vient la fausse note, afin de rétablir une harmonie générale.
</p>
                    </Card>
                </section>
                <img className='methodeImg' src={Orchestre} alt='orchestre jouant du violon' />
                <section id='Effet'>
                    <Card className={classes.root}>
                        <p className='questionImportant'>Est-ce qu'il y a des effets secondaires? </p>
                        <p>Non, il n'y a pas d'effets secondaires à proprement parlé. Cependant, comme dit précédemment, les entraînements neuroptimal® permettent au cerveau de retrouver un équilibre. Parfois, en cherchant l'équilibre, on peut tanguer un peu. De même, parfois, pendant les entraînements, on peut avoir des hauts et des bas, mais qui sont sans conséquences sur les effets des sessions. On verra juste des petites sorties de route, vite remise en place.</p>
                    </Card>
                </section>
                <img className='methodeImg' src={Zen} alt='Pierres les unes sur les autres' />
                <section id='Frequence'>
                    <Card className={classes.root}>
                        <p className='questionImportant'>A quelle fréquence est-il conseillé de s'entraîner? </p>
                        <p>Il n'y a pas de minimum ou de maximum mais, les entraînements neuroptimal ® représentant le sport du cerveau, on aura de meilleurs effets en n'écartant pas trop les sessions.</p>
                    </Card>
                </section>
                <section>
                    <Card className={classes.root}>
                        <p className='questionImportant'>En conclusion, la méthode neuroptimal ® a énormément à vous apporter. Vous pourrez grâce à elle, aller de l'avant, améliorer considérablement votre qualité de vie, le tout sans avoir l'impression de faire quoi que ce soit, à part se reposer confortablement. </p>
                    </Card>
                </section>
                <img className='methodeImg' src={Saute} alt='personne qui saute' />
            </div>
        </div>
        {/* <Footer /> */}


    </div>)
}

export default Methode