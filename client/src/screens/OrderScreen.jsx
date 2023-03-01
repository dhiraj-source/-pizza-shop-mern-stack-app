import React, { useEffect } from "react";
import { getUserOrders } from "../actions/orderAction";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import Loader from "../components/Loader";
import Error from "../components/Error";

const OrderScreen = () => {
  const orderState = useSelector((state) => state.getUserOrdersReducer);
  const { loading, error, orders } = orderState;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserOrders());
  },[dispatch]);


 
  return (
    <>
      <h1 className="text-center ">Your Orders </h1>
      {loading && <Loader />}
      {error && <Error error="something went wrong" />}
      {orders &&
        orders.map((order) => (
          <div className="container border p-4 bg-light">
            <Row>
              <Col md={4} >
                <h4 style={{'color':'#692D94'}}>Items :</h4>
                {order.orderItems.map((item) => (
                  <h6 key={item.name}>
                    {item.name} [{item.varient}] * {item.quantity} ={" "}
                    {item.price}
                  </h6>
                ))}
              </Col>
              <Col md={3}>
                <h4 style={{'color':'#005C29'}}>Address :</h4>
                <h6>Street : {order.shippingAddress.street}</h6>
                <h6>City : {order.shippingAddress.city}</h6>
                <h6>PinCode : {order.shippingAddress.picode}</h6>
                <h6>Countery : {order.shippingAddress.country}</h6>
              </Col>
              <Col md={5}>
                <h4 style={{'color':'#6b0000'}}>Order Info :</h4>
                <h6>Order Amount : {order.orderAmount}</h6>
                <h6>Transection id : {order.transectionId}</h6>
                <h6>Order id : {order._id}</h6>
                <hr/>
                <Row>
                <h4 style={{'color':'#6b0000'}}>Order Place Date :</h4>
                <h6>Order Date : {order.createdAt.substring(0,10)}</h6>
                </Row>
              </Col>  
            </Row>
          </div>
        ))}
    </>
  );
};

export default OrderScreen;