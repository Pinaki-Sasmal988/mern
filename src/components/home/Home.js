import React from "react";
import { Carousel } from "../carousel/Carousel";

export const Home = () => {

  const data=['Phone','AC','Shirt'];
  return (
    <>
      <h3>Home</h3>
      <Carousel />
      {/* <button classNameName='btn btn-primary'>Button</button> */}

      <div className="container mt-4 ml-0">
        <div className="row">
        {data.map((data,index)=>(
          <div className="col-sm-4 w-98 ">
            
              <div className="card mt-1">
              <img
                src="https://t3.ftcdn.net/jpg/02/71/77/56/360_F_271775672_yo8ZgraN2IHGbfqP2k0PsLjwvmatUNUJ.jpg"
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title" key={index}>{data}</h5>
                <p className="card-text">$20.00</p>
                <a href="#" className="btn btn-primary">
                  Add to Cart
                </a>
              </div>
            </div>
           
          </div>
           ))}
          {/* <div className="col-sm-4">
            <div className="card mt-1">
              <img
                src="https://t3.ftcdn.net/jpg/02/71/77/56/360_F_271775672_yo8ZgraN2IHGbfqP2k0PsLjwvmatUNUJ.jpg"
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">Product Name</h5>
                <p className="card-text">$20.00</p>
                <a href="#" className="btn btn-primary">
                  Add to Cart
                </a>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};
