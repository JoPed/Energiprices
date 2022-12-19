import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import '../scss/Loader.scss';

const Loader = () => {

    // https://www.w3schools.com/howto/howto_css_loader.asp
    return (
        <Row>
            <Col>
                <div className="loader"></div>
            </Col>
        </Row>

    )
}

export default Loader