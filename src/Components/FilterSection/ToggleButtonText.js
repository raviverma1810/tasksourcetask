import React, { useState, useEffect } from "react";

const ToggleButtonText = ({
  keyData,
  title,
  stateKey,
  searchFilter,
  setSearchFilter,
}) => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    updateMainState(checked);
  }, [checked]);

  useEffect(() => {
    if (searchFilter[stateKey].includes(title.toLowerCase())) {
      setChecked(true);
    }
  }, [searchFilter]);

  function updateMainState(chk) {
    let prevState = [...searchFilter[stateKey]];
    if (searchFilter[stateKey].length > 0) {
      if (prevState.includes(title.toLowerCase())) {
        if (!chk) {
          prevState = prevState.filter((i) => i !== title.toLowerCase());
          setSearchFilter({ ...searchFilter, [stateKey]: prevState });
        }
      } else {
        prevState.push(title.toLowerCase());
        setSearchFilter({ ...searchFilter, [stateKey]: prevState });
      }
    } else {
      if (chk) {
        prevState.push(title.toLowerCase());
        setSearchFilter({ ...searchFilter, [stateKey]: prevState });
      }
    }
  }

  function handleOnChange() {
    setChecked(!checked);
  }

  return (
    <div key={keyData} className="toggle-button-shape toggle-text">
      <input type={"checkbox"} checked={checked} />
      <div onClick={handleOnChange} className="toggle-button">
        <span className="title">{title}</span>
      </div>
    </div>
  );
};

export default React.memo(ToggleButtonText);
