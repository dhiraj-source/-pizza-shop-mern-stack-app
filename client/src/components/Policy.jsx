import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Policy = () => {
  return (
    <>
      <Container style={{ marginTop: "50px" }}>
        <h1>All Terms and policy</h1>
        <Row>
          <Col md={10}>
            <h6>
            Terms and Policies:
            </h6>
            <p>
            At Bilbo Pizza, we are committed to providing you with the best possible experience, both in our restaurant and online. To ensure that everyone has a safe and enjoyable experience, we ask that you please read and agree to our terms and policies before using our website or placing an order.
            </p>
            <h6>
            Privacy Policy:
            </h6>
            <p>
            We respect your privacy and are committed to protecting your personal information. When you use our website or place an order, we may collect certain information from you such as your name, email address, and phone number. We will only use this information to process your order and improve our services. We will never share or sell your information to third parties without your consent.
            </p>
            <h6>
            Refund Policy:
            </h6>
            <p>
            We take pride in the quality of our food and want you to be completely satisfied with your order. If for any reason you are not satisfied with your order, please let us know within 24 hours of receiving it and we will do our best to make it right. We do not offer refunds on orders that have already been delivered, but we may offer store credit or a replacement order.
            </p>
            <h6>
            Delivery Policy:
            </h6>
            <p>
            We offer delivery services to select areas for your convenience. Delivery times may vary depending on your location and demand, and we do our best to deliver your order in a timely manner. However, please note that delivery times are not guaranteed and may be affected by factors outside of our control. In the event of unforeseen delays, we will do our best to keep you informed and updated on the status of your order.
            </p>
            <h6>
            Terms of Use:
            </h6>
            <p>
            By using our website or placing an order, you agree to our terms of use. This includes using our website and services only for lawful purposes, not infringing on the intellectual property rights of others, and not engaging in any behavior that could harm our website or other users. We reserve the right to refuse service to anyone who violates these terms.
            </p>
            <h6>
            Modification of Terms:
            </h6>
            <p>
            We reserve the right to modify these terms and policies at any time without prior notice. By continuing to use our website or services after any such modifications, you agree to be bound by the updated terms and policies. We encourage you to review our terms and policies regularly to stay informed of any changes.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Policy;
