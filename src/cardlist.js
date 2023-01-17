import React from "react";
import Card from "./card"

const cardList=({Robot})=>{

        const cardComponenet=Robot.map((user)=>{
            return <Card key={user.id} name={user.name} email={user.email} id={user.id}/>
        })

    return (
        <div>
        {cardComponenet}
        </div>
    );
}
export default cardList;