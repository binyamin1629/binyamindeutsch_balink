import React from 'react'
import UserForm from '../components/users/UserForm';
import {useNavigate} from 'react-router-dom';


const Adduser = () => {

    const BASE_URL='/users/add-user';
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
             <h1 style={{color:'#35586C'}}>Add User </h1>  
            <UserForm userInitialData={userInitialData} onSubmitUser={AddnewUser} butttoTitle="Add"/>
        </>
    )
}
export default Adduser;