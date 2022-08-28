import React from "react";
import "./FieldLabel.scss";

export default function FieldLabel({ text, ...rest }) {
  return (
    <div className="field-label">
      <strong>{text}</strong>
    </div>
  );
}
