import React, { useState, Component } from "react";
import { Button, Modal, Form } from "react-bootstrap/";
import "../PhotoModal/PhotoModal.css";
import axios from "axios";
import { Alert } from "reactstrap";
import api from "../../utils/Api.js"

class PhotoModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null,
      show: null,
    };
  }
  // console.log(this.state);
  handleClose = () => {
    this.setState({ show: false });
  };
  handleShow = () => {
    this.setState({ show: true });
  };

  Upload(data) {
    axios
      .post({
        url: "/upload",
        data: data,
      })
      .then(console.log(data));
  }

  onChangeHandler = (event) => {
    var file = event.target.files[0];
    console.log(file);
    this.setState({
      selectedFile: file,
    });

    // console.log(this.validateSize(event));
    // if(this.validateSize(event)){
    //   console.log(file);
    // if return true allow to setState
    //    this.setState({
    //     selectedFile: file
    //     });

    //   }
  };
  fileUploadHandler = () => {
    const data = new FormData();
    console.log(this.state.selectedFile);
    data.append("file", this.state.selectedFile);
    console.log(data);
    axios
      .post("/api/upload", data)
      .then((res) => {
        // then print response status
        alert("upload success");
      })
      .catch((err) => {
        // then print response status
        alert("upload fail");
        console.log(err);
      });

  };

  render() {
    return (
      <>
        <Button
          variant="secondary"
          onClick={this.handleShow}
          className="PhotoBtn"
        >
          Add
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Upload a Photo</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group>
                <Form.File
                  bsCustomPrefix="custom-file-label"
                  id="exampleFormControlFile1"
                  label="Example file input"
                  onChange={this.onChangeHandler}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="secondary" onClick={this.fileUploadHandler}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default PhotoModal;
