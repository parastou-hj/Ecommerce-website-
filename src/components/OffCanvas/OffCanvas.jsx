import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import '../OffCanvas/offCanvas.css'

function OffCanvasExample({ placement,setShow,show }) {
 
  const handleClose = () => setShow(false);


  return (
    <>
      <Offcanvas show={show} onHide={handleClose} placement={placement} >
        <Offcanvas.Body>
            hi
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
export default OffCanvasExample;