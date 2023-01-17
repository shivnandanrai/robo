import React from 'react';
import "./style.css";
export default function Search({searchChange}) {
    return (
        <div  className="header" >
        <h1 style={{fontSize:"5em",marginBottom:"30px"}}>ROBOFRIEND</h1>
        <input type="search" placeholder="Search Robots..." style={{width:"300px",height:"40px"}} onChange={searchChange}/>
        </div>
    )
}
