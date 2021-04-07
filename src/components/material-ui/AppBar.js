import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import Banniere from '../NavBar/Banniere'
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import CssBaseline from '@material-ui/core/CssBaseline';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolbar: {
    minHeight: 128,
    alignItems: 'flex-start',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    alignSelf: 'flex-end',
  },
}));


export default function ProminentAppBar(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
      <AppBar>
        <Toolbar className={classes.toolbar}>
          
          <Typography className={classes.title} variant="h5" noWrap>
            <Banniere/>
          </Typography>

          <IconButton aria-label="display more actions" edge="end" color="inherit">
          <MenuIcon style={{height:'64px',width:'64px',padding:'2px'}} />
          </IconButton>
        </Toolbar>
      </AppBar>
      </HideOnScroll>
      </React.Fragment>
    </div>
  );
}



function HideOnScroll(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

