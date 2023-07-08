import  React,{useState} from 'react';
import "./topbar.css"
import {Search,Notifications} from "@mui/icons-material"
import { Modal, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

export default function Topbar(){
    const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleShowII = () => setShow(false);
return(
    <div className="topbarcontainer">
        <div className="topbarLeft">
            <span className="logo">
            <img className="site-logo__img" src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png" alt="DEV Community"/>
            </span>
        </div>
        <div className="topbarcenter">
            <div className='searchbar'>
               <Search className="searchIcon"/>
               <input placeholder='Search...' className="searchinput"/> 
            </div>
        </div>
        <div className="topbarRight">
                        <div className="topbarLinks">
                
                   
            </div>
            <div className="topbarIcons">
            <button className="createPost"> Create Post </button>

                <div className="topbarIconItem">
                <Notifications/>
                <span className="topbarIconBadge">3</span>
                </div>
            </div>
        <div>
            <a onClick={handleShow}>
        <img className="paddingPage" src="data:image/jpeg;base64,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"></img>
      </a>
      <Modal show={show}>
        <Modal.Header closeButton>
          <Modal.Title>Login Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <></>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleShowII}>Close Modal</Button>
        </Modal.Footer>
      </Modal>
      </div>
        </div>
    </div>
)

}