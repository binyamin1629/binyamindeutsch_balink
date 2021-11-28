import React from 'react'
import { useNavigate } from 'react-router-dom';
import { TrBody,Td } from '../styledComponents/TableStyle';
const SingleUser = (props) => {

    const navigate = useNavigate();

    const goToEditUser = () => {
        navigate(`edit-user/${props.id}`)
    }
   

    return (

 
        <TrBody onClick={goToEditUser} TrColor={props.index%2==0?'#f5f5f5':''}>



            <Td>{props.id}</Td>
            <Td>{props.first_name}</Td>
            <Td>{props.last_name}</Td>
            <Td>{props.age}</Td>
            <Td>{props.phone}</Td>
            <Td></Td>
            <Td></Td>
            <Td></Td>


        </TrBody>




    )
}

export default SingleUser
