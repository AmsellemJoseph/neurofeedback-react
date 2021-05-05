import React from 'react'
import Nav from '../NavBar/Nav'
import Footer from '../footer/Footer'
import Ecrivez from '../material-ui/Ecrivez-nous'
import News0001 from '../../assets/images/presse0001.jpeg'
import News0002 from '../../assets/images/presse0002.jpeg'
import News0003 from '../../assets/images/presse0003.jpeg'
import News0004 from '../../assets/images/presse0004.jpeg'
import { makeStyles } from '@material-ui/core/styles';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Zoom from '@material-ui/core/Zoom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles((theme) => ({
    Btnroot: {
        position: 'fixed',
        bottom: theme.spacing(12),
        zIndex:'100',
        right: theme.spacing(1),
    },
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

const News = (props) => {

    const classes = useStyles();

    return (
        <div>
            <div className='newsContainer'>
                <div className='newContainer'>
                <Nav />
                <CssBaseline />
            <ScrollTop {...props}>
        <Fab color="#11468c" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon style={{color:'#11468c'}}/>
        </Fab>
      </ScrollTop>
        <Toolbar id="back-to-top-anchor" />
                {/* <h2>ARTICLES DE PRESSE</h2> */}
                <div className='imgContainer'>
                    <Ecrivez />
                    <a href={News0001} target='_blank' rel="noreferrer"><img src={News0001} alt='presse 01' /></a>
                    <a href={News0002} target='_blank' rel="noreferrer"><img src={News0002} alt='presse 02' /></a>
                    <a href={News0003} target='_blank' rel="noreferrer"><img src={News0003} alt='presse 03' /></a>
                    <a href={News0004} target='_blank' rel="noreferrer"><img src={News0004} alt='presse 03' /></a>
                </div>
            </div>
            <div className="vide"></div>
            <Footer />
            </div>
        </div>
    )
}

export default News