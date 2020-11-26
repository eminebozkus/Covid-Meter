import React from 'react';
import Cards from './Cards'
import { Col, Container, Row } from "reactstrap";

const DailyData = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
    if (!confirmed) {
        return 'Loading...';
    }
    return (
        <div>
            <Container>
                <Col >
                    <Row xs="3" >
                        <Cards className={confirmed}
                            cardTitle="Infected"
                            value={confirmed.value}
                            lastUpdate={lastUpdate}
                            cardSubtitle="Number of active cases from COVID-19."  >
                        </Cards>
                        <Cards className={recovered}
                            cardTitle="Recovered"
                            value={recovered.value}
                            lastUpdate={lastUpdate}
                            cardSubtitle="Number of recoveries from COVID-19."
                        >
                        </Cards>
                        <Cards className={deaths}
                            cardTitle="Deaths"
                            value={deaths.value}
                            lastUpdate={lastUpdate}
                            cardSubtitle="Number of deaths caused by COVID-19."
                        >
                        </Cards>
                    </Row>
                </Col>
            </Container>
        </div>
    );
}
export default DailyData;