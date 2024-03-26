import React from "react";
const Users = (props) =>{
    return(
        <div className="user">
        <div className="img">
          <img src={props.image} alt="" />
        </div>
        <p>{props.name}</p>  
        <p>{props.date}</p>
        <p>{props.order}</p>
        <p>{props.spent}</p>
        <p>{props.purchaseDate}</p>
        <img className="news" src={props.news} alt="right" />
        <p className="segment">{props.segment}</p>
      </div>
    )
}

export default Users;