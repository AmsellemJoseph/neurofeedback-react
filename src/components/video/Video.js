import React from 'react'
import Nav from '../NavBar/Nav';
import Footer from '../footer/Footer'
import Ecrivez from '../material-ui/Ecrivez-nous'
import ReactPlayer from 'react-player'
import { makeStyles } from '@material-ui/core/styles';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Zoom from '@material-ui/core/Zoom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Toolbar from '@material-ui/core/Toolbar';


import Video0001 from '../../assets/videos/001.mp4'
import Video0002 from '../../assets/videos/002.mp4'
import Video0003 from '../../assets/videos/003.mp4'
import Video0004 from '../../assets/videos/004.mp4'
import Video0005 from '../../assets/videos/005.mp4'
import Video0006 from '../../assets/videos/006.mp4'


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

const Video = (props) => {

    const classes = useStyles();

    return (
        <div className='containerVideo'>
            <Nav/>
            <CssBaseline />
            <ScrollTop {...props}>
        <Fab color="#11468c" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon style={{color:'#11468c'}}/>
        </Fab>
      </ScrollTop>
        <Toolbar id="back-to-top-anchor" />
            <Ecrivez/>
            <div className="video">
                <div className='vid'>
                    <ReactPlayer url={Video0001} width='300px' height='300px' controls='true' />
                </div>
                <div className='vid'>
                    <ReactPlayer url={Video0002} width='300px' height='300px' controls='true' />
                </div>
                <div className='vid'>
                    <ReactPlayer url={Video0003} width='300px' height='300px' controls='true' />
                </div>
                <div className='vid'>
                    <ReactPlayer url={Video0004} width='300px' height='300px' controls='true' />
                </div>
                <div className='vid'>
                    <ReactPlayer url={Video0005} width='300px' height='300px' controls='true' />
                </div>
                <div className='vid'>
                    <ReactPlayer url={Video0006} width='300px' height='300px' controls='true' />
                </div>
            </div>
            <div className="vide"></div>
            <Footer/>
        </div>
    )
}

export default Video