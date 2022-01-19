import React from "react";
import { Alert as AlertBootstrap } from "react-bootstrap";

const Alert = ({ message }) => {
    return <AlertBootstrap variant="danger">{message}</AlertBootstrap>;
};

export default Alert;
