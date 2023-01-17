import React from 'react';
import Robots from "./robotarray";
import CardList from "./cardlist";
import Search from "./search";
import { useState } from "react";
export default function App() {
    const [state, setstate] = useState("");
   const onSearchChange=(event)=>{
       setstate(event.target.value);
   }
    const filterRobots=Robots.filter(robot=>{
         return robot.name.toLowerCase().includes(state.toLowerCase());
        });
    return (
        <div>
            <Search searchChange={onSearchChange} />
            <div style={{overflow:"scroll", height:"500px",border:"solid 2px black"}}>
            <CardList  Robot={filterRobots}/>
            </div>
        </div>
    )
}
