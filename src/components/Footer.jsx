import React from 'react';

import '../scss/Footer.scss';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';

import { FaEnvelope, FaHome, FaLinkedin, FaTwitterSquare, FaFacebookSquare, FaGlobe } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">

            <Row>
                <Col xs={ { span: 12 } } lg={ { span: 4, offset: 2} } >

                    <section className="contactInfo">

                        <h2>Kontakt</h2>
                        <ul>
                            <li>Jonas Bjørn Pedersen</li>
                            <li><a target="_blank" href="mailto:jonasbjoern@gmail.com"><FaEnvelope /> jonasbjoern@gmail.com</a></li>
                            <li><a target="_blank" href="mailto:jona09h3@videndjurs.net"> <FaEnvelope /> jona09h3@videndjurs.net</a> </li>
                            <li><FaHome /> Skolestræde 1, 2.tv, <br />8500 Grenaa</li>
                        </ul>

                    </section>

                </Col>

                <Col xs={ { span: 12 } } lg={ { span: 4 } } >

                    <section className="socials">
                        <h2>Links</h2>
                        <Row className="mb-2 mt-2">
                            <Col>
                                <a href="https://www.linkedin.com/in/joped" target="_blank"><FaLinkedin /> </a>
                                <a href="https://twitter.com/JoPed93" target="_blank"><FaTwitterSquare /> </a>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <a href="https://www.facebook.com/profile.php?viewas=100000686899395&id=1468180457" target="_blank"><FaFacebookSquare /></a>
                                <a href="#" target="_blank"><FaGlobe /></a>
                            </Col>
                        </Row>
                    </section>

                </Col>
            </Row>



        </footer>
    )
}

export default Footer;