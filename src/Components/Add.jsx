import React, { useState } from 'react'
import { Button, FloatingLabel, Modal,Form } from 'react-bootstrap';
import {uploadVideoAPI} from '../Services/allAPI'


function Add({setUploadVideoResponse}) {

  const [uploadVideo,setUploadVideo] =useState ({
    id:"",caption:"",url:"",link:""
  })
console.log(uploadVideo);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

const getYoutubeLink = (e)=>{
  const {value} = e.target
  if (value.includes("v=")){
    let vID=value.split("v=")[1].slice(0,11)
    console.log(`https://www.youtube.com/embed/${vID}`);
    setUploadVideo({...uploadVideo,link:`https://www.youtube.com/embed/${vID}`})
  }else{
    setUploadVideo({...uploadVideo,link:""})
  }
}

const handleUpload = async () => {
    const { id, caption, url, link } = uploadVideo;
  
    console.log("id:", id);
    console.log("caption:", caption);
    console.log("url:", url);
    console.log("link:", link);
  
    if (!id || !caption || !url || !link) {
      alert("Please fill empty fields");
    } else {
      try {
        const result = await uploadVideoAPI(uploadVideo);
        console.log(result);
  
        if (result.status >= 200 && result.status < 300) {
          // success
          handleClose();
          // reset input fields
          setUploadVideo({
            id: "",
            caption: "",
            url: "",
            link: ""
          });
          setUploadVideoResponse(result.data);
        } else {
          alert(result.message);
        }
      } catch (error) {
        console.error("Error uploading video:", error);
        alert("An error occurred during upload. Please try again.");
      }
    }
  };
  

// const handleUpload = async ()=>{
//   const {id,caption,url,link}=uploadVideo
//   if( !id || !caption || !url || !link){
//     alert ("please fill empty fields")
//   } else{
//     const result = await uploadVideoAPI(uploadVideo)
//     console.log(result);
//     if(result.status>200 && result.status<300){
//       // success
//       handleClose()
//       // reset input fields
//       setUploadVideo({
//         id:"",caption:"",url:"",link:""
//       })
//       setUploadVideoResponse(result.data)
//     }else{
//       alert(result.message)
//     }
//   }
// }

// https://www.youtube.com/watch?v=YykjpeuMNEk
// https://www.youtube.com/embed/YykjpeuMNEk
  return (
    <>
    
    <div className="d-flex align-items-center">
<h5>Upload Videos</h5>
<button className='btn' onClick={handleShow} style={{color:'red'}}><i class="fa-solid fa-arrow-up-from-bracket fa-fade fa-1x mb-3"></i></button>
    </div>
    
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Upload Videos </Modal.Title>
        </Modal.Header>
        <Modal.Body>

         <FloatingLabel
        controlId="floatingInput"
        label="Enter Video Id "
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Enter Video Id" onChange={e=>setUploadVideo({...uploadVideo,id:e.target.value})} />
      </FloatingLabel>
      
      <FloatingLabel
        controlId="floatingInput"
        label="Enter Video Title "
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Enter Video Title" onChange={e=>setUploadVideo({...uploadVideo,caption:e.target.value})}/>
      </FloatingLabel>
         <FloatingLabel
        controlId="floatingInput"
        label="Enter ImagE URL  "
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Enter ImagE URL" onChange={e=>setUploadVideo({...uploadVideo,url:e.target.value})} />
      </FloatingLabel>
      
      <FloatingLabel
        controlId="floatingInput"
        label="Enter Video URL "
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Enter Video URL" onChange={getYoutubeLink}/>
      </FloatingLabel>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleUpload} variant="primary">Upload</Button>
        </Modal.Footer>
      </Modal>
    
    </>
  )
}

export default Add