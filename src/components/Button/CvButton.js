import React from "react";
import { Button } from "@mui/material";
import "./CvButton.css";

export default function CvButton({ text, icon }) {
  return (
    <Button
      className="site-button"
      endIcon={
        icon ? <div className={"button-icon-container"}>{icon}</div> : null
      }
    >
      <span className={"button-text"}>{text}</span>
    </Button>
  );
}
