import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap/";
import "../PhotoModal/PhotoModal.css";
import axios from "axios";

function Upload(data) {
  axios.post ( {
      url: "/upload",
      data:data,
  })
  .then (console.log(data))
  // $.ajax({
  //   type: "POST",
  //   enctype: "multipart/form-data", // IMPORTANT!!!
  // 
  //   data: data,
  //   processData: false,
  //   contentType: false,
  //   cache: false,
  //   timeout: 600000,
  //   success: function (response) {
  //     // celebrate a bit; the upload succeeded!
  //     alert("Success!!!");

  //     // the back-end sends an object containing the AWS url for the newly-uploaded
  //     // file and any additional data sent from the front-end via our AJAX post
  //     console.log(response);

  //     // clear out the form fields for next upload
  //     $("#uploadForm")[0].reset();
  //   },
  //   error: function (err) {
  //     console.log(err);
  //   },
  // });
}

function PhotoModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="secondary" onClick={handleShow} className="PhotoBtn">
        Add
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Upload a Photo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.File
                bsCustomPrefix='custom-file-label'
                id="exampleFormControlFile1"
                label="Example file input"
                onChange = {photo => Upload(photo)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="secondary" onClick={() => Upload()}>
          
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PhotoModal;
