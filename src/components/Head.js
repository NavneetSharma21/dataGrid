import React from "react";

export default function Head(props) {
   
  return (
    <div className="head">
      <button>{props.Picture}</button>
      <button>{props.UserInfo}</button>
      <button onClick={props.sortByLastSeen}>
        {props.LastSeen} 
        </button>
      <button onClick={props.sortByOrders}>
        {props.Orders}
      </button>
      <button onClick={props.sortByTotalSpent}>
        {props.TotalSpent} 
      </button>
      <button onClick={props.sortByLatestPurchase}>
        {props.LatestPurchase} 
      </button>
      <button>{props.News}</button>
      <button>{props.Segments}</button>
    </div>
  );
}
