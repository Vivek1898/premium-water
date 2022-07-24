import "react-quill/dist/quill.snow.css";

import { Button, Input, Space } from 'antd';
import React, { useEffect, useState } from "react";
import {
  applyCoupon,
  applyTip,
  createCashOrderForUser,
  emptyUserCart,
  getUserCart,
  saveUserAddress,
  sendOtp
} from "../functions/user";
import { useDispatch, useSelector } from "react-redux";

import Axios from "axios";
import ReactQuill from "react-quill";
import { toast } from "react-toastify";

const Checkout = ({ history }) => {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [address, setAddress] = useState("");
  const [zip, setZip] = useState("");
  const [email, setemail] = useState("");
  const [mobile, setmobile] = useState("");
  const [ad1, setad1] = useState("");
  const [ad2, setad2] = useState("");
  const [landmark, setlandmark] = useState("");
  const [addressSaved, setAddressSaved] = useState(false);
  const [coupon, setCoupon] = useState("");
  const [tip, setTip] = useState(0);
  // discount price
  const [totalAfterDiscount, setTotalAfterDiscount] = useState(0);
  const [tipAdd, setTipAdd] = useState(0);
  const [discountError, setDiscountError] = useState("");

  const dispatch = useDispatch();
  const { user, COD } = useSelector((state) => ({ ...state }));
  const couponTrueOrFalse = useSelector((state) => state.coupon);

  //OTP

  const [mynumber, setnumber] = useState("");
  const [otp, setotp] = useState('');
  const [show, setshow] = useState(false);
  const [final, setfinal] = useState('');

  const signin = async () => {
    console.log(mynumber)
    sendOtp(user.token, mynumber).then((res) => {
      if (res.data.ok) {

        toast.success("Otp saved");
      }
    });
    //JGDJGD
  }

  // Validate OTP
  const ValidateOtp = () => {
    if (otp === null || final === null)
      return;
    if (otp === final) {
      console.log("sucess");
    }
  }
  useEffect(() => {
    getUserCart(user.token).then((res) => {
      console.log("user cart res", JSON.stringify(res.data, null, 4));
      setProducts(res.data.products);
      setTotal(res.data.cartTotal);
    });
  }, []);

  const emptyCart = () => {
    // remove from local storage
    if (typeof window !== "undefined") {
      localStorage.removeItem("cart");
    }
    // remove from redux
    dispatch({
      type: "ADD_TO_CART",
      payload: [],
    });
    // remove from backend
    emptyUserCart(user.token).then((res) => {
      setProducts([]);
      setTotal(0);
      setTotalAfterDiscount(0);
      setCoupon("");
      toast.success("Cart is emapty. Contniue shopping.");
    });
  };
  const dataEmpty = "ABCD"
  const saveAddressToDb = () => {
    console.log(zip);
    saveUserAddress(user.token, address, dataEmpty, email, mobile, ad1, ad2, landmark, zip).then((res) => {
      if (res.data.ok) {
        setAddressSaved(true);
        toast.success("Address saved");
      }
    });
  };

  const applyDiscountCoupon = () => {
    console.log("send coupon to backend", coupon);
    applyCoupon(user.token, coupon).then((res) => {
      console.log("RES ON COUPON APPLIED", res.data);
      if (res.data) {
        console.log(res.data)
        setTotalAfterDiscount(res.data);
        // update redux coupon applied true/false
        dispatch({
          type: "COUPON_APPLIED",
          payload: true,
        });
      }
      // error
      if (res.data.err) {
        setDiscountError(res.data.err);
        // update redux coupon applied true/false
        dispatch({
          type: "COUPON_APPLIED",
          payload: false,
        });
      }
    });
  };
  const applyDiscountTip = () => {
    console.log("send coupon to backend", coupon);
    applyTip(user.token, tip).then((res) => {
      console.log("RES ON COUPON APPLIED", res.data);
      if (res.data) {
        setTipAdd(res.data)
        // setTotalAfterDiscount(res.data);
        // update redux coupon applied true/false
        dispatch({
          type: "TIP_APPLIED",
          payload: true,
        });
      }
      // error
      if (res.data.err) {
        setDiscountError(res.data.err);
        // update redux coupon applied true/false
        dispatch({
          type: "TIP_APPLIED",
          payload: false,
        });
      }
    });
  };


  const showAddress = () => (
    <Space direction="vertical"
      style={{
        width: '100%',
      }}>

      <Input

        onChange={(e) => {
          setemail(e.target.value);

        }}
        placeholder="Enter Email"
        value={email}
        type="text"

      />
      <Input
        onChange={(e) => {
          setmobile(e.target.value);

        }}
        placeholder="Enter Mobile Number"
        value={mobile}
        type="text"

      />

      <Input
        onChange={(e) => {
          setad1(e.target.value);

        }}
        placeholder="Enter Address Line 1"
        value={ad1}
        type="text"

      />
      <Input
        onChange={(e) => {
          setad2(e.target.value);

        }}
        placeholder="Enter Address Line 2"
        value={ad2}
        type="text"

      />
      <Input
        onChange={(e) => {
          setlandmark(e.target.value);

        }}
        placeholder="Enter Landmark"
        value={landmark}
        type="text"

      />

      <Input
        onChange={(e) => {
          setZip(e.target.value);

        }}
        placeholder="Enter Zip"
        value={zip}
        type="text"

      />


      <Button
        size="large"
        className="bg-primary mt-2"
        type="primary"
        onClick={saveAddressToDb}>
        Save
      </Button>
    </Space >
  );

  const showProductSummary = () =>
    products.map((p, i) => (
      <div key={i}>
        <p>
          {p.product.title} ({p.color}) x {p.count} ={" "}
          {p.product.price * p.count}
        </p>
      </div>
    ));

  // const showApplyCoupon = () => (
  //   <>
  //     <input
  //       onChange={(e) => {
  //         setCoupon(e.target.value);
  //         setDiscountError("");
  //       }}
  //       value={coupon}
  //       type="text"
  //       className="form-control"
  //     />
  //     <button onClick={applyDiscountCoupon} className="btn btn-primary mt-2">
  //       Apply 2
  //     </button>
  //   </>
  // );

  const showApplyTip = () => (
    <>
      <input
        onChange={(e) => {
          setTip(e.target.value);

        }}
        value={tip}
        type="number"
        className="form-control"
      />
      <Button
        type="primary"
        size="large"
        onClick={applyDiscountTip} className="bg-primary mt-2 mb-4">
        Apply Now
      </Button>
    </>
  );

  const createCashOrder = () => {
    createCashOrderForUser(user.token, COD, couponTrueOrFalse).then((res) => {
      console.log("USER CASH ORDER CREATED RES ", res);
      // empty cart form redux, local Storage, reset coupon, reset COD, redirect
      if (res.data.ok) {
        // empty local storage
        if (typeof window !== "undefined") localStorage.removeItem("cart");
        // empty redux cart
        dispatch({
          type: "ADD_TO_CART",
          payload: [],
        });
        // empty redux coupon
        dispatch({
          type: "COUPON_APPLIED",
          payload: false,
        });
        dispatch({
          type: "TIP_APPLIED",
          payload: false,
        });
        // empty redux COD
        dispatch({
          type: "COD",
          payload: false,
        });
        // mepty cart from backend
        emptyUserCart(user.token);
        // redirect
        setTimeout(() => {
          history.push("/user/history");
        }, 1000);
      }
    });
  };

  return (
    <div className="bg-light">
      <div className="container pt-1 ">
        <div className="row">
          <div className="col-md-8 pt-4 card mb-4">
            <h2 className="fw-bold ">Delivery Address</h2>
            <hr />
            {showAddress()}
            <hr />
            <h3 className="text-muted">Give Tip?</h3>
            <br />
            {/* {showApplyCoupon()} */}


            {showApplyTip()}


          </div>
          <div className="col-md-4">
            <div className="card p-4 ripple shadow-1-strong rounded">
              <h2 className="fw-bold pt-4">Order Summary</h2>
              <h6>Products ({products.length})</h6>
              <hr /><h6 className="text-primary">
                {showProductSummary()}
              </h6>
              <hr />
              <h5>Cart Total: {total}</h5>

              {/* {totalAfterDiscount > 0 && (
          <p className="bg-success p-2">
            Discount Applied: Total Payable: ${totalAfterDiscount}
          </p>
        )} */}
              {tipAdd > 0 && (
                <p className="bg-success p-2">
                  TIP Applied: Total Payable: ${tipAdd}
                </p>
              )}


              <div className="row pt-2 ">
                <div className="col">
                  {COD ? (
                    <Button
                      size="large"
                      className="bg-primary"
                      type="primary"
                      disabled={!addressSaved || !products.length}
                      onClick={createCashOrder}
                    >
                      Place Order
                    </Button>
                  ) : (
                    <Button
                      size="large"
                      className="bg-primary text-white"
                      type="primary"
                      disabled={!addressSaved || !products.length}
                      onClick={() => history.push("/payment")}
                    >
                      Place Order
                    </Button>
                  )}
                </div>

                <div className="col">
                  <Button
                    disabled={!products.length}
                    onClick={emptyCart}
                    size="large"
                    className="btn btn-primary"
                  >
                    Empty Cart
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
