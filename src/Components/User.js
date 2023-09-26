import React from "react";
import axios from "axios";


function User(properties) {

    const deleteUser = (user_id) => {
        axios.delete(`http://localhost:8000/users/${user_id}`, {})
            .then(resp => {
                alert('User deleted' + resp.data)
            })
            .catch(error => {
                console.log(error)
            })
    }

    return <div>
        <p>
            <span>
                {properties.user.userName} : {properties.user.userEmail} : {properties.user.userPhone}\
                <button className='btn btn-danger'></button>
            </span>
        </p>
    </div>
}


export default User