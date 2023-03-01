import React from "react";
import { Container, Row, Col, Table, Image } from "react-bootstrap";
import { FiPhoneCall } from "react-icons/fi";
import { ImMobile } from "react-icons/im";
import { AiOutlineMail } from "react-icons/ai";
const Contact = () => {
  return (
    <>
      <Container style={{ marginTop: "50px" }}>
        <Row>
          <Col md={6}>
            <h1>BILBO Pizza Shop</h1>
            <p>
            At Bilbo Pizza, we take pizza-making seriously. Our signature Bilbo pizza is a true masterpiece that combines the best of Italian tradition and modern flair. We start with a thin and crispy crust that's made fresh daily, then top it with a tangy tomato sauce, fresh mozzarella cheese, and your choice of mouth-watering toppings. Whether you're a meat lover or a veggie enthusiast, we've got you covered. And the best part? Our Bilbo pizza is cooked to perfection in a wood-fired oven, giving it that irresistible smoky flavor that you won't find anywhere else. Come and taste the magic of Bilbo Pizza today!.
            </p>
            <p>
            Our Bilbo pizza is made with only the freshest and highest quality ingredients, sourced from local farms and suppliers whenever possible. We believe that great pizza starts with great ingredients, and we're proud to offer you the very best. And with our wide selection of toppings, from classic pepperoni to creative combinations like prosciutto and figs, there's something for everyone to love.

But don't just take our word for it - come and taste the difference for yourself! Our cozy and welcoming restaurant is the perfect place to gather with friends and family and enjoy a delicious meal. And if you're in a hurry, we also offer convenient takeout and delivery options so you can enjoy Bilbo pizza from the comfort of your own home. So what are you waiting for? Come and experience the joy of Bilbo pizza today!
            </p>

            <Table striped bordered hover className="text-center">
              <thead>
                <tr>
                  <th className="bg-warning text-center" colSpan={3}>
                    --- Contact Details ---
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <FiPhoneCall />
                  </td>
                  <td>Phone</td>
                  <td>0123-456789</td>
                </tr>
                <tr>
                  <td>
                    <ImMobile />
                  </td>
                  <td>Call</td>
                  <td>7908272280</td>
                </tr>
                <tr>
                  <td>
                    <AiOutlineMail />
                  </td>
                  <td>Email</td>
                  <td>bilbopizza.com</td>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col md={6}>
            <Image
              src="images/banner3.jpg"
              style={{ width: "100%", height: "100%" }}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact;