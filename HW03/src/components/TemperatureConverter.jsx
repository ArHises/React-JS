import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
// import PropTypes from "prop-types";

export default function TemperatureConverter() {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");

  const convertTemperature = () => {
    if (celsius !== "") {
      const fahrenheit = (parseFloat(celsius) * 9) / 5 + 32;
      setFahrenheit(fahrenheit.toFixed(2));
      setCelsius("");
    } else if (fahrenheit !== "") {
      const celsius = ((parseFloat(fahrenheit) - 32) * 5) / 9;
      setCelsius(celsius.toFixed(2));
      setFahrenheit("");
    }
  };

  return (
    <>
      <TextField
        id="outlined-basic"
        label="C°"
        variant="outlined"
        value={celsius}
        onChange={(e) => setCelsius(e.target.value)}
        margin="normal"
      />
      <TextField
        id="outlined-basic"
        label="F°"
        variant="outlined"
        value={fahrenheit}
        onChange={(e) => setFahrenheit(e.target.value)}
        margin="normal"
        style={{ marginLeft: "20px" }}
      />
      <Button onClick={convertTemperature}>Convert</Button>
    </>
  );
}

// TemperatureConverter.propTypes = {
//   celsius: PropTypes.string,
//   fahrenheit: PropTypes.string,
// };
