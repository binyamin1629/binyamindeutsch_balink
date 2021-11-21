import React from 'react'
import UseFetch from '../hooks/UseFetch';
import { useParams } from 'react-router-dom';
import UserForm from '../components/users/UserForm';
import { useNavigate } from 'react-router-dom';


const EditUser = () => {
 
    var userInitialData;
    var userData = {};
    const navigate = useNavigate();
    const { uid } = useParams();




    const deleteUser = (id) => {

        console.log(id)
        let user = {
            id: id
        }
        const BASE_URL = '/users/delete-user';


        fetch(BASE_URL, {
            method: 'DELETE',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(() => {
            navigate('/')
        })

    }



    const editUser = (userdata) => {

        userData.id = uid;
        const BASE_URL = '/users/edit-user';


        fetch(BASE_URL, {
            method: 'POST',
            body: JSON.stringify(userdata),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(() => {
            navigate('/')
        })

    }

    const { loading, users } = UseFetch();


    if (loading) {
        return <section>
            <p>Loading...</p>
        </section>
    }




    if (users) {
        users.map((u) => {

            if (u.id == uid) {

                return userInitialData = u;
            }
        })
    }

    if (!userInitialData) {
        console.log(users)
        return <div>Loading user Data</div>
    }

    return (
        <>
             <h1 style={{color:'#35586C'}}>Edit User</h1>  



            <UserForm userInitialData={userInitialData}
                onSubmitUser={editUser}
                butttoTitle="Save"
                onDeleteUser={deleteUser}
                fname={userInitialData.first_name}
                lname={userInitialData.last_name}
            />
        </>
    )





}

export default EditUser





