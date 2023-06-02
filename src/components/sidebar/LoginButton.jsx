import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import LoginBox from './LoginBox';

export default function LoginButton({ onLoginToggle }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button type="button" onClick={handleShow}>
        Login
      </button>

      <Modal className="my-modal" show={show} onHide={handleClose}>
        {/* <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header> */}
        <Modal.Body>
          <LoginBox onLoginToggle={onLoginToggle} handleClose={handleClose} />
        </Modal.Body>
        {/* <Modal.Footer>
          <button type="button" onClick={handleClose}>
            Close
          </button>
          <button type="button" onClick={handleClose}>
            Save Changes
          </button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
}
