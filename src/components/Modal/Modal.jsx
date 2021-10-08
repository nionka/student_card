import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

const ModalUser = ({ show, handleClose }) => {
  return ( 
    <Modal show={show} onHide={handleClose}>
      <Modal.Body>Обновлено!</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Закрыть
        </Button>
      </Modal.Footer>
    </Modal>
   );
}

ModalUser.propTypes = {
  show: PropTypes.bool,
  handleClose: PropTypes.func
};
 
export default ModalUser;