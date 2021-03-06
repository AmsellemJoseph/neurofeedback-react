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
import Ecrivez from '../material-ui/Ecrivez-nous'

const useStyles = makeStyles((theme) => ({
    root: {
        // display:'flex',
        // alignItems:'center',
        minWidth: 275,
        padding: '10px',
        margin: '10px 0',
        background: '#e5ded5',
        // boxShadow: "5px 5px 5px 0 #3cadf3",
        // border: '1px solid #11468c',
    },
    Btnroot: {
        position: 'fixed',
        bottom: theme.spacing(12),
        zIndex:'100',
        right: theme.spacing(1),
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
        // border: '1px solid #11468c',

    }
}));

function ScrollTop(props) {
    const { children, window } = props;
    const classes = useStyles();
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


const Methode = (props) => {

    const classes = useStyles();

    return (<div>
        <Nav />
            <Ecrivez/>
        <CssBaseline />
            <ScrollTop {...props}>
        <Fab color="#11468c" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon style={{color:'#11468c'}}/>
        </Fab>
      </ScrollTop>
        <Toolbar id="back-to-top-anchor" />
        <div className='articleContainer'>
            <div className='article'>
                {/* <h2>LA M??THODE</h2> */}
                <section >
                    <Card className={classes.root}>
                        <div>
                            <p>La m??thode neuroptimal?? permet de rendre le cerveau plus r??silient et plus adaptatif gr??ce au dynamical neurofeedback??.</p>

                            <p className='questionImportant'>Mais qu'est ce que la r??silience?</p>
                            <p>La r??silience est la capacit?? de transformer une "limite" en force. Quelqu'un de naturellement r??silient, prendra un ??v??nement traumatisant et le transformera en force pour avancer.</p>
                            <p className='questionImportant'>La m??thode neuroptimal ?? permet de rendre le cerveau r??silient sans effort et sans pr??disposition. </p>

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
                                <li><Link to="#Comment">Comment ??a marche?</Link></li>
                                <li><Link to="#Qui">Qui peut faire des sessions d'entra??nement neuroptimal ???</Link></li>
                                <li><Link to="#Que">Que peut-on attendre en suivant un entra??nement r??gulier?</Link></li>
                                <li><Link to="#Combien">Combien de sessions faut-il?</Link></li>
                                <li><Link to="#Combien">Est-ce que vous envoyez des ondes au cerveau?</Link></li>
                                <li><Link to="#Effet">Est-ce qu'il y a des effets secondaires?</Link></li>
                                <li><Link to="#Frequence">A quelle fr??quence est-il conseill?? de s'entra??ner?</Link></li>


                            </ul>
                        </AccordionDetails>
                    </Accordion>


                </section>
                <img className='methodeImg' src={Brain} alt='cerveau' />
                <section id="Comment">
                    <Card className={classes.root}>

                        <p className='questionImportant'>Comment ??a marche?</p>
                        <p>Confortablement install?? sur un fauteuil, 5 capteurs sont pos??s sur vous, ils calculeront votre activit?? c??r??brale 256 fois par seconde durant 33 minutes, pendant que vous regardez un film ou ??coutez une musique.
                        Chaque fois que le syst??me d??tectera une perte de contr??le involontaire dans l'activit?? c??r??brale, l'appareil d??clenchera une micro coupure son sur ce que vous ??coutez.
                        Cette microcoupure indiquera ?? votre cerveau qu'il peut se corriger, il choisira alors de quelle mani??re.
                        Comme un entra??nement, au fur et ?? mesure, il apprendra ?? se r????duquer de mani??re ?? g??rer de fa??on optimale et autonome les difficult??s du quotidien.
                        Ainsi, au fur et ?? mesure des entra??nements, vous serez capable de mieux vous adapter au quotidien.
                        Tous les d??sagr??ments qui peuvent nous bloquer dans la vie et nous emp??cher de progresser seront mieux r??gul??s.
                        Ainsi vous pourrez, par exemple:
</p>

                        <div className='listeMethode'>
                            <p><FontAwesomeIcon icon={['fas', 'hand-point-right']} /> Retrouver confiance en vous</p>
                            <p><FontAwesomeIcon icon={['fas', 'hand-point-right']} />     Capable de mieux vous concentrer </p>
                            <p><FontAwesomeIcon icon={['fas', 'hand-point-right']} />     Mieux g??rer vos acc??s de col??re</p>
                            <p><FontAwesomeIcon icon={['fas', 'hand-point-right']} />     Vous sentir plus serein</p>
                            <p><FontAwesomeIcon icon={['fas', 'hand-point-right']} />     Oublier vos phobies</p>
                            <p><FontAwesomeIcon icon={['fas', 'hand-point-right']} />     Contr??ler vos ??motions</p>
                            <p><FontAwesomeIcon icon={['fas', 'hand-point-right']} />     Renforcer votre syst??me immunitaire </p>
                            <p><FontAwesomeIcon icon={['fas', 'hand-point-right']} />     D??passer vos limites</p>
                            <p><FontAwesomeIcon icon={['fas', 'hand-point-right']} />     Avoir un sommeil r??parateur </p>
                            <p><FontAwesomeIcon icon={['fas', 'hand-point-right']} />     Aller au bout de vos projets </p>
                            <p><FontAwesomeIcon icon={['fas', 'hand-point-right']} />     Vous d??barrasser de votre stress</p>
                        </div>

                        <p>Et ressentir tellement d'autres bienfaits qu'on ne saurait dresser une liste compl??te.</p>
                        {/* <ScrollTop > */}
                            {/* <Fab color="secondary" size="small" aria-label="scroll back to top" style={{ textAlign: 'right', bottom: '0px', right: '0px', background: '#3cadf3', color: '#401902' }}>
                            <Ecrivez/>
                            </Fab> */}
                        {/* </ScrollTop> */}
                    </Card>
                </section>
                <img className='methodeImg' src={Fauteuil} alt='fauteil' />
                <section id="Qui">
                    <Card className={classes.root}>
                        <p className='questionImportant'>Qui peut faire des sessions d'entra??nement neuroptimal ???</p>
                        <p>La m??thode ??tant enti??rement naturelle et non invasive, elle convient ?? tout le monde, sans limite d'??ge ou de conditions. Ainsi, on pourra aider tout le monde de la naissance, jusqu'?? un ??ge tr??s avanc??, de la femme enceinte, ?? des personnes souffrants de troubles importants.
                Les sessions peuvent avoir un effet positif sur les personnes souffrant des d??sagr??ments du vieillissement. On peut ??galement voir une diminution des troubles li??s ?? l'autisme, ou encore une accalmie dans les angoisses du nourrisson.</p>
                    </Card>
                </section>
                <img src={Monde} className='methodeImg' alt='personnes faisant du Dynamical Neurofeedback??' />
                <section id="Que">
                    <Card className={classes.root}>
                        <p className='questionImportant'>Que peut-on attendre en suivant un entra??nement r??gulier?</p>
                        <p>Bien que nous ne puissions rien vous promettre vous pouvez vous attendre ?? tout.
                        Faire des sessions neuroptimal?? r??guli??rement, aide le cerveau ?? mieux se r??guler de mani??re naturelle. Bien qu'on ne puisse absolument pas garantir le r??sultat qu'on va avoir et de quelle mani??re, on peut s'attendre ?? une multitude d'effets diff??rents.
                        Les effets seront diff??rents d'une personne ?? l'autre et peuvent varier du plus simple, comme un apaisement g??n??ral, une meilleure qualit?? de sommeil, ou encore un regain de confiance en soi. On peut ??galement constater une meilleure gestion de la concentration, la disparition d'une phobie, le d??veloppement de la cr??ativit?? ou encore une meilleure gestion de la douleur.
                        Les effets sont multiples et varient d'une personne ?? l'autre. La m??thode ??tant compl??tement naturelle, on ne peut pas viser un point particulier mais on sait qu'il y aura, quoi qu'il en soit, une ??volution.
                </p>
                    </Card>
                </section>
                <img className='methodeImg' src={Pasteque} alt='Personne utilisant une pasteque en guise de sourire' />
                <section id="Combien">
                    <Card className={classes.root}>
                        <p className='questionImportant'>Combien de sessions faut-il?</p>
                        <p>Le nombre de sessions est impr??visible car chaque cerveau est diff??rent et donc chaque personne aura une ??volution diff??rente. </p>
                        <p className='questionImportant'>Est-ce que vous envoyez des ondes au cerveau?</p>
                        <p>NON NON et NON aucune onde n'est envoy??e dans ce cerveau.</p>
                        <p className='questionImportant'>Si vous n'envoyez rien, pourquoi ??a marche? </p>
                        <p>Le subconscient existe pour nous "prot??ger", il cherche donc en permanence notre confort.
                        Lorsque nous ??coutons une musique, ou un son continue, et que le son change d'un coup, notre subconscient se retrouve en situation d'inconfort, il va donc chercher ?? retrouver la position optimale, il va chercher ?? aller vers le mieux. C'est gr??ce ?? ce fonctionnement que notre m??thode permet au cerveau de se corriger. Chaque micro coupure permettra d'indiquer ?? notre cerveau que quelque chose ne va pas, pour sortir de cette zone d'inconfort, notre cerveau va chercher ?? am??liorer sa condition. Tel un chef d'orchestre, il essayera de chercher d'o?? vient la fausse note, afin de r??tablir une harmonie g??n??rale.
</p>
                    </Card>
                </section>
                <img className='methodeImg' src={Orchestre} alt='orchestre jouant du violon' />
                <section id='Effet'>
                    <Card className={classes.root}>
                        <p className='questionImportant'>Est-ce qu'il y a des effets secondaires? </p>
                        <p>Non, il n'y a pas d'effets secondaires ?? proprement parl??. Cependant, comme dit pr??c??demment, les entra??nements neuroptimal?? permettent au cerveau de retrouver un ??quilibre. Parfois, en cherchant l'??quilibre, on peut tanguer un peu. De m??me, parfois, pendant les entra??nements, on peut avoir des hauts et des bas, mais qui sont sans cons??quences sur les effets des sessions. On verra juste des petites sorties de route, vite remise en place.</p>
                    </Card>
                </section>
                <img className='methodeImg' src={Zen} alt='Pierres les unes sur les autres' />
                <section id='Frequence'>
                    <Card className={classes.root}>
                        <p className='questionImportant'>A quelle fr??quence est-il conseill?? de s'entra??ner? </p>
                        <p>Il n'y a pas de minimum ou de maximum mais, les entra??nements neuroptimal ?? repr??sentant le sport du cerveau, on aura de meilleurs effets en n'??cartant pas trop les sessions.</p>
                    </Card>
                </section>
                <section>
                    <Card className={classes.root}>
                        <p className='questionImportant'>En conclusion, la m??thode neuroptimal ?? a ??norm??ment ?? vous apporter. Vous pourrez gr??ce ?? elle, aller de l'avant, am??liorer consid??rablement votre qualit?? de vie, le tout sans avoir l'impression de faire quoi que ce soit, ?? part se reposer confortablement. </p>
                    </Card>
                </section>
                <img className='methodeImg' src={Saute} alt='personne qui saute' />
            </div>

        </div>
        <div className="vide"></div>
        <Footer />


    </div>)
}

export default Methode