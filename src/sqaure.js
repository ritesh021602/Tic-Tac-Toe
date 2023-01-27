import React, { StrictMode } from "react";
import { useState } from 'react';
import { createRoot } from "react-dom/client";
import "./styles.css";
export default function Sqaure(props){
    
    return <div ><button className="square" onClick={props.onSquareClick}>{props.value}</button></div>;
}
