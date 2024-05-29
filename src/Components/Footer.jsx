import React from 'react'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div style={{height:'300px'}} className='d-flex justify-content-center align-items-center w-100 flex-column'>
    <div className='d-flex justify-content-evenly align-items-center w-100'>
   <div className='websites' style={{width:'400px'}}>
<h4 className='mb-3'>
<i class="fa-solid fa-video text-warning me-3"></i>
Video Player
</h4>
<h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius nihil magnam corporis non obcaecati rem, quidem quis accusantium! In cumque repellendus necessitatibus voluptatibus dolore consequatur voluptate et asperiores reiciendis repellat?</h6>

   </div>
   <div className='links d-flex flex-column'>
            <h5>Links</h5>
            <Link to={'/'} style={{textDecoration:'none',color:'black'}}>Landing Page</Link>
            <Link to={'/home'} style={{textDecoration:'none',color:'black'}}>Home</Link>
            <Link to={'/watch'} style={{textDecoration:'none',color:'black'}}>Watch history</Link>
        </div>
        <div className='guides d-flex flex-column'>
            <h5>Guides</h5>
            <a href=""target='blank' style={{textDecoration:'none',color:'black'}}>React Routing</a>
            <a href=""target='blank' style={{textDecoration:'none',color:'black'}}>React js</a>
            <a href=""target='blank' style={{textDecoration:'none',color:'black'}}>React Bootstrap</a>

        </div>
        <div className='contact'>
            <h5>Contact Us</h5>
            <input type="text" placeholder='search' />
            <div className='icon d-flex mt-2' >
            <i style={{marginLeft:'10px'}} className="fa-brands fa-facebook"></i>
            <i style={{marginLeft:'10px'}} className="fa-brands fa-instagram"></i>
            <i style={{marginLeft:'10px'}} className="fa-brands fa-x-twitter"></i>
            <i style={{marginLeft:'10px'}} className="fa-brands fa-linkedin-in"></i>
            </div>
        </div>




   {/* <div className='links d-flex flex-column'>
<h4 className='mb-3'>Links</h4>
<Link to={'/'} style={{textDecoration:'none',color:'white'}}>Landing Page</Link>
<Link to={'/home'} style={{textDecoration:'none',color:'white'}}>Home Page</Link>
<Link to={'/watchHistory'} style={{textDecoration:'none',color:'white'}}>Watch History</Link>
   </div>
<div className="guides d-flex flex-column">
<h4 className='mb-3'>Guides</h4>
<Link to={'https://bootswatch.com/'} style={{textDecoration:'none',color:'white'}}>React</Link>
<Link to={'https://react-bootstrap.netlify.app/docs/getting-started/introduction'} style={{textDecoration:'none',color:'white'}}>React Bootstrap</Link>
<Link to={'https://bootswatch.com/'} style={{textDecoration:'none',color:'white'}}>Bootawatch</Link>
</div>
<div className="contacts d-flex flex-column">
<h4 className='mb-3'>Contact Us</h4>
<div className='d-flex mb-2'>
<input type="text" className='form-control' placeholder='Enter your Email Id' />
<button className='btn btn-warning ms-2'>Subscribe</button>
</div>
<div className='d-flex justify-content-evenly align-items-center'>
<Link to={'/'} style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-instagram fa-2x"></i></Link>
<Link to={'/home'} style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-twitter fa-2x"></i></Link>
<Link to={'/watchHistory'} style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-linkedin fa-2x"></i></Link>
<Link to={'/watchHistory'} style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-facebook fa-2x"></i></Link>
</div>
</div> */}




    </div>
    <div className='mb-5 me-3 align-items-center'>
  <p>copyright</p>
</div>
</div>

  )
}

export default Footer