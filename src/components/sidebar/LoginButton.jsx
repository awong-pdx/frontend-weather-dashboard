import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import LoginBox from './LoginBox';
import { useTheme } from '../ThemeProvider';

export default function LoginButton({ onLoginToggle }) {
  const { theme } = useTheme();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button
        type="button"
        className={`modal-button btn btn-${theme}`}
        onClick={handleShow}
      >
        Login
      </button>

      <Modal className="dashboard-modal" show={show} onHide={handleClose}>
        <Modal.Body className={`${theme}  modal-body-${theme}`}>
          <LoginBox onLoginToggle={onLoginToggle} handleClose={handleClose} />
        </Modal.Body>
      </Modal>
    </>
  );
}
