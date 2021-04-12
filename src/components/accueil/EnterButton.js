import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const EnterButton = withStyles((theme) => ({
    root: {
        borderRadius: '9999px',
        fontSize: '20px',
        width: '150px',
        height: '50px',
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
