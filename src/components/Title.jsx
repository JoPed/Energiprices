import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Title = ({ headline, children, className }) => {

    return (
        <Row className={`mt-3 mb-3 ${className ? className : ''}`}>
            <Col xs={12} >
                <h1 className="headlines">{headline}</h1>
                {children}
            </Col>
        </Row>
    );

}

export default Title;