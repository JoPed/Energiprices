import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Title from '../components/Title';

const Guide = () => {
    return (
        <Container fluid="lg">

            <Title headline="Guide" />

            <Row>
                <Col xs={ 12 } md={ { span: 6, offset: 3 } }>
                    <ol className="guideList">
                        <li>Vælg prisområde
                            <ul>
                                <li>Dk1 = vest for storebælt.</li>
                                <li>Dk2 = øst for storebælt.</li>
                            </ul>
                        </li>
                        <li>Vælg en start dato
                            <ul>
                                <li>Maks en dag i fremtiden.</li>
                            </ul>
                        </li>
                        <li>Vælg for hvor mange timer du vil se strøm data'en
                            <ul>
                                <li>Hvis du f.eks. har valgt gårsdagens dato kan du kun se data ved at vælge 24 timer eller 48 timer.</li>
                                <li>Vælger du derimod en dato længere tilbage i tiden kan du bruge alle tre muligheder.</li>
                                <li>Data'en for en given dag starter som udgangspunkt kl. 24:00 uafhængigt af hvornår du tjekker prisen. </li>
                            </ul>
                        </li>
                        <li>Vælg om du vil se priserne i Megawatt-time eller Kilowatt-time</li>
                        <li>Tryk på 'Søg'</li>
                    </ol>
                </Col>
            </Row>

            <Row >
                <Col xs={ 12 } md={ { span: 6, offset: 3 } } >
                    <h2 className="headlines mb-3">Ekstra information</h2>
                    <ul className="guideList">
                        <li>Kan ses på pc, tablet og mobil
                            <ul>
                                <li>Dog fungere det bedre på skærme større end mobiltelefoner.</li>
                            </ul>
                        </li>
                        <li>Data hentes fra <a href="https://www.energidataservice.dk/tso-electricity/Elspotprices" target="_blank">ENERGI DATA SERVICE</a>
                            <ul>
                                <li>Her kan data'en downloades i CSV, JSON eller XLSX (Excel) format. </li>
                            </ul>
                        </li>
                    </ul>
                </Col>
            </Row>


        </Container>
    )
}

export default Guide