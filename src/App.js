import React, { Component } from "react";
import CountryPick from "./Component/CountryPick";
import { fetchCountry } from "./Api";
import DailyData from "./Component/DailyData";
import { Col, Container, Media, Row } from "reactstrap";

export default class App extends Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const data = await fetchCountry();

    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchCountry(country);

    this.setState({ data, country: country });
    console.log({ country });
  };

  render() {
    const { data, country } = this.state;
    return (
      <div>
        <Container fluid={true}>
          <Row xs="1">
            <Col sm="12" md={{ size: 6, offset: 3 }}>
              <Media src="https://cdn.pixabay.com/photo/2020/03/31/02/20/virus-4986015__340.png"></Media>
            </Col>
            <Col>
              <h1 style={{ textAlign: "center" }}>
                {country === "" ? "Global" : country}
              </h1>
            </Col>
            <DailyData data={data}></DailyData>
            <Col>
              <CountryPick handleCountryChange={this.handleCountryChange} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
