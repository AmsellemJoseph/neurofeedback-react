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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const useStyles = makeStyles((theme) => ({
  divider: {
    background: '#a7d5f2',
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
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
      titre: 'Retrouvez nous dans la presse.',
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
      <List>
        <Typography className='wellBar'>
          Wellness Natanya
        </Typography>
        <Divider classes={{ root: classes.divider }} />
        <Link style={{ textDecoration: 'none', color: '#a7d5f2' }} to='/home'>
          <ListItem button key={'Accueil'}>
            <ListItemIcon><FontAwesomeIcon icon={['fas', 'home']} /></ListItemIcon>
            <ListItemText primary='Accueil' />
          </ListItem>
        </Link>

      </List>

      <Divider classes={{ root: classes.divider }} />

      <List>
        {lienSite.map((lien, i) => {
          return (
            <Link key={i} style={{ textDecoration: 'none', color: '#a7d5f2' }} to={lien.link}>
              <ListItem button key={lien.titre}>
                <ListItemIcon><FontAwesomeIcon icon={['fas', lien.font]} /></ListItemIcon>
                <ListItemText primary={lien.titre} />
              </ListItem>
            </Link>
          )

        })}
      </List>

      
      <Divider classes={{ root: classes.divider }} />

      <List>
        <Link style={{ textDecoration: 'none', color: '#a7d5f2' }} to='/contact'>
          <ListItem button key={'Contact'}>
            <ListItemIcon><FontAwesomeIcon icon={['fas', 'address-book']} /></ListItemIcon>
            <ListItemText primary='Contact' />
          </ListItem>
        </Link>
      </List>
    </div>
  );




  return (
    <div className={classes.root}>
      <React.Fragment key={'right'}>
        <AppBar position="static">
          <Toolbar>

            <Typography variant="h6" className={classes.title}>
              <Logo classes={{ root: classes.logoNav }} />
            </Typography>
            <Typography variant="h6" className={classes.title}>
              <Banniere />
            </Typography>
            <IconButton onClick={toggleDrawer('right', true)} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Drawer anchor={'right'} open={state['right']} onClose={toggleDrawer('right', false)}>
              {list('right')}
            </Drawer>
          </Toolbar>
        </AppBar>
      </React.Fragment>
    </div>
  );
}
