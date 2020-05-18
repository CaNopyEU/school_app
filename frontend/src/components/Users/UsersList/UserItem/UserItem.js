import React from "react";

import './UserItem.css';

const userItem = props => (
    <li key={props.userId} className="users__list-item">

            <h1>{props.email}</h1>
            <h2>${props.userId}</h2>
        <div>
            <button className="btn" >View Details</button>
        </div>
    </li>
);

export default userItem;