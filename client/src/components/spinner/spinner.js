import React from "react";
import { Spinner as SpinnerBootstrap } from "react-bootstrap";

const Spinner = () => {
    return (
        <SpinnerBootstrap
            animation="border"
            role="status"
            style={{
                margin: "auto",
                display: "block",
                height: "5rem",
                width: "5rem",
            }}
        ></SpinnerBootstrap>
    );
};

export default Spinner;
