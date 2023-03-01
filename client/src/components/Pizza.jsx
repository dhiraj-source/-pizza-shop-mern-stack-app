import React, { useState } from 'react'
import { Container, Card, Row, Col, Button, Modal } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { addToCart } from '../actions/cartAction'


const Pizza = ({ pizza }) => {
    const [varient, setVarient] = useState('small')
    const [qunatity, setQuantity] = useState(1)

    const [show, setShow] = useState(false);

    const dispatch = useDispatch()
    const addToCartHandler =()=>{
        dispatch(addToCart(pizza,qunatity,varient))
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const vegSymbol = "🌿";
    const nonVegSymbol = "🍖";



    return (
        <Container>
            <Card style={{ width: '25rem', margin: '1rem', backgroundColor: "#F1F1F1", }}>
                <Card.Img
                    onClick={handleShow}
                    variant="top"
                    src={pizza.image}
                    style={{ height: '15rem', cursor: 'pointer' }} />
                <Card.Body style={{ Color: "white" }} >
                    <Card.Title>{pizza.name}</Card.Title>
                    <hr />
                    <Card.Text  >
                        <Row>
                            <Col md={6}>
                                <h6>Varients</h6>

                                <select
                                    value={varient}
                                    onChange={e => setVarient(e.target.value)}
                                    style={{ border: "hidden", backgroundColor: "#E7E7E7" }}>
                                    {pizza.varients.map(varient => (
                                        <option>{varient}</option>
                                    )
                                    )}
                                </select>
                            </Col>
                            <Col md={6}>
                                <h6>Qunatity</h6>
                                <select
                                    value={qunatity}
                                    onChange={e => setQuantity(e.target.value)}
                                    style={{ border: "hidden", backgroundColor: "#E7E7E7" }}>
                                    {[...Array(10).keys()].map((v, i) => (
                                        <option value={i + 1}>{i + 1}</option>
                                    ))}
                                </select>
                            </Col>
                        </Row>
                    </Card.Text>
                    <Row>
                        <Col md={6} style={{ paddingTop: '.5rem' }}><h6>price : {pizza.prices[0][varient] * qunatity} /- ₹</h6></Col>
                        <Col md={6}>
                            <Button 
                            onClick={addToCartHandler}
                            className='bg-warning'>Add to Cart</Button>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title style={{ color: ' #242526' }}>
                        <Row >
                            <Col>
                                {pizza.name}
                            </Col>
                            <Col>
                                {pizza.category === "veg" ? vegSymbol : nonVegSymbol}
                                {pizza.category}
                            </Col>
                        </Row>

                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <Card.Img
                            variant="top"
                            src={pizza.image}
                            style={{ height: '15rem' }} />
                    </div>
                    <hr />
                    <div>
                        <Row>
                            <Col><h5>Description :</h5></Col>

                        </Row>
                        <h6>
                            {pizza.description}
                        </h6>
                    </div>
                </Modal.Body>
            </Modal>
        </Container>
    ) 

}



export default Pizza
