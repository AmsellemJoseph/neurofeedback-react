import React from 'react';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { green, purple } from '@material-ui/core/colors';

const EnterButton = withStyles((theme) => ({
    root: {
        borderRadius: '9999px',
        fontSize:'20px',
        width:'150px',
        height:'50px',
        color: '#a7d5f2',
        backgroundColor: '#401902',
        '&:hover': {
            backgroundColor: '#995832',
        },
    },
}))(Button);

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
}));


export default function CustomizedButtons() {
    const classes = useStyles();

    return (
        <div>
            <EnterButton variant="contained" color="primary" className={classes.margin}>
                Entrez
      </EnterButton>
        </div>
    );
}
