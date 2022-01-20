import { useEffect, useState } from 'react';
import Navbar from '../navbar/Navbar';
import './users.css';

function EnabledUsers() {

    const defaultUser = {
        appUserId: 1,
        user_name: "ShouldNotSeeMe",
        password: "AhhBeansImUnencoded",
        disabled: false
    }




    const [userList, setUserList] = useState([]);
    const [errors, setErrors] = useState([]);
    const getEnabledUsers = () => {
        const jwt = localStorage.getItem("jwt_token");

        const init = {
            headers: {
                "Authorization": "Bearer " + jwt
            },
        };

        return fetch('http://localhost:8080/api/users/enabled', init)
            .then(response => response.json())
            .then(
                body => setUserList(body));
    }

    console.log(userList);


    useEffect(() => {
        getEnabledUsers();
    }, [])


    const disableMe = (e) => {
        // e.preventDefault();
        console.log(e)
        const userToDisable = { ...defaultUser }
        userToDisable.appUserId = e.userId;
        userToDisable.user_name = e.userName;
        userToDisable.password = e.password;
        userToDisable.disabled = true;
        userToDisable.roles = e.roles;


        const jwt = localStorage.getItem("jwt_token");

        let init = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                "Authorization": "Bearer " + jwt
            },
            body: JSON.stringify({
                appUserId: userToDisable.appUserId,
                username: userToDisable.user_name,
                password: "$2a$10$ntB7CsRKQzuLoKY3rfoAQen5nNyiC/U60wBsWnnYrtQQi8Z3IZzQa",
                disabled: true,
                roles: ["USER"]
            })
        }

        fetch(`http://localhost:8080/api/users/enabled/${userToDisable.appUserId}`, init)
            .then(response => {
                console.log("hi")
                if (response.status === 204) {
                    getEnabledUsers();
                    return null;
                } else if (response.status === 400) {
                    console.log(response);
                    return response.json();
                } else if (response.status === 404) {
                    return [`User ${userToDisable.appUserId} does not exist`]
                }
                return Promise.reject("Error Occured");
            })
            .then(body => {
                if (!body) {
                    console.log("Success");
                    setErrors([]);
                } else {
                    setErrors(body);
                }
            }).catch(error => console.log(error));


    }



    return (
        <div className='user-body'>
            <Navbar />
            <h3 class="text-center user-header">Active User List</h3>
            <br />

            {
                errors.length > 0 && (
                    <div>
                        <ul>
                            {errors.map((error, index) => <li key={`error${index}`}>{error}</li>)}
                        </ul>
                    </div>)
            }

            {userList.length > 0 ? (
                <table className='users-table table'>
                    <thead>
                    <tr className='users-table-header'>
                        <th>User</th>
                        <th>High Score</th>
                        <th>Active</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {userList.map(user => <tr key={user.highScoresId}>
                        <td>{user.userName}</td>
                            <td>{user.highScore}</td>
                            <td>{(!user.disabled) ? "Yes" : "No"} </td>
                            <td>
                                <button className='able-btn' onClick={() => disableMe(user)}>Disable</button>
                            </td>
                            
                        </tr>
                    
                    )}
                    </tbody>
                </table>
            ) : (
                <div>No users to list.</div>
            )}
        </div>
    )
}

export default EnabledUsers;