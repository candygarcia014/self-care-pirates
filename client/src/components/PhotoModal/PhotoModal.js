import React,{useState}  from 'react'
import {Button, Modal, Form} from 'react-bootstrap/';
import '../PhotoModal/PhotoModal.css'


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

  Upload() {
    const data = new FormData();
    console.log(this.state.selectedFile);
    data.append("file", this.state.selectedFile);
    const userId = decode(localStorage.getItem("token"));
    console.log(data)
    console.log(userId.id)
    api.uploadPhoto(data, userId.id).then(x => console.log(x))
          .catch((err) => {
        // then print response status
        alert("upload fail");
        console.log(err);
      });
      
    // axios
    //   .post({
    //     url: "/upload/" + userId.id.toString(),
    //     data: data,
    //   })
    //   .then(console.log(data))
    //   .catch((err) => {
    //     // then print response status
    //     alert("upload fail");
    //     console.log(err);
    //   });
  }

  onChangeHandler = (event) => {
    var file = event.target.files[0];
    console.log(file);
    this.setState({
      selectedFile: file,
    });


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
                    <Form.File id="exampleFormControlFile1" label="Example file input" />
                </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="secondary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}}

  
  export default PhotoModal