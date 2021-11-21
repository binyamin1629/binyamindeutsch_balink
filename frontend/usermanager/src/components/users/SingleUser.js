import React from 'react'
import { useNavigate } from 'react-router-dom';
import classes from './singleuser.module.css';

const SingleUser = (props) => {

    const navigate = useNavigate();

    const goToEditUser = () => {
        navigate(`edit-user/${props.id}`)
    }
    console.log(props.index)

    return (

        

            <tr  onClick={goToEditUser} 
            
            className={props.index%2==0?classes.table_body:classes.table_body_gray}>
              
                <td>{props.id}</td>
                <td>{props.first_name}</td>
                <td>{props.last_name}</td>
                <td>{props.age}</td>
                <td>{props.phone}</td>
                <td></td>
                <td></td>
                <td></td>
               
               
            </tr>

       


    )
}

export default SingleUser
