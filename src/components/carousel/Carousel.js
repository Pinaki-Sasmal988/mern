import React from 'react'

export const Carousel = () => {
  return (
    <>
     <h3>Carousel</h3>
     <div id="demo" className="carousel slide" data-ride="carousel">

  {/* <!-- Indicators --> */}
  <ul className="carousel-indicators">
    <li data-target="#demo" data-slide-to="0" className="active"></li>
    <li data-target="#demo" data-slide-to="1"></li>
    <li data-target="#demo" data-slide-to="2"></li>
  </ul>
  
  {/* <!-- The slideshow --> */}
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://static.vecteezy.com/system/resources/thumbnails/009/273/280/small/concept-of-loneliness-and-disappointment-in-love-sad-man-sitting-element-of-the-picture-is-decorated-by-nasa-free-photo.jpg" alt="Los Angeles" width="1100" height="500" />
    </div>
    <div className="carousel-item">
      <img src="https://static.vecteezy.com/system/resources/thumbnails/009/273/280/small/concept-of-loneliness-and-disappointment-in-love-sad-man-sitting-element-of-the-picture-is-decorated-by-nasa-free-photo.jpg" alt="Chicago" width="1100" height="500" n/>
    </div>
    <div className="carousel-item">
      <img src="https://static.vecteezy.com/system/resources/thumbnails/009/273/280/small/concept-of-loneliness-and-disappointment-in-love-sad-man-sitting-element-of-the-picture-is-decorated-by-nasa-free-photo.jpg" alt="New York" width="1100" height="500" />
    </div>
  </div>
  
  {/* <!-- Left and right controls --> */}
  <a className="carousel-control-prev" href="#demo" data-slide="prev">
    <span className="carousel-control-prev-icon"></span>
  </a>
  <a className="carousel-control-next" href="#demo" data-slide="next">
    <span className="carousel-control-next-icon"></span>
  </a>
</div>
    </>
  )
}
