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
    borderRadius:'5px',
  },
  head:{
    display:'flex',
    justifyContent:'space-between',
    background: '#11468c',
    color:'#bfb3a3',
    alignItems:'center'
  },
  head2:{
    display:'flex',
    justifyContent:'space-between',
    background: '#e5ded5',
    color:'#11468c',
    alignItems:'center'
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
        <AccordionSummary classes={{ root: classes.head }} 
          expandIcon={<ExpandMoreIcon style={{color:"#bfb3a3"}}/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <h3>{props.titre}</h3>
        </AccordionSummary>
        <AccordionDetails classes={{ root: classes.head2 }} style={{borderTop:'1px dotted #bfb3a3',margin:'auto'}}>
          <Typography style={{width:'100%'}}>
            <p>{props.texte1}</p>
            <p>{props.texte2}</p>
            <p>{props.texte3}</p>
            <p>{props.texte4}</p>
            <p>{props.texte5}</p>
            <p>{props.texte6}</p>
            <p>{props.texte7}</p>
            <p>{props.texte8}</p>
            <p>{props.texte9}</p>
            <p>{props.texte10}</p>
            <p>{props.texte11}</p>
            <p>{props.texte12}</p>
            <p>{props.texte13}</p>
            <p>{props.texte14}</p>
            <p>{props.texte15}</p>
            <p>{props.texte16}</p>
            <p>{props.texte17}</p>
            <p>{props.texte18}</p>
            <p>{props.texte19}</p>
            <p>{props.texte20}</p>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}