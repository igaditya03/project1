import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../components/Card";

function About() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => setData(res.data.products))
      .catch((err) => console.log(err));
  }, []);

  console.log(data);

  // let [num,setNum]=useState(1);

  // const msg=()=>{
  //     setNum(num+1);
  // }
  return (
    <div>
      {/* <h1>this is about page</h1>
        <p>{num}</p>
        <button onClick={msg}>click</button> */}

      <div class="container">
        <div className="row">
          {data.map((item, index) => {
            return (
              <div className="col my-3" key={index}>
                <Card
                  title={item.title}
                  price={item.price}
                  description={item.description}
                  img={item.thumbnail}
                  id={item.id}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default About;
