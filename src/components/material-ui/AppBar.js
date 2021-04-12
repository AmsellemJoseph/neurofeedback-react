// import React from 'react';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
// import { makeStyles, useTheme } from '@material-ui/core/styles';
// import MenuIcon from '@material-ui/icons/Menu';
// import Banniere from '../NavBar/Banniere'
// import useScrollTrigger from '@material-ui/core/useScrollTrigger';
// import Slide from '@material-ui/core/Slide';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import clsx from 'clsx';
// import Drawer from '@material-ui/core/Drawer';
// import List from '@material-ui/core/List';
// import Divider from '@material-ui/core/Divider';
// import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
// import ChevronRightIcon from '@material-ui/icons/ChevronRight';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import HomeIcon from '@material-ui/icons/Home';
// import { Link } from 'react-router-dom'
// import ContactPhoneIcon from '@material-ui/icons/ContactPhone';

// const drawerWidth = 240;


// const useStyles = makeStyles((theme) => ({
//   list: {
//     width: 250,
//   },
  // divider: {
  //   background: '#a7d5f2',
  // },
//   chevron: {
//     color: '#a7d5f2',
//   },
//   fullList: {
//     width: 'auto',
//   },
//   root: {
//     display: 'flex',
//     flexGrow: 1,
//   },
//   appBar: {
//     transition: theme.transitions.create(['margin', 'width'], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//   },
//   appBarShift: {
//     width: `calc(100% - ${drawerWidth}px)`,
//     marginLeft: drawerWidth,
//     transition: theme.transitions.create(['margin', 'width'], {
//       easing: theme.transitions.easing.easeOut,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   toolbar: {
//     minHeight: 110,
//     alignItems: 'flex-start',
//     paddingTop: theme.spacing(1),
//     paddingBottom: theme.spacing(2),
//   },
//   title: {
//     flexGrow: 1,
//     alignSelf: 'flex-end',
//   },
//   hide: {
//     display: 'none',
//   },
//   drawer: {
//     width: drawerWidth,
//     flexShrink: 0,
//   },
//   drawerPaper: {
//     width: drawerWidth,
//   },
//   drawerHeader: {
//     display: 'flex',
//     alignItems: 'center',
//     padding: theme.spacing(0, 1),
//     // necessary for content to be below app bar
//     ...theme.mixins.toolbar,
//     justifyContent: 'flex-end',
//   },
//   content: {
//     flexGrow: 1,
//     padding: theme.spacing(3),
//     transition: theme.transitions.create('margin', {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//     marginLeft: -drawerWidth,
//   },
//   contentShift: {
//     transition: theme.transitions.create('margin', {
//       easing: theme.transitions.easing.easeOut,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//     marginLeft: 0,
//   },
// }));




// export default function ProminentAppBar(props) {

//   const classes = useStyles();

//   const theme = useTheme();
//   const [open, setOpen] = React.useState(false);

//   const handleDrawerOpen = () => {
//     setOpen(true);
//   };

//   const handleDrawerClose = () => {
//     setOpen(false);
//   };


//   return (
//     <div className={classes.root}>
//       <React.Fragment>
//         <CssBaseline />
//         <AppBar>
//           <Toolbar className={classes.toolbar}>
//             <Typography className={classes.title} variant="h5" noWrap>
//               <Banniere />
//             </Typography>
//             <IconButton
//               onClick={handleDrawerOpen}
//               className={clsx(classes.menuButton, open && classes.hide)}
//               aria-label="display more actions" edge="end" color="inherit">
//               <MenuIcon style={{ height: '40px', width: '40px', margin: '-30px' }} />
//             </IconButton >
//           </Toolbar>
//         </AppBar>
//       </React.Fragment>
//       <Drawer
//         className={classes.drawer}
//         variant="persistent"
//         anchor="right"
//         open={open}
//         classes={{
//           paper: classes.drawerPaper,
//         }}
//       >
//         <div className={classes.drawerHeader}>
//           <IconButton onClick={handleDrawerClose}>
//             {theme.direction === 'ltr' ? <ChevronRightIcon classes={{ root: classes.chevron }} /> : <ChevronRightIcon classes={{ root: classes.chevron }} />}
//           </IconButton>
//         </div>
//         <Divider classes={{ root: classes.divider }} />
//         <List>

//           <Link style={{ textDecoration: 'none', color: '#a7d5f2' }} to='/accueil'>
//             <ListItem button key={'Accueil'}>
//               <ListItemIcon><HomeIcon /></ListItemIcon>
//               <ListItemText primary='Accueil' />
//             </ListItem>
//           </Link>

//         </List>
//         <div className='divider'>
//           <Divider classes={{ root: classes.divider }} />
//         </div>
//         <List>
//           <Link style={{ textDecoration: 'none', color: '#a7d5f2' }} to='/contact'>
//             <ListItem button key={'Contact'}>
//               <ListItemIcon><ContactPhoneIcon /></ListItemIcon>
//               <ListItemText primary='Contact' />
//             </ListItem>
//           </Link>
//         </List>
//       </Drawer>
//       <main
//         className={clsx(classes.content, {
//           [classes.contentShift]: open,
//         })}
//       >
//         <div className={classes.drawerHeader} />
//       </main>

//     </div>
//   );
// }



// function HideOnScroll(props) {
//   const { children, window } = props;

//   const trigger = useScrollTrigger({ target: window ? window() : undefined });

//   return (
//     <Slide appear={false} direction="down" in={!trigger}>
//       {children}
//     </Slide>
//   );
// }

import React from 'react';
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
import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom'
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import Banniere from '../NavBar/Banniere'
import Logo from '../NavBar/LogoNavBar'



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
           <Link style={{ textDecoration: 'none', color: '#a7d5f2' }} to='/accueil'>
             <ListItem button key={'Accueil'}>
               <ListItemIcon><HomeIcon /></ListItemIcon>
               <ListItemText primary='Accueil' />
             </ListItem>
           </Link>

         </List>
         <div className='divider'>
           <Divider classes={{ root: classes.divider }} />
         </div>
         <List>
           <Link style={{ textDecoration: 'none', color: '#a7d5f2' }} to='/contact'>
             <ListItem button key={'Contact'}>
               <ListItemIcon><ContactPhoneIcon /></ListItemIcon>
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
            <Logo classes={{ root: classes.logoNav }}/>
          </Typography>
          <Typography variant="h6" className={classes.title}>
            <Banniere/>
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
