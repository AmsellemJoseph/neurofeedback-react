import React from 'react';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { green, purple } from '@material-ui/core/colors';

const EnterButton = withStyles((theme) => ({
    root: {
        borderRadius: '9999px',
        width:'180px',
        height:'100px',
        color: theme.palette.getContrastText(purple[500]),
        backgroundColor: purple[500],
        '&:hover': {
            backgroundColor: purple[700],
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
                Custom CSS
      </EnterButton>
        </div>
    );
}
