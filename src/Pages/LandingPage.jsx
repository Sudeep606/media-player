import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function LandingPage() {
  return (
    <>
    <Row className='mt-5 align-items-center justify-content-between w-100'>
      <Col></Col>
      <Col lg={5}>
        <h1 style={{textAlign:"justify"}}>Welcome To <span className='text-danger'> Media-Player</span></h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita excepturi deleniti nemo alias. Dignissimos modi doloremque impedit ipsam corrupti dolores nostrum. Voluptatibus unde sit possimus tempora voluptas officiis a distinctio?</p>
      <Link to={'./home'} className='btn btn-info mt-4'>Get Started</Link>
      </Col> 
      <Col lg={5}>
        <img src="https://media1.tenor.com/m/lhlDEs5fNNEAAAAC/music-beat.gif" style={{height:'500px', width:'500px'}} alt="" />
      </Col>
      <Col></Col>
    </Row>

<div className="container mb-5 mt-5 d-flex justify-content-center align-items-center flex-column">
  <h3>Features</h3>
  <div className="cards mb-5 mt-5 d-flex align-items-center justify-content-between w-100">
  
  <Card style={{ width: '22rem' }} className='p-5 bg-info'>
      <Card.Img variant="top" width={'300px'} height={'300px'} src="https://i.gifer.com/YeCp.gif" />
      <Card.Body>
        <Card.Title className='text-danger'>Managing Videos</Card.Title>
        <Card.Text className='text-dark' >
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '22rem' }} className='p-5 bg-info'>
      <Card.Img variant="top"  width={'300px'} height={'300px'} src="https://i.pinimg.com/originals/62/0c/5a/620c5a819f8b8fa2a75575edf1d155ec.gif" />
      <Card.Body>
        <Card.Title className='text-danger'>Categorized Videos</Card.Title>
        <Card.Text className='text-dark'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '22rem' }} className='p-5 bg-info'>
      <Card.Img variant="top"  width={'300px'} height={'300px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP5cVVRzVj57ocrH1bBXdpUKeBncixUuS1dorYHmoZ-F_96Y96FeKsC8bBnhNvRNf3QvA&usqp=CAU" />
      <Card.Body>
        <Card.Title className='text-danger'>Watch History</Card.Title>
        <Card.Text className='text-dark'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  </div>
</div>

<div className="container p-5 border rounded border-light mb-5 mt-5 d-flex align-items-center justify-content-between w-100">
  <div className="col-lg-5">
<h3 className='text-warning'>Simple,Powerful & Fast</h3>
<h6 className='mb-5'> <span className='text-warning fs-5 fw-bolder'>Play Everything</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem voluptate, odio iure architecto, dolorum libero similique blanditiis repellat ratione, dolore ipsam ut fuga perspiciatis soluta! Alias iste corrupti quisquam distinctio.</h6>
<h6 className='mb-5'> <span className='text-warning fs-5 fw-bolder'> Categorized Videos</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem voluptate, odio iure architecto, dolorum libero similique blanditiis repellat ratione, dolore ipsam ut fuga perspiciatis soluta! Alias iste corrupti quisquam distinctio.</h6>
<h6 className='mb-5'> <span className='text-warning fs-5 fw-bolder'> Managing History</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem voluptate, odio iure architecto, dolorum libero similique blanditiis repellat ratione, dolore ipsam ut fuga perspiciatis soluta! Alias iste corrupti quisquam distinctio.</h6>

  </div>
  <div className="col-lg-5">
  <iframe width="100%" height="350px" src="https://www.youtube.com/embed/xrW52jF_uKA" title="MOKKA | Part 1 of 2| Karikku | Comedy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  </div>
</div>

    </>
  )
}

export default LandingPage