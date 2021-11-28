import React from 'react'
import UseFetch from '../hooks/UseFetch';
import { useParams } from 'react-router-dom';
import UserForm from '../components/users/UserForm';
import { useNavigate } from 'react-router-dom';
import { Title } from '../components/styledComponents/TitleStyle'
import { Loading } from '../components/styledComponents/Loader';
const EditUser = () => {

    let userInitialData;
  
    const navigate = useNavigate();
    const { uid } = useParams();




    const deleteUser = (id) => {

            let user = {
            id: id
        }
        const BASE_URL = 'http://localhost:8000/api/users/delete-users';


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
        let userData={};
        userData.id = uid;
        const BASE_URL = 'http://localhost:8000/api/users/edit-users';


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
        return <Loading></Loading>
    }




    if (users) {
        users.map((u) => {

            if (u.id == uid) {

                return userInitialData = u;
            }
        })
    }

    if (!userInitialData) {

        return <Loading></Loading>
    }

    return (
        <>
            <Title color='#35586C'>Edit User</Title>



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





