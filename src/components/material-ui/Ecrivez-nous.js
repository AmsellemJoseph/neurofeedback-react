import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const envoyer = (e)=>{
    e.preventDefault();
    setOpen(false)
  }

  return (
    <div className='ecrivez'>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
      <FontAwesomeIcon icon={['fas', 'comments']} style={{ textDecoration: 'none', color: '#11468c' ,fontSize:'30px'}} />
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title"><FontAwesomeIcon icon={['fas', 'Envelope']} style={{ textDecoration: 'none', color: '#bfb3a3' }} /></DialogTitle>
          <div onSubmit={envoyer}>
        <DialogContent>
          <DialogContentText style={{color:'#11468c',fontSize:'20px',textAlign:'center',marginTop:'-25px',marginBottom:'20px'}}>
            Pour plus d'informations, contactez nous
          </DialogContentText>
          <DialogContentText className='dialog' style={{textAlign:'center',margin:'10px 0'}}>
          <a href='https://wa.me/+972548136396' target='_blank' rel="noreferrer">Par whatsapp</a>
          </DialogContentText>
          <DialogContentText className='dialog' style={{textAlign:'center',margin:'10px 0'}}>
          <a href='tel:+972548136396'>Par téléphone</a>
          </DialogContentText>
          
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Annuler
          </Button>
          {/* <Button type='submit' onClick={handleClose} color="primary">
            Envoyer
          </Button> */}
        </DialogActions>
        </div>
      </Dialog>
    </div>
  );
}
