import React, { useContext, useState, useEffect } from "react";
import emptyCart from "./assets/cartEmpty.jpg";
import { Contextapi } from "./Contextapi";

function Cartproduct() {
  const { user, setUser } = useContext(Contextapi);
  const [total, setTotal] = useState("");

  const handleQuantity = (type, el) => {
    if (type === "inc") {
      const temp = [...user];
      const inde = temp.findIndex((e) => e.id === el.id);
      temp[inde].quantity = temp[inde].quantity + 1;
      setUser(temp);
    } else if (type === "dec" && el.quantity === 1) {
      setUser(user.filter((item) => item.id !== el.id));
    } else {
      const temp = [...user];
      const inde = temp.findIndex((e) => e.id === el.id);
      temp[inde].quantity = temp[inde].quantity - 1;
      setUser(temp);
    }
  };

  let totalP = 0;
  let totalprice = 0;
  const calculateTotal = () => {
    for (const i of user) {
      totalP += i.quantity * i.price;
      totalprice = totalP.toFixed(2);
    }
    setTotal(totalprice);
  };
  const handleDelete = (id) => {
    const newUser = user.filter((item) => item.id !== id);
    setUser(newUser);
  };
  useEffect(() => {
    calculateTotal();
  }, [user,total]);
  return (
    <>
      {user.length === 0 ? (
        <div className="container">
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8">
              <img src={emptyCart} alt="not_found" />
            </div>
            <div className="col-md-2"></div>
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>S.No.</th>
                    <th>Img</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {user &&
                    user.map((el, i) => (
                      <tr key={i}>
                        <td>{el.id}</td>
                        <td>
                          <img
                            src={el.image}
                            style={{ width: "50px" }}
                            alt="img"
                          />
                        </td>
                        <td>{el.title}</td>
                        <td>${(el.price * el.quantity).toFixed(2)}</td>
                        <td>
                          <button
                            className="p-1 rounded fs-15"
                            onClick={() => handleQuantity("dec", el)}
                          >
                            -
                          </button>
                          <span>{el.quantity}</span>
                          <button
                            className="p-1 rounded fs-15"
                            onClick={() => handleQuantity("inc", el)}
                          >
                            +
                          </button>
                        </td>
                        <td
                          className="btn bg-danger text-white mt-3"
                          onClick={() => handleDelete(el.id)}
                        >
                          Delete
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
            <div className="col-md-2"></div>
          </div>
          <h2>Total Price: {total}</h2>
        </div>
      )}
    </>
  );
}

export default Cartproduct;
