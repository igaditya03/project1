import React from "react";

function Card(props) {
  const { name, roll, desc ,msg,img,color,age} = props;
  
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">
            {roll}
            <br />
            {desc}
          </p>
          <p>{age>=18?'Yes':'No'}</p>
          <button onClick={()=>msg(name)} className={`btn btn-${color?`primary`:`danger`}`}>details </button>
        </div>
      </div>
    </>
  );
}

export default Card;
