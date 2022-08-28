import React from "react";

export default function DimondDetail() {
  return (
    <div
      style={{ width: "100%", height: "90vh" }}
      className="d-flex justify-content-center align-items-center flex-column"
    >
      Dimond Detail Page
      <br />
      <button
      className="theme-button-1"
        onClick={() => {
          window.history.back();
        }}
      >
        Go back to search page
      </button>
    </div>
  );
}
