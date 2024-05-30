import React from 'react'

export default function Carousel(props) {
  return (
    <>
      <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div className="carousel-item active" data-bs-interval="3000">
            <img src={props.link1} className='d-block w-90' height={'150px'} alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <img src={props.link2} className='d-block w-90' height={'150px'} alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <img src={props.link3} className='d-block w-90' height={'150px'} alt="..." />
          </div>
        </div>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
      </div>
    </>
  )
}
