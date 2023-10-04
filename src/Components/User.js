import React from "react";
import axios from "axios";


function User(props) {



    const editUser = (user) => {
        props.setUserId(user.id);
        props.setUserName(user.name);
        props.setUserPassword(user.password);
        props.setUserEmail(user.email);
        props.setUserPhone(user.phone);
    }

    return <div>
        <p>
            <span className='fw-bold'>
                    {props.user.name} : {props.user.email} : {props.user.phone}
                    <button className='btn btn-danger' onClick={() => props.deleteUser(props.user.id)}>
                        Delete
                    </button>
                    <button className='btn btn-warning' onClick={() => editUser(props.user)}>
                        Edit
                    </button>
            </span>
        </p>
    </div>
}

export default User