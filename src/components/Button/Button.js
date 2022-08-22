import React from "react";
import { Button } from "@mui/material";
import "./Button.css";

export default function CustomButton({ text, icon }) {
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
