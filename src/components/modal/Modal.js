import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

function getModalStyle() {
  const top = 50 ;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: "fitContent",
    height:"80%",
    color:"white",
    overflow:'scroll',
    background: "#00000",
    background: "-webkit-linear-gradient(to right, #000000, #434343)",
    background: "linear-gradient(to right, #000000, #434343)", 
    // background: "#bdc3c7",
    // background: "-webkit-linear-gradient(to right, #2c3e50, #bdc3c7)",  
    // background: "linear-gradient(to right, #2c3e50, #bdc3c7)", 
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  image:{
      width:"100%", 
      height:"300px",
      borderRadius:"10px",
      marginTop:"10%",
      marginBottom:"5%"
  }
}));

export default function SimpleModal({data,openModal,setOpenModal}) {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);

  const handleClose = () => {
    setOpenModal(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">{data?.title}</h2>
      <img className={classes.image} alt="mission" src={data?.imageLink}></img>
      <p id="simple-modal-description">
        {data?.description}
      </p>
    </div>
  );

  return (
    <div>
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
