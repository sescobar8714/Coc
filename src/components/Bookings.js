import React, { useState } from "react";
import {
    Form, FormGroup, Label, Input, FormText, Button, Card, CardText,
    CardImg, CardBody, CardTitle, CardSubtitle, CardGroup, Modal,
    ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import './Bookings.css';
import Bimg1 from "../media/380-Outrage-Gallery-1-380x236.jpg";


function Bookings() {


    // Pick a Boat and Time
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [boat, setBoat] = useState('');


    // Question Form
    const [first, setFirst] = useState('');
    const [last, setLast] = useState('');
    const [email, setEmail] = useState('');
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(date);
        console.log(time);
        console.log(boat);
        console.log(first);
        console.log(last);
        console.log(email);
        console.log(text);
    }

    return (

        <nav className='bookings'>
            <Modal isOpen={modalIsOpen} className=" pt-">
                <ModalHeader> PICK A DATE & BOAT! </ModalHeader>
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label for="exampleDate">
                            Date
                        </Label>
                        <Input
                            name="date"
                            placeholder="date placeholder"
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleTime">
                            Time
                        </Label>
                        <Input
                            id="exampleTime"
                            name="time"
                            placeholder="time placeholder"
                            type="time"
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleSelect">
                            Boat Selection
                        </Label>
                        <Input
                            id="exampleSelect"
                            name="select"
                            type="select"
                            value={boat}
                            onChange={(e) => setBoat(e.target.value)}
                        >
                            <option>
                                Rainbow Voyager
                            </option>
                            <option>
                                Pride of the Oceans
                            </option>
                            <option>
                                Equality Explorer
                            </option>
                        </Input>
                    </FormGroup>

                    <ModalFooter>
                        <Button color="primary" type="submit" onClick={() => setModalIsOpen(false)}>
                            Submit
                        </Button>{" "}
                        <Button onClick={() => setModalIsOpen(false)}>Cancel</Button>
                    </ModalFooter>
                </Form>
            </Modal>
            <Header />

            <Card
                className='m-5'
                body
                inverse
                style={{
                    backgroundColor: '#333',
                    borderColor: '#333'
                }}>
                <h2 classname="header-booking"> Bookings </h2>
            </Card>
            <Card
                className='m-5'
                body
                inverse
                style={{
                    backgroundColor: '#333',
                    borderColor: '#333'
                }}>
                <CardText>
                    Introducing the ultimate in luxury and exclusivity: our LGBTQ-exclusive yacht charter.
                    Designed specifically for the LGBTQ community, this yacht offers a private and safe haven
                    for you to explore the open seas. With spacious and elegantly appointed cabins, top-of-the-line
                    amenities, and a dedicated crew, this yacht is the perfect setting for a romantic getaway, a fun-filled
                    adventure with friends, or a special celebration. Experience the freedom of being yourself on the high seas
                    and book your charter today!
                </CardText>
            </Card>
            <CardGroup>
                <Card>
                    <CardBody>
                        <CardImg
                            alt="Card image cap"
                            src={Bimg1}
                            top
                            width="100%"
                        />
                    </CardBody>
                    <CardBody>
                        <CardTitle className="text-center" tag="h5">
                            Rainbow Voyager
                        </CardTitle>
                        <CardText>
                            Sail in style and exclusivity with our LGBTQ-exclusive yacht.
                            Luxurious amenities, private cabins and a safe haven for the community. Book now!.
                        </CardText>

                    </CardBody>
                </Card>
                <Card>
                    <CardBody>
                        <CardImg
                            alt="Card image cap"
                            src={Bimg1}
                            top
                            width="100%"
                        />
                    </CardBody>
                    <CardBody>
                        <CardTitle className="text-center" tag="h5">
                            Pride of the Oceans
                        </CardTitle>

                        <CardText>
                            "Escape to the open seas in our spacious LGBTQ-exclusive yacht.
                            Luxurious amenities, private cabins, and a safe haven for the community. Book now!"
                        </CardText>

                    </CardBody>
                </Card>

                <Card>
                    <CardBody>
                        <CardImg
                            alt="Card image cap"
                            src={Bimg1}
                            top
                            width="100%"
                        />
                    </CardBody>
                    <CardBody>
                        <CardTitle className="text-center" tag="h5">
                            Equality Explorer
                        </CardTitle>

                        <CardText>
                            Live in luxury on our gigantic LGBTQ-exclusive yacht.
                            Spacious cabins, top amenities, and a safe haven for the community. Book now!
                        </CardText>
                    </CardBody>

                </Card>

            </CardGroup>
            <Card className="w-100 d-flex justify-content-end">
                <Button color="primary" onClick={() => setModalIsOpen(true)}>
                    Book!
                </Button>
            </Card>
            <Card
                className='m-5'
                body
                inverse
                style={{
                    backgroundColor: '#333',
                    borderColor: '#333'
                }}>
                <h2 classname="header-booking"> Contact Us </h2>
            </Card>

            <Card className='m-5'
                body
                inverse
                style={{
                    backgroundColor: '#333',
                    borderColor: '#333'
                }}
            >

                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label for="first-name">
                            First Name
                        </Label>
                        <Input
                            id="first-name"
                            name="first-name"
                            placeholder="First Name"
                            type="first-name"
                            value={first}
                            onChange={(e) => setFirst(e.target.value)}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="last-name">
                            Last Name
                        </Label>
                        <Input
                            id="last-name"
                            name="last-name"
                            placeholder="Last Name"
                            type="last-name"
                            value={last}
                            onChange={(e) => setLast(e.target.value)}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">
                            Email
                        </Label>
                        <Input
                            id="email"
                            name="email"
                            placeholder="Email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleText">
                            Question:
                        </Label>
                        <Input
                            id="exampleText"
                            name="text"
                            type="textarea"
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                        />
                    </FormGroup>

                    <Button type="submit">
                        Submit
                    </Button>
                </Form>
            </Card>
            <Footer />
        </nav>
    );

}

export default Bookings;