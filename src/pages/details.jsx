import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Details() {
  const { id } = useParams("id");

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => setData(res.data.products))
      .catch((err) => console.log(err));
  }, []);

  const product = data.find((item) => item.id === Number(id));
  // console.log(product);
  return (
    <>
      <h1>{product.title}</h1>
    </>
  );
}

export default Details;
