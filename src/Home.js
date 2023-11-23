import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios';
import { Contextapi } from './Contextapi';
import ProductCard from './ProductCard';


function Home() {
  const [data, setData] = useState([])
  const { user, setUser } = useContext(Contextapi);
  useEffect(() => {
    axios.get('http://fakestoreapi.com/products').then((data) => setData(data.data)).catch((error) => {
      console.log(error)
    })
  }, [])

  function hadleAddCart(item) {
 
    setUser([...user,item])
  }

  return (
    <div>
      <div className="container mb-5">
        <h2 className='mt-5'>Products</h2>
        <div className="row card-container">
          {data.map((item, index) =>
            <ProductCard item={item} index={index}  hadleAddCart={hadleAddCart} />
          )}
        </div>
      </div>
    </div>
  )
}

export default Home