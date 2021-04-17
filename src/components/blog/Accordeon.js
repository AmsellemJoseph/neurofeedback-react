import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
const useStyles = makeStyles((theme) => ({
  root: {
    width: '90%',
    margin:'10px auto',
    height:'auto',
    borderRadius:'5px'
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function SimpleAccordion(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary style={{backgroundColor:'#401902',border:'1px solid #3cadf3'}}
          expandIcon={<ExpandMoreIcon style={{color:"#3cadf3"}}/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <h3>{props.titre}</h3>
        </AccordionSummary>
        <AccordionDetails style={{borderTop:'1px dotted #3cadf3',margin:'auto'}}>
          <Typography style={{width:'100%'}}>
            <p>{props.texte}</p>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}