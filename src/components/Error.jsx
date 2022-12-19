import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Error = ({ errorMessage, children }) => {
    return (
        <Row className="mt-3 mb-5 rowOfErrors">
            <Col>
                <h2>Der er opstået en fejl...</h2>

                {
                    errorMessage &&
                    <p>{errorMessage}</p>
                }

                { children }
            </Col>

        </Row>



    )
}

export default Error