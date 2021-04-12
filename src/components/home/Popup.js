import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import ReactPlayer from 'react-player'
import Video01 from '../../assets/videos/001.mp4'
import Video02 from '../../assets/videos/002.mp4'

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: '#401902',
    outlineRadius:'10px',
    outline: '4px solid #3cadf3',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 2, 2),
  },
}));



export default function TransitionsModal() {

    const [video]=useState([Video01,Video02]);
    const rand = Math.floor(Math.random()*video.length)
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  // const handleOpen = () => {
  //   setOpen(true);
  // };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
          <ReactPlayer url={video[rand]} type="video/mp4" playing volume={1}/>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
