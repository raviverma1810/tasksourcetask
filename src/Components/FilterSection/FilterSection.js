import { Slider } from "@mui/material";
import { styled } from "@mui/system";
import React, { useState, useEffect } from "react";
import { Row, Col } from "reactstrap";
import FieldLabel from "../FieldLabel";
import "./FilterSection.scss";
import { useDispatch, useSelector } from "react-redux";
import ToggleButtonShape from "./ToggleButtonShape";
import ToggleButtonText from "./ToggleButtonText";
import { setFilter } from "../../Redux/states/search_filter";

export default function FilterSection() {
  const dispatch = useDispatch();
  const filterData = useSelector((state) => state.searchFilter);
  const [searchFilter, setSearchFilter] = useState(
    localStorage.getItem("filters")
      ? JSON.parse(localStorage.getItem("filters"))
      : filterData
  );

  useEffect(() => {
    if (localStorage.getItem("filters")) {
      setSearchFilter(JSON.parse(localStorage.getItem("filters")));
    } else {
      setSearchFilter({ ...searchFilter, shapes: ["round"] });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("filters", JSON.stringify(searchFilter));
    dispatch(setFilter(searchFilter));
  }, [searchFilter]);

  useEffect(() => {
    //console.log(filterData);
  }, [filterData]);

  const shape_data = [
    { title: "Round" },
    { title: "Princess" },
    { title: "Cushion" },
    { title: "Emerald" },
    { title: "Oval" },
    { title: "Radiant" },
    { title: "Asscher" },
    { title: "Marquiese" },
    { title: "Heart" },
    { title: "Pear" },
    { title: "Other" },
    { title: "All" },
  ];

  const clarity_data = [
    "FL",
    "IF",
    "VVS1",
    "VVS2",
    "VS1",
    "VS2",
    "SI1",
    "SI2",
    "SI3",
    "I1",
    "I2",
    "I3",
  ];

  const colour_data = [
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q+",
  ];

  const AirbnbSlider = styled(Slider)(({ theme }) => ({
    color: "#3a8589",
    height: 3,
    padding: "13px 0",
    "& .MuiSlider-thumb": {
      height: 20,
      width: 20,
      backgroundColor: "#f9f9f9",
      border: "1px solid currentColor",
      "&:hover": {
        boxShadow: "0 0 0 8px rgba(58, 133, 137, 0.16)",
      },
      "& .airbnb-bar": {
        height: 9,
        width: 1,
        backgroundColor: "currentColor",
        marginLeft: 1,
        marginRight: 1,
      },
    },
    "& .MuiSlider-track": {
      height: 3,
    },
    "& .MuiSlider-rail": {
      color: theme.palette.mode === "dark" ? "#bfbfbf" : "#d8d8d8",
      opacity: theme.palette.mode === "dark" ? undefined : 1,
      height: 3,
    },
  }));

  function generateShapesButtons(item, index) {
    return (
      <ToggleButtonShape
        keyData={`data-item-${index}`}
        title={item.title}
        searchFilter={searchFilter}
        setSearchFilter={setSearchFilter}
      />
    );
  }

  return (
    <div className="filter-section">
      {/* Shapes filter start */}
      <FieldLabel text="Shapes" />
      <div className="shapes-buttons">
        <Row className="section-margin">
          {shape_data.map(generateShapesButtons)}
        </Row>
      </div>
      {/* Shapes filter closed */}

      {/* Range Section start */}
      <Row className="section-margin">
        <Col lg={6}>
          <FieldLabel text="Carat" />
          <div style={{ padding: "0px 20px", marginTop: "10px" }}>
            <AirbnbSlider
              getAriaLabel={() => "Temperature range"}
              max={30}
              min={0.2}
              value={searchFilter.carat}
              onChange={(e, val) => {
                setSearchFilter({ ...searchFilter, carat: val });
              }}
              valueLabelDisplay="auto"
            />
          </div>
        </Col>
        <Col lg={6}>
          <FieldLabel text="Price" />
          <div style={{ padding: "0px 20px", marginTop: "10px" }}>
            <AirbnbSlider
              getAriaLabel={() => "Temperature range"}
              max={30654}
              min={47}
              value={searchFilter.price}
              onChange={(e, val) => {
                setSearchFilter({ ...searchFilter, price: val });
              }}
              valueLabelDisplay="auto"
            />
          </div>
        </Col>
      </Row>
      {/* Range Section closed */}

      {/* Text Filter starts */}
      <Row className="section-margin">
        <Col lg={6}>
          <FieldLabel text={"Clarity"} />
          <div className={"section-flexible-row data-margin"}>
            {clarity_data.map((item, index) => (
              <ToggleButtonText
                keyData={`clarity-${index}`}
                title={item}
                stateKey="clarity"
                searchFilter={searchFilter}
                setSearchFilter={setSearchFilter}
              />
            ))}
          </div>
        </Col>
        <Col lg={6}>
          <FieldLabel text={"Colour"} />
          <div className={"section-flexible-row data-margin"}>
            {colour_data.map((item, index) => (
              <ToggleButtonText
                keyData={`colour-${index}`}
                title={item}
                stateKey="colour"
                searchFilter={searchFilter}
                setSearchFilter={setSearchFilter}
              />
            ))}
          </div>
        </Col>
      </Row>
      {/* Text Filter closed */}

      <button className="theme-button-1">Advance Search</button>
    </div>
  );
}
