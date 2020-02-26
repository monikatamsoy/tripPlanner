import React, {useState} from 'react';
import {Button, Modal} from 'react-bootstrap';

const Plan = (props) => {
    const {action} = props;
    const [show, setShow] = useState(true);
  
    const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
  
    return (
      <>
        {/* <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button> */}
  
        <Modal show={show} onHide={handleClose} >
          <Modal.Header closeButton>
            <Modal.Title>{action}</Modal.Title>
          </Modal.Header>
          <Modal.Body>PLAN HERE!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              CANCEL
            </Button>
            <Button variant="primary" onClick={handleClose}>
              BOOK
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
export default Plan;