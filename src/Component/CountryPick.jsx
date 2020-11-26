import React, { useEffect, useState } from "react";
import { fetchData } from "../Api";
import { FormGroup, Label, Input, Col } from "reactstrap";

const CountryPick = ({ handleCountryChange }) => {
  const [countryPick, setCountry] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      setCountry(await fetchData());
    }

    fetchApi();
  }, []);

  return (
    <Col sm="12" md={{ size: 6, offset: 3 }} >
      <FormGroup
        defaultValue=""
        onChange={(e) => handleCountryChange(e.target.value)}
      >
        <Label for="exampleSelect">Select</Label>
        <Input type="select" id="countrySelect" >
          <option value=""></option>
          {countryPick.map((country, i) => (
            <option key={i} value={country}>
              {country}
            </option>
          ))}
        </Input>
      </FormGroup>
    </Col>
  );
};
export default CountryPick;
