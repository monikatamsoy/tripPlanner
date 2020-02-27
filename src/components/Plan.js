import React, {useState} from 'react';
import {Button, Modal} from 'react-bootstrap';

const Plan = (props) => {
    
    const {action, onOptionChange} = props;
    const [show, setShow] = useState(true);
  
    const handleClose = () => setShow(false);
    const handleAction = () => onOptionChange('');
    // const handleShow = () => setShow(true);
  
    return (
      <>
  
        <Modal show={show} onHide={handleClose} centered>
          <Modal.Header closeButton onClick={handleAction}>
            <Modal.Title>{action}</Modal.Title>
          </Modal.Header>
          <Modal.Body>PLAN HERE!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => { handleClose(); handleAction();}} >
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