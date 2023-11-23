import { Link } from "react-router-dom";
import { Contextapi } from "../context/Contextapi";
import { useContext, useState } from "react";

function Header() {
  
  const { user } = useContext(Contextapi);
  const [isCart, setIsCart] = useState(true);

  return (
    <header className="bg-primary p-2 ">
      <div className="container">
        <div className="row">
          <div className="col-md-12 d-flex justify-content-between">
            <Link to="/" className="link">
              <h1 className="brand text-white" onClick={() => setIsCart(true)}>
                E-commerce
              </h1>
            </Link>
            {isCart ? (
              <Link
                to="/Cart"
                className="link headerCart"
                style={{ postion: "relative" }}
                onClick={() => setIsCart(false)}
              >
                  <div>
                    {user.length > 0 ? 
                    <span
                      className="text-white fs-5"style={{position: "absolute", right: "-15px",top: "-5px", }}>
                      {user.length}
                    </span>
                    :null }
                    <img className="cartImg" src="/cart.svg" alt="cart" />
                  </div>
              </Link>
            ) : (
            null
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
