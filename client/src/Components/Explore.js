import React from "react";
import { useState } from "react";
import TrailsContainer from "./TrailsContainer";
import getStateId from "./HelperActions/GetStateId";
import Map from "./Map";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import { useLoadScript } from "@react-google-maps/api";
import { Button } from "@mui/material";

export default function Explore() {
  const [userSearch, setUserSearch] = useState({
    city: "",
    state: "",
  });
  const [errors, setErrors] = useState([]);
  const [trails, setTrails] = useState([]);

  function stateInput(e) {
    const stateCopy = {
      ...userSearch,
    };
    stateCopy.state = getStateId(e.target.value);
    setUserSearch(stateCopy);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setUserSearch({ ...userSearch, [name]: value });
    console.log("name:", name, "value:", value);
  }

  //post request to trails tell it what data is needed
  function onSubmit(e) {
    e.preventDefault();
    console.log("submitted");
    console.log("usersearch:", userSearch);

    fetch("/trails", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userSearch),
    }).then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          console.log("data from fetch:", data);
          setTrails([data]);
        });
      } else {
        res.json().then((errors) => setErrors([...errors.error]));
      }
    });
  }

  function renderOptions() {
    const allstates = getStateId("all");
    const stateNames = [];
    // console.log(allstates)
    for (let state in allstates) {
      // console.log(allstates[state])
      // if (state==="AL"){
      //   stateNames.push(<option defaultValue={allstates[state].abbreviation}key={allstates[state].id}>{allstates[state].name}</option>)
      // }
      // else{
      stateNames.push(
        <option value={allstates[state].abbreviation} key={allstates[state].id}>
          {allstates[state].name}
        </option>
      );
    }
    return stateNames;
  }

  return (
    <main className="explore-page">
      <Box component="form" autoComplete="off" onSubmit={onSubmit}>
        <div>
          {/* <form onSubmit={onSubmit}> */}
          <Input
            type="text"
            name="city"
            value={userSearch.city}
            placeholder="City"
            onChange={handleChange}
          ></Input>
          <select onChange={stateInput}>{renderOptions()}</select>
          <Button onClick={onSubmit} variant="outlined">
            submit
          </Button>
          {/* </form> */}
        </div>

        <div className="results">
          {trails.length > 0 ? (
            <TrailsContainer trails={trails} errors={errors} />
          ) : null}
        </div>
      </Box>

      <div className="map-container">{/* <Map /> */}</div>
    </main>
  );
}
