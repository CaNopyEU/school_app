import React from "react";

import UserItem from './UserItem/UserItem';

import './UsersList.css';

const userList = props => {
    console.log(props)
    const users = props.users.map(user => {
        return (
            <UserItem
                key={user._id}
                userId={user._id}
                email={user.email}
            />
        )
    })
    return <ul className="user__list">{users}</ul>
};

export default userList;