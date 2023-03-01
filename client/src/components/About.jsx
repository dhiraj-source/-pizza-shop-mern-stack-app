import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const About = () => {
    return (
        <>
            <Container style={{ marginTop: '50px' }}>
                <h1>Who we are?</h1>
                <p>Welcome to our Bilbo Pizza! We are a passionate group of pizza enthusiasts who are dedicated to delivering the very best pizza experience to our customers. With years of experience in the pizza industry, we have honed our craft to perfection, creating delicious and unique pizza recipes that are sure to satisfy any craving. We believe that pizza is more than just a meal, it's an experience, and we strive to make every pizza we create a memorable one. Whether you're looking for classic toppings or something a little more adventurous, we have something for everyone. Our commitment to quality ingredients, excellent customer service, and creative pizza-making techniques sets us apart from the competition. Join us in our love for pizza, and taste the difference for yourself.
                </p>
                <h1>Our Speciality</h1>
                <Row>
                    <Col md={6}>
                        <p>At our pizza restaurant, we take pride in offering a wide variety of specialty pizzas that are sure to tantalize your taste buds. Our signature pizzas are crafted with only the freshest ingredients, combining bold flavors and unique combinations to create a truly unforgettable experience. From our classic Margherita pizza to our more adventurous creations like the BBQ chicken pizza, each one is made with care and attention to detail. Our vegan and gluten-free options are also available to ensure that everyone can enjoy our delicious pizzas. We strive to offer something for everyone, whether you're a traditionalist or looking for something new and exciting. Come and try our specialty pizzas, and discover your new favorite pizza today!
                        </p>
                    </Col>
                    <Col md={6}>
                        <p>we also offer a range of specialty toppings and sauces that allow you to customize your pizza to your liking. Whether you're in the mood for spicy pepperoni, savory mushrooms, or sweet pineapple, we have something for everyone. We also offer a variety of sauces, from classic tomato sauce to creamy Alfredo sauce, to take your pizza to the next level. Our toppings and sauces are always fresh and of the highest quality, ensuring that every bite is packed with flavor.Finally, we also offer a range of specialty pizzas that are perfect for special occasions or for those who want to try something truly unique. From our truffle oil and mushroom pizza to our spicy sausage and jalapeño pizza, these pizzas are sure to delight even the most discerning pizza connoisseur
                        </p>
                    </Col>
                </Row>
                    <Row>
                    <h1>Our Cheif</h1>
                    <Col md={3}>
                        <p>Meet our Head Chef, Jhon! With over 10 years of culinary experience, Jhon has a passion for creating delicious and innovative dishes. As the leader of our kitchen, Jhon brings a wealth of knowledge and expertise to our pizza-making process. With a focus on fresh, seasonal ingredients and a dedication to quality, Jhon ensures that every pizza we serve is nothing short of exceptional.
                        </p>
                    </Col>
                    <Col md={3}>
                        <p>
                        Peter, our resident pizza expert! With a background in Italian cuisine and a passion for all things pizza, Peter brings a unique perspective to our kitchen. From perfecting our dough recipe to creating new and exciting flavor combinations, Peter is constantly pushing the boundaries of what's possible when it comes to pizza-making. With a keen eye for detail and a commitment to excellence, Peter is an invaluable member of our team.
                        </p>
                    </Col>
                    <Col md={3}>
                        <p>
                        Say hello to Jack, our sous chef and resident sauce master! With years of experience working in some of the top restaurants in the city, Jack has a deep understanding of flavor profiles and how to create dishes that are both delicious and well-balanced. As the architect of our signature tomato sauce, Jack is responsible for giving our pizzas their distinct and unforgettable flavor. From classic Margherita to bold and spicy options, Jack's sauce is the foundation on which our pizzas are built.
                        </p>
                    </Col>
                    <Col md={3}>
                        <p>
                        Last but certainly not least is Vicky, our creative genius and master of toppings! With a love for experimenting with new flavors and textures, Vicky is responsible for dreaming up some of our most innovative and exciting pizza combinations. With a passion for pushing the boundaries of what's possible when it comes to pizza, Vicky is a key player in our kitchen and an inspiration to us all.
                        </p>
                    </Col>
                    </Row> 

            </Container>

        </>
    )
}

export default About
