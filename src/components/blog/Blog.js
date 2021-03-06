import React, { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Zoom from '@material-ui/core/Zoom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Toolbar from '@material-ui/core/Toolbar';
import Nav from '../NavBar/Nav';
import Accordeon from './Accordeon'
import Footer from '../footer/Footer';
import Ecrivez from '../material-ui/Ecrivez-nous'

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

const Blog = (props) => {

    const classes = useStyles();

    const [getBlog, setBlog] = useState([]);

    useEffect(() => {
        const blog = async () => {
            const URL = `https://www.wellness-israel.net/api/Blog/getBlog`;
            const res = await fetch(URL);
            const response = await res.json()
            setBlog(response.Table)
        }
        blog();
    }, [])

    return (
        <div>
            
            <Ecrivez />
            <div className='blogContainerMain'>
                <div className="blogContainer">
                    <Nav />
                    <CssBaseline />
            <ScrollTop {...props}>
        <Fab color="#11468c" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon style={{color:'#11468c'}}/>
        </Fab>
      </ScrollTop>
        <Toolbar id="back-to-top-anchor" />
                    <h2>BLOG</h2>
                    {getBlog.reverse().map((blog, i) => {
                        return (
                            <Accordeon key={i} titre={blog.Titre}
                                intro={blog.intro}
                                texte1={blog.Texte1}
                                texte2={blog.Texte2}
                                texte3={blog.Texte3}
                                texte4={blog.Texte4}
                                texte5={blog.Texte5}
                                texte6={blog.Texte6}
                                texte7={blog.Texte7}
                                texte8={blog.Texte8}
                                texte9={blog.Texte9}
                                texte10={blog.Texte10}
                                texte11={blog.Texte11}
                                texte12={blog.Texte12}
                                texte13={blog.Texte13}
                                texte14={blog.Texte14}
                                texte15={blog.Texte15}
                                texte16={blog.Texte16}
                                texte17={blog.Texte17}
                                texte18={blog.Texte18}
                                texte19={blog.Texte19}
                                texte20={blog.Texte20}
                            />
                        )
                    })}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Blog