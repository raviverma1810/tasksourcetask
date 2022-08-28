import React, { useState, useEffect } from "react";
import "./SearchResultSection.scss";
import dimondData from "./dimonddata.json";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";

export default function SearchResultSection() {
  const filterData = useSelector((state) => state.searchFilter);
  const [data, setData] = useState([...dimondData]);
  const [filterdData, setFilterdData] = useState([...dimondData]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    let fData = [];
    let filterShapes = data.filter((i) => {
      if (filterData.shapes.length > 0) {
        if (filterData.shapes.includes("all")) {
          return true;
        } else {
          if (filterData.shapes.includes(i.shape.toLowerCase())) {
            return true;
          }
        }
      } else {
        return true;
      }
    });

    let filterClarity = filterShapes.filter((i) => {
      if (filterData.clarity.length > 0) {
        if (filterData.clarity.includes(i.clarity.toLowerCase())) {
          return true;
        }
      } else {
        return true;
      }
    });

    let filterColour = filterClarity.filter((i) => {
      if (filterData.colour.length > 0) {
        if (filterData.colour.includes(i.colour.toLowerCase())) {
          return true;
        }
      } else {
        return true;
      }
    });

    setFilterdData(filterColour);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, [filterData]);

  function generateSearchResult(item, index) {
    return (
      <Link to="/details">
        <tr key={`data-item-${index}`}>
          <td>{item.shape}</td>
          <td>{item.carat}</td>
          <td>{item.colour}</td>
          <td>{item.clarity}</td>
          <td>{item.cut}</td>
          <td>{item.lab}</td>
          <td>{item.price}</td>
          <td>
            <Link to="/details" className="theme-button-2">
              Details
            </Link>
          </td>
        </tr>
      </Link>
    );
  }

  return (
    <div className="search-result-section">
      <div className="table-container">
        <table className="datatable">
          <thead>
            <tr>
              <td>Shape</td>
              <td>Carat</td>
              <td>Colour</td>
              <td>Clarity</td>
              <td>Cut</td>
              <td>Lab</td>
              <td>Price</td>
              <td>Details</td>
            </tr>
          </thead>
          <tbody>
            {loading && (
              <div className="d-flex p-3 w-100 justify-content-center">
                <CircularProgress
                  size={20}
                  color="inherit"
                  style={{ marginRight: "10px" }}
                />
                Please wait...
              </div>
            )}
            {!loading &&
              filterdData &&
              filterdData.length > 0 &&
              filterdData.map(generateSearchResult)}
            {!loading && (!filterdData || filterdData.length <= 0) && (
              <div className="d-flex p-3 w-100 justify-content-center">
                No dimaonds founded..
              </div>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
