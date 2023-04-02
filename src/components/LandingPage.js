import React from 'react'
import './LandingPage.css'
function LandingPage() {
  return (<>
    <h1 style={{textAlign:'center',letterSpacing:1,textTransform:'uppercase',color:'crimson',position:'fixed',left:'40px'}}>S n e a k e r M a n i a
    </h1>
    <img src={require('./img11.jpg')} alt="" style={{width:100,rotate:'180',position:'fixed',left:'90%'}} ></img>
    <div className='cart' >
        <div className='img-container'>
        <img src={require('./img6.png')} alt=""  style={{width:350}} ></img>
        </div>
        <div className='text-container'>
        <span>
            Nike Air Jordan  
        </span> 
        <br></br>
        <p>
        The iconic Nike Air Zoom Pegasus 36 offers more cooling and mesh that targets breathability across high-heat areas. A slimmer heel collar and tongue reduce bulk, while exposed cables give you a snug fit at higher speeds.
        </p>
        </div>
        <div className='btn-container'>
        <span>
            $100.00
        </span>
        <button>Add to cart</button>
    </div>
    <div className='img-container img-container2 '>
        <img src={require('./img3.png')} alt=""  style={{width:400}} ></img>
        </div>
        <div className='text-container'>
        <span>
            Nike Air Jordan  
        </span> 
        <br></br>
        <p>
        The iconic Nike Air Zoom Pegasus 36 offers more cooling and mesh that targets breathability across high-heat areas. A slimmer heel collar and tongue reduce bulk, while exposed cables give you a snug fit at higher speeds.
        </p>
        </div>
        <div className='btn-container'>
        <span>
            $100.00
        </span>
        <button>Add to cart</button>
    </div>
    <div className='img-container img-container3'>
        <img src={require('./img4.png')} alt="" style={{width:400}} ></img>
        </div>
        <div className='text-container'>
        <span>
            Nike Air Jordan  
        </span> 
        <br></br>
        <p>
        The iconic Nike Air Zoom Pegasus 36 offers more cooling and mesh that targets breathability across high-heat areas. A slimmer heel collar and tongue reduce bulk, while exposed cables give you a snug fit at higher speeds.
        </p>
        </div>
        <div className='btn-container'>
        <span>
            $100.00
        </span>
        <button>Add to cart</button>
    </div>
    <div className='img-container img-container4'>
        <img src={require('./img5.png')} alt="" style={{width:400}} ></img>
        </div>
        <div className='text-container'>
        <span>
            Nike Air Jordan  
        </span> 
        <br></br>
        <p>
        The iconic Nike Air Zoom Pegasus 36 offers more cooling and mesh that targets breathability across high-heat areas. A slimmer heel collar and tongue reduce bulk, while exposed cables give you a snug fit at higher speeds.
        </p>
        </div>
        <div className='btn-container'>
        <span>
            $100.00
        </span>
        <button>Add to cart</button>
    </div>
    </div>
    </>
  )
}

export default LandingPage