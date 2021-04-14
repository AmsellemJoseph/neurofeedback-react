import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Jenny from './Jenny'
import Israel from '../../utility/pays/Israel'

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

export default function SimpleAccordion() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary style={{backgroundColor:'#401902'}}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div className='containerCard'>
            <div className='designBackCard'>

             </div>
             <div className='photoCard'><Jenny/></div>
             <div className='Infos'>
             <h4>Jennifer Amsellem</h4>
             <h3>Facilitatrice</h3>
             <h2>David remez 13,Netanya</h2>
             <p><Israel/>Israel</p>
             <div className='contact'>
             <p>WhatsApp</p>
             <p>0548136396</p>
             </div>
             </div>
         </div>
        </AccordionSummary>
        <AccordionDetails style={{borderTop:'1px dotted #3cadf3'}}>
          <Typography>
            Bonjour je m'appelle Jenny!!
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}