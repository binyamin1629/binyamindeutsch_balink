import React from 'react'
import SingleUser from './SingleUser'
import { useNavigate } from 'react-router-dom';
import classes from './usersList.module.css';


const UsersList = (props) => {
    const navigate = useNavigate();

    const goToAddUser = (e) => {
        e.preventDefault();
        navigate('/add-user');
    }



    return (
        <div className={classes.table_warp}>

            <table cellSpacing="0">
                <thead  >
                    <tr className={classes.table_head}>

                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Age</th>
                        <th>Phone</th>
                        <th></th>
                        <th></th>
                        <th></th>
                      

                    </tr>
                </thead>

                <tbody>
                    {props.users.map((user,index) =>
                        <SingleUser
                            key={user.id}
                            id={user.id}
                            first_name={user.first_name}
                            last_name={user.last_name}
                            age={user.age}
                            phone={user.phone}
                            index={index}
                        />

                    )}

                </tbody>
            </table>
            <div className={classes.plus_warp}>
                <div className={classes.plus} onClick={goToAddUser}>&#43;</div>
            </div>
        </div>
    )
}

export default UsersList
