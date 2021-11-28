import React from 'react';
import UserForm from '../components/users/UserForm';
import {useNavigate} from 'react-router-dom';
import {Title} from '../components/styledComponents/TitleStyle';

const Adduser = () => {

    const BASE_URL='http://localhost:8000/api/users/add-users';
    const navigate = useNavigate();

    const AddnewUser=(userdata)=>{
        console.log(userdata)
        fetch(BASE_URL,{
            method:'PUT',
            body:JSON.stringify(userdata),
            headers:{
                'Content-Type':'application/json'
            }
        }).then(()=>{
            navigate('/')
        })

    }

    const userInitialData={
        first_name:'',
        last_name:'',
        age:'Age',
        phone:''
    }

    return (
        <>
             <Title color='#35586C'>Add User </Title>  
            <UserForm userInitialData={userInitialData} onSubmitUser={AddnewUser} butttoTitle="Add"/>
        </>
    )
}
export default Adduser;