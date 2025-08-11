import React from "react";
import { Link } from "react-router-dom";

function Card(props) {
  const { title,price,description,img,id} = props;
  
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          {/* <h5 className="card-title">{name}</h5> */}
          {/* <p className="card-text">
            {roll}
            <br />
            {desc}
          </p> */}
          <h1>{title}</h1>
          <p>{price}</p> 
          <p>{description}</p>

          <Link to={`/details/${id}`}>More</Link>

          {/* <p>{age>=18?'Yes':'No'}</p>
          <button onClick={()=>msg(name)} className={`btn btn-${color?`primary`:`danger`}`}>details </button> */}
        </div>
      </div>
    </>
  );
}

export default Card;
