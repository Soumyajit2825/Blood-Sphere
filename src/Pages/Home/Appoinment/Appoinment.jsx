import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Appoinment.css';

const Appoinment = () => {
    return (
        <section id="contact" className="appoinment-wrapper mt-5 p-[5vw] m-[2vw]  w-[96vw]  border-[#f3c4fb] rounded-xl border-2">
            <Container>
                <Row>
                    <Col sm={12} md={12}>
                        <div className="section-title">
                            <h1 className="text-center text-4xl font-bold">Contact Us</h1>
                        </div>
                        <div className="appoinment-form">
                            <form action="#" className="row">
                                <Col md={6} lg={6}>
                                    <input type="text" placeholder="Enter Your Name" />
                                </Col>
                                <Col md={6} lg={6}>
                                    <input type="email" placeholder="Enter Your Email" />
                                </Col>
                                <Col md={6} lg={6}>
                                    <input type="phone" placeholder="Enter Your Phone" />
                                </Col>
                                <Col md={6} lg={6}>
                                    <input type="text" placeholder="Enter The Subject" />
                                </Col>
                                <Col md={12} lg={12}>
                                    <textarea name="Message" id="" cols="30" rows="10" placeholder="Enter The Message In Brief"></textarea>
                                </Col>
                                <div className="col-md-12 text-center">
                                <Link to="/approved"><button className="theme-btn btn-fill form-btn mt-5 mb-4">Submit</button>
                                </Link>
                                </div>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Appoinment;