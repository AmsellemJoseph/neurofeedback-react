import React,{useState} from 'react';

import { makeStyles } from '@material-ui/core/styles';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Zoom from '@material-ui/core/Zoom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Toolbar from '@material-ui/core/Toolbar';



import Nav from '../NavBar/Nav'
import Footer from '../footer/Footer'
import Ecrivez from '../material-ui/Ecrivez-nous'

import TextBase from './TextBase'

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

const Formation = (props)=>{

    const classes = useStyles();

    return(
        <div className='formationContainer'>
            <Nav/>
            <CssBaseline />
            <ScrollTop {...props}>
        <Fab color="#11468c" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon style={{color:'#11468c'}}/>
        </Fab>
      </ScrollTop>
        <Toolbar id="back-to-top-anchor" />
            <TextBase/>
            <Ecrivez/>
            <div className="vide"></div>
            <Footer/>
        </div>
    )
}

export default Formation