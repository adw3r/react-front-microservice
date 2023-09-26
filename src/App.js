import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import axios from "axios";


function App() {


    const [usersList, setUsersList] = useState([{}]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        axios.get('http://localhost:8000/users/')
            .then(response => {
                console.log(response.data);
                setUsersList(response.data);
                return response.data
            })
            .catch((error) => {
                console.log(error);
            });
    });

    const addUser = () => {
        let data = {
            'name': name,
            'email': email,
            'phone': phone,
            'password': password
        };
        axios.post('http://localhost:8000/users/', data)
            .then(response => {
                alert(response.data);
                return response.data
            })
            .catch(error => {
                alert(error);
            });
    }

    return (
        <div className="container">
            <div className="text-center mt-3 list-group-item justify-content-center align-items-center mx-auto"
                 style={{"width": "80vw", "backgroundColor": "white"}}>
                <h2 className="card text-white bg-primary mb-2 pb-2">Users management system</h2>
                <h6 className="card text-white bg-primary mb-4 pb-1">Manage users</h6>
                <div className="card-body">
                    <h5 className="card text-white bg-dark pb-1">Add user</h5>
                    <div className="card-text mb-2">
                        <input onChange={event => setName(event.target.value)} type="text"
                               className="form-control user-name mb-2" placeholder="Enter name:"/>
                        <input onChange={event => setEmail(event.target.value)} type="text"
                               className="form-control user-phone mb-2" placeholder="Enter phone:"/>
                        <input onChange={event => setPassword(event.target.value)} type="password"
                               className="form-control user-password mb-2"
                               placeholder="Enter password:"/>
                        <input onChange={event => setPhone(event.target.value)} type="email"
                               className="form-control student-email mb-2" placeholder="Enter email:"/>
                        <button type="submit" onClick={addUser} className="btn btn-outline-primary"
                                style={{'fontWeight': 'bold'}}>Add
                            user
                        </button>
                    </div>
                    <h5 className="card text-white bg-dark pb-1">Your users</h5>
                    <div>

                    </div>
                </div>
                <h6 className="card text-dark bg-warning зн-1">All right &copy; reserved</h6>
            </div>
        </div>
    );
}

export default App;
