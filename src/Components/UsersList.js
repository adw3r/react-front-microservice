import React from "react";
import User from "./User";



function UsersList(props) {

    return (
        <div>
            <ul>
                {
                    props.usersList.map(
                        (user, index) => {
                            return (<User
                                user={user} key={index}
                                usersList={props.usersList}
                                setUserId={props.setUserId}
                                setUserName={props.setUserName}
                                setUserEmail={props.setUserEmail}
                                setUserPhone={props.setUserPhone}
                                setUserPassword={props.setUserPassword}
                                deleteUser={props.deleteUser}
                            />)
                        }
                    )
                }
            </ul>
        </div>
    )
}

export default UsersList;