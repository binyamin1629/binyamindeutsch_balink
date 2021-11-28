import React from 'react'
import SingleUser from './SingleUser'
import { useNavigate } from 'react-router-dom';
import {TableWrap,Table,TrHead,Th,PlusWrap,PlusIcon} from '../styledComponents/TableStyle'

const UsersList = (props) => {
    const navigate = useNavigate();

    const goToAddUser = (e) => {
        e.preventDefault();
        navigate('/add-user');
    }



    return (
        <TableWrap>

            <Table>
                <thead>
                    <TrHead>

                        <Th>ID</Th>
                        <Th>First Name</Th>
                        <Th>Last Name</Th>
                        <Th>Age</Th>
                        <Th>Phone</Th>
                        <Th></Th>
                        <Th></Th>
                        <Th></Th>
                      

                    </TrHead>
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
            </Table>
            <PlusWrap>
                <PlusIcon onClick={goToAddUser}>&#43;</PlusIcon>
            </PlusWrap>
        </TableWrap>
    )
}

export default UsersList
