import React from 'react';
// import Button from '@material-ui/core/Button';
import {Row,Col, Button} from "react-bootstrap";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import TextField from '@material-ui/core/TextField';
import FroalaEditorComponent from 'react-froala-wysiwyg';
import MaterialUIPickers from './DateTimeComponent';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const titleStyle = {
    color : "#316090",
    textAlign: "left",
    fontWeight: "bold"
    }

  const handleClose = () => {
    setOpen(false);
  };
  const buttonStyle = {
    color:"#316090",
    fontWeight:"bold",
    float:"left", 
    marginBottom:100
    // padding:0
}

const divStyle = {
    minWidth: "1000px"
}

  return (
    <div >
      <Button variant="outline-primary" style={buttonStyle}  onClick={handleClickOpen}>
    POST
      </Button>
      <Dialog   
      style={divStyle}
      minWidth={5000}
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title" style={titleStyle}>{"Post Global Announcement"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <Row>
                <Col>
            <form  noValidate autoComplete="off">
            <TextField id="outlined-basic" style={{margin:10}} label="Announcement Title" variant="outlined" />
            <br/>
            </form>
            </Col>
            <Col>
            <MaterialUIPickers/>
            </Col>
            </Row>
            <FroalaEditorComponent tag='textarea'/>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            CANCEL
          </Button>
          <Button onClick={handleClose} color="primary">
            SUBMIT
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
