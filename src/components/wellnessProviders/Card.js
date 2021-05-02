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
        <AccordionSummary style={{backgroundColor:'#bfb3a3'}}
          expandIcon={<ExpandMoreIcon style={{color:"#11468c"}}/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div className='containerCard'>
            <div className='designBackCard'>

             </div>
             <div className='photoCard'><img src={props.photo} alt='Photo de profil du wellness provider'/></div>
             <div className='Infos'>
             <h4>{props.nom}</h4>
             <h3>{props.status}</h3>
             <h2>{props.adresse}</h2>
             <p><img src={props.drapeau} alt='drapeau du pays'/> {props.pays}</p>
             <div className='contact'>
             {props.whatsapp?(<p><a style={{cursor:'pointer',color:"#11468c"}} href={props.whatsapp} target='_blank' rel="noreferrer">Whattsapp</a></p>):null}
             <p><a style={{cursor:'pointer',color:"#11468c"}} href={props.tel}>{props.telAffiche}</a></p>
             </div>
             </div>
         </div>
        </AccordionSummary>
        <AccordionDetails style={{borderTop:'1px dotted #11468c',background:'#bfb3a3',margin:'auto'}}>
          <Typography style={{width:'100%'}}>
            <div className='cardDetails'>
            <h2 style={{textAlign:'center'}}>Mon histoire</h2>
            <p>{props.description1}</p>
            <p>{props.description2}</p>
            <p>{props.description3}</p>
            <p>{props.description4}</p>
            <p>{props.description5}</p>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}