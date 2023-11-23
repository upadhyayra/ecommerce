import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Contextapi } from "../context/Contextapi";
import ProductCard from "../components/ProductCard";
import Loading from "../assets/loading.gif";

function Home() {
  const [data, setData] = useState([]);
  const { user, setUser } = useContext(Contextapi);
  useEffect(() => {
    axios
      .get("http://fakestoreapi.com/products")
      .then((data) => setData(data.data))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function hadleAddCart(item) {
    setUser([...user, item]);
  }

  return data == "" ? (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "500px",
      }}
    >
      <img src={Loading} alt="" style={{ width: "10%", height: "20%" }} />
    </div>
  ) : (
    <div>
      <div className="container mb-5">
        <h2 className="mt-5">Products</h2>
        <div className="row card-container">
          {data.map((item, index) => (
            <ProductCard
              item={item}
              index={index}
              hadleAddCart={hadleAddCart}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
