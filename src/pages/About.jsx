import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Title from '../components/Title';

const About = () => {
    return (
        <Container fluid="lg">

            <Title headline="Om projektet" />

            <Row>
                <Col xs={ 12 } md={ { span: 8, offset: 2 } }>
                    <article className="about">
                        <p>Jeg har lavet dette som et fritidsprojekt til mig selv, for at kunne holde øje med prisen for strøm. Det betyder bl.a. at det ikke er fyldt op med features, men kun det jeg selv synes er mest nødvendigt for at kunne få et hurtigt overblik. Dataen hentes fra <a href="https://www.energidataservice.dk/tso-electricity/Elspotprices" target="_blank">ENERGI DATA SERVICE</a> og det er derfor dem der styrer hvilke data der er adgang til. <br /> <br />

                            Det er en fritidsprojekt, som I har gratis adgang til, derfor skal I ikke forvente at jeg hele tiden udvikler videre på det - hverken vedligehold eller nye funktioner. I er dog altid velkomne til at <a href="mailto:jona09h3@videndjurs.net" className="mail">sende en mail</a> for at rappotere fejl, så vil jeg prøve at finde tid at rette dem.

                            <br /> <br />
                            <b>Mulige nye funktioner</b><br />
                            Jeg vil ikke love noget, men jeg har nogle idé til mulige udvidelser hvis jeg kan finde tiden til det. F.eks. muligheden for at sorter efter dansk tid, pris I DKK, pris i EURO samt and vælge det der skal være stigende eller faldende værdier.  <br /><br />

                        </p>
                    </article>
                </Col>
            </Row>

        </Container>
    )
}

export default About;