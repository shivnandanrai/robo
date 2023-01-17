import React from "react";
import "./robot.css"
class Card extends React.Component
{
    render()
    {
        const {name,email,id}=this.props;
        return(
            <div className="robo">
                <img alt="robot" src={`https://robohash.org/${id}`} width="200px" height="200px"/>
                <div>
        <h1>{name}</h1> {/*we can also use "this.props.name"*/}
        <h2>{email}</h2>{/*we can also use "this.props.email"*/}
                </div>
            </div>
        )
    }
}
export default Card;