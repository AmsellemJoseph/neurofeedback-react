import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom'
import Banniere from '../NavBar/Banniere'
import Logo from '../NavBar/LogoNavBar'
import LogoRepre from '../NavBar/LogoRepre'
import LogoFacil from '../NavBar/LogoFacil'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const useStyles = makeStyles((theme) => ({
  divider: {
    background: '#bfb3a3',
    color:'#bfb3a3'
  },
  nav:{
    background:'#11468c',
  },
  list: {
    width: 250,
    background: '#11468c',
    color:'#bfb3a3'
  },
  fullList: {
    width: 'auto',
    background: '#11468c',
    color:'#bfb3a3'
  },
  root: {
    flexGrow: 1,
    background: '#11468c',
    color:'#bfb3a3'
  },
  menuButton: {
    marginRight: theme.spacing(2),
    // background: '#11468c',
    color:'#bfb3a3'
  },
  title: {
    flexGrow: 1,
    display:'flex',
    background: '#11468c',
    
  },
  logoNav:{
    marginRight:'15px',
    paddingRight:'20px',
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();


  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const [lienSite] = useState([
    {
      font: 'leaf',
      titre: 'La méthode',
      link: '/methode',
    },
    {
      font: 'users',
      titre: 'Vos Wellness Providers',
      link: '/wellness',
    },
    {
      font: 'newspaper',
      titre: 'Retrouvez nous dans la presse',
      link: '/news',
    },
    {
      font: 'video',
      titre: 'Nos vidéos',
      link: '/video',
    },
    {
      font: 'chalkboard-teacher',
      titre: "S'équiper et se former",
      link: '/formation',
    },
    {
      font: 'rss',
      titre: 'Blog',
      link: '/blog',
    },
    {
      font: 'images',
      titre: 'Galerie',
      link: '/galerie',
    },
  ]);

  const list = (anchor) => (
    <div 
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List classes={{ root: classes.nav }}>
        <Typography className='wellBar' classes={{ root: classes.nav }} >
          Wellness Natanya
        </Typography>
        <Divider classes={{ root: classes.divider }} />
        <Link style={{ textDecoration: 'none', color: '#bfb3a3' }} to='/home' >
          <ListItem button key={'Accueil'}>
            <ListItemIcon><FontAwesomeIcon icon={['fas', 'home']} style={{ textDecoration: 'none', color: '#bfb3a3' }} /></ListItemIcon>
            <ListItemText primary='Accueil' />
          </ListItem>
        </Link>
      </List>

      <Divider classes={{ root: classes.divider }} />

      <List classes={{ root: classes.nav }}>
        {lienSite.map((lien, i) => {
          return (
            <Link key={i} style={{ textDecoration: 'none', color: '#bfb3a3' }} to={lien.link}>
              <ListItem button key={lien.titre}>
                <ListItemIcon><FontAwesomeIcon icon={['fas', lien.font]} style={{ textDecoration: 'none', color: '#bfb3a3' }} /></ListItemIcon>
                <ListItemText primary={lien.titre} />
              </ListItem>
            </Link>
          )

        })}
      </List>

      
      <Divider classes={{ root: classes.divider }} />

      <List classes={{ root: classes.nav }}>
        <Link style={{ textDecoration: 'none', color: '#bfb3a3' }} to='/contact'>
          <ListItem button key={'Contact'}>
            <ListItemIcon><FontAwesomeIcon icon={['fas', 'address-book']} style={{ textDecoration: 'none', color: '#bfb3a3' }} /></ListItemIcon>
            <ListItemText primary='Contact' />
          </ListItem>
        </Link>
      </List>
      <List classes={{ root: classes.nav }}>
      </List>
      <List classes={{ root: classes.nav }}>
      </List>
      <List classes={{ root: classes.nav }}>
      </List>
      <List classes={{ root: classes.nav }}>
      </List>
      <List classes={{ root: classes.nav }}>
      </List>
      <List classes={{ root: classes.nav }}>
      </List>
      <List classes={{ root: classes.nav }}>
      </List>
      <List classes={{ root: classes.nav }}>
      </List>
      <List classes={{ root: classes.nav }}>
      </List>
      <List classes={{ root: classes.nav }}>
      </List>
      <List classes={{ root: classes.nav }}>
      </List>
      <List classes={{ root: classes.nav }}>
      </List>
      <List classes={{ root: classes.nav }}>
      </List>
      <List classes={{ root: classes.nav }}>
      </List>
      <List classes={{ root: classes.nav }}>
      </List>
      <List classes={{ root: classes.nav }}>
      </List>
      <List classes={{ root: classes.nav }}>
      </List>
      <List classes={{ root: classes.nav }}>
      </List>
      <List classes={{ root: classes.nav }}>
      </List>
      <List classes={{ root: classes.nav }}>
      </List>
      <List classes={{ root: classes.nav }}>
      </List>
      <List classes={{ root: classes.nav }}>
      </List>
      <List classes={{ root: classes.nav }}>
      </List>
      <List classes={{ root: classes.nav }}>
      </List>
    </div>
  );




  return (
    <div className={classes.root}>
      <React.Fragment key={'right'} >
        <AppBar position="static" classes={{ root: classes.nav }}>
          <Toolbar >

            <Typography variant="h6" className={classes.title}>
              <Logo classesName={classes.logoNav } />
              {/* <LogoRepre classesName={classes.logoNav } />
              <LogoFacil classesName={classes.logoNav } /> */}
            </Typography>
            <Typography variant="h6" className={classes.title}>
              <Banniere />
            </Typography>
            <IconButton onClick={toggleDrawer('right', true)} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Drawer anchor={'right'} open={state['right']} onClose={toggleDrawer('right', false)} className={classes.menuButton}>
              {list('right')}
            </Drawer>
          </Toolbar>
        </AppBar>
      </React.Fragment>
    </div>
  );
}
