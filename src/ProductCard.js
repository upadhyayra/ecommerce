import React,{useEffect,useContext,useState} from 'react'
import { Contextapi } from './Contextapi';

const ProductCard = ({ item, index, hadleAddCart}) => {
    const {user,setUser} = useContext(Contextapi);
    const [disableBtn,setDisableBtn] = useState(false)
    const [productQuantity,setProductQty] = useState(1)
 

    useEffect(()=>{
      user.forEach((e)=>{
        if(e.id === item.id){
          setDisableBtn(true)
        }
      })
      setQty()
    },[productQuantity])

    const handleCart = () =>{
        const cartItem = item;
        cartItem.quantity = 1;
        hadleAddCart(cartItem)
        setDisableBtn(true)
        setProductQty(item.quantity)
    }

    const handleQuantity = (type) => {
      if (type === "inc") {
        const temp = [...user];
        const index = temp.findIndex((e) => e.id === item.id);
        temp[index].quantity = temp[index].quantity + 1;
        setProductQty(temp[index].quantity)
        setUser(temp);
      } else if (type === "dec" && productQuantity === 1) {
        setUser(user.filter((el) => el.id !== item.id));
        setDisableBtn(false);
      } else {
        const temp = [...user];
        const index = temp.findIndex((e) => e.id === item.id);
        temp[index].quantity = temp[index].quantity - 1;
        setProductQty(temp[index].quantity);
        setUser(temp);
      }
    };

    const setQty = ()=>{
      user.forEach((e)=>{
        if(e.id === item.id){
          setProductQty(e.quantity)
        }
      })
    }

  return (
    <div className="card mt-5" style={{ width: "18rem" }} key={index}>
      <img
        src={item.image}
        className="card-img-top pt-2"
        alt="..."
        style={{ width: "30%", height: "120px", margin: "auto" }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title ">{item.title}</h5>
        <p className="card-text">{item.description.slice(0, 100) + "..."}</p>
        <p className="price">Price : ${item.price * productQuantity}</p>
        {disableBtn == false ? (
          <button className="btn btn-primary mt-auto" onClick={handleCart}>
            Add to Cart
          </button>
        ) : (
          <div className="d-flex justify-content-center align-items-center mt-auto ">
            <button
              className="rounded btn btn-secondary"
              onClick={() => handleQuantity("dec")}
            >
              -
            </button>
            <span>{productQuantity}</span>
            <button
              className="rounded btn btn-secondary "
              onClick={() => handleQuantity("inc")}
            >
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard