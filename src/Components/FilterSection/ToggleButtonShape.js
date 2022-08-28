import React, { useState, useEffect } from "react";
import { Col } from "reactstrap";

const ToggleButtonShape = ({
  keyData,
  title,
  searchFilter,
  setSearchFilter,
}) => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    updateMainState(checked);
  }, [checked]);

  useEffect(() => {
    if (searchFilter.shapes.includes(title.toLowerCase())) {
      setChecked(true);
    }
  }, [searchFilter]);

  function updateMainState(chk) {
    let prevState = [...searchFilter.shapes];
    if (searchFilter.shapes.length > 0) {
      if (prevState.includes(title.toLowerCase())) {
        if (!chk) {
          prevState = prevState.filter((i) => i !== title.toLowerCase());
          setSearchFilter({ ...searchFilter, shapes: prevState });
        }
      } else {
        prevState.push(title.toLowerCase());
        setSearchFilter({ ...searchFilter, shapes: prevState });
      }
    } else {
      if (chk) {
        prevState.push(title.toLowerCase());
        setSearchFilter({ ...searchFilter, shapes: prevState });
      }
    }
  }

  function handleOnChange() {
    setChecked(!checked);
  }
  return (
    <Col key={keyData} lg={1}>
      <div className="toggle-button-shape">
        <input type={"checkbox"} checked={checked} />
        <div onClick={() => handleOnChange()} className="toggle-button">
          <img
            alt=""
            src="https://www.diamonds.pro/wp-content/uploads/2021/01/Round-cut.jpg"
          />
          <span className="title">{title}</span>
        </div>
      </div>
    </Col>
  );
};

export default React.memo(ToggleButtonShape);
