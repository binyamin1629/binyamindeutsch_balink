import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Input from './Input';
import Select from './Select';
import Button from './Button';
import Validation from './Validation';

import Card from '../ui/Card';
import { FormWrap } from '../styledComponents/UserFormContainer';
import { BtnWrap } from '../styledComponents/Buttons';
import { UserInfoWrap, IconWrap, UserInfo,Image } from '../styledComponents/UserInfosStyle'









const UserForm = (props) => {


    const { uid } = useParams();
    const navigate = useNavigate();


    const [user, setUser] = useState({
        firstName: props.userInitialData.first_name,
        lastName: props.userInitialData.last_name,
        age: props.userInitialData.age,
        phone: props.userInitialData.phone
    });


    const [currentChange, setCurrentChange] = useState(

        {
            isOnChangEventFirstName: false,
            isOnChangEventLastName: false,
            isOnChangEventPhone: false,
            isOnChangEventAge: false,
        }
    );





    const handleDelete = (event) => {
        event.preventDefault();

        if (uid) {

            props.onDeleteUser(uid);
        }

    }


    const submitHandler = (event) => {
        event.preventDefault();



        if (user.phone.length < 9 || isNaN(user.phone) || user.firstName.length < 3 || user.lastName.length < 3) {

            setCurrentChange({
                isOnChangEventFirstName: true,
                isOnChangEventLastName: true,
                isOnChangEventPhone: true,
                isOnChangEventAge: true,
            });
            return;
        }




        const Finaluser = {
            first_name: user.firstName,
            last_name: user.lastName,
            age: user.age,
            phone: user.phone
        }
        

        if (uid) {
            Finaluser.id = uid;
        }

        props.onSubmitUser(Finaluser);

    }



    const HandleInput = (e, name) => {


        switch (name) {
            case 'first_name':
                setUser({ ...user, firstName: e.target.value });
                setCurrentChange({ ...false, isOnChangEventFirstName: true });
                break;
            case 'last_name':
                setUser({ ...user, lastName: e.target.value })
                setCurrentChange({ ...false, isOnChangEventLastName: true });
                break;
            case 'age':
                setUser({ ...user, age: e.target.value });
                setCurrentChange({ ...false, isOnChangEventAge: true });
                break;
            case 'phone':
                setUser({ ...user, phone: e.target.value })
                setCurrentChange({ ...false, isOnChangEventPhone: true });
                break;
            default:
                break;
        }

     

    }



    const goToHome = () => {
        navigate('/');
    }



    return (
        <Card>

            {props.fname ?
                <UserInfoWrap>

                    <IconWrap>
                        <Image src="https://avatars.dicebear.com/api/human/:seed.svg" alt="" />
                    </IconWrap>

                    <UserInfo>
                        <span>{props.fname} {props.lname}</span>
                    </UserInfo>

                </UserInfoWrap>
                : null
            }

            <FormWrap>

                <Input HandleInputEvent={HandleInput}
                    val={user.firstName}
                    placeholder="First Name"
                    type="Text"
                    name="first_name"
                    NotValid={currentChange.isOnChangEventFirstName && user.firstName.length < 3 ? true : false}
                />

                {currentChange.isOnChangEventFirstName && user.firstName.length < 3 ?
                    <Validation validationName="Filed must have at list 3 Charters" />
                    : null}

                <Input HandleInputEvent={HandleInput}
                    val={user.lastName}
                    placeholder="Last Name"
                    type="Text"
                    name="last_name"
                    NotValid={currentChange.isOnChangEventLastName && user.lastName.length < 3 ? true : false}
                />

                {currentChange.isOnChangEventLastName && user.lastName.length < 3 ?
                    <Validation validationName="Filed must have at list 3 Charters" /> : null}
                <Select
                    val={user.age}
                    HandleInputEvent={HandleInput}
                    name="age"
                />

                {currentChange.isOnChangEventAge && user.age == "Age" ?
                    <Validation validationName="You Must Select Age" /> : null}


                <Input HandleInputEvent={HandleInput}
                    val={user.phone}
                    placeholder="Phone"
                    type="tel"
                    name="phone"
                    NotValid={currentChange.isOnChangEventPhone ? isNaN(user.phone) || user.phone.length < 10 ? true : false : null}
                />

                {currentChange.isOnChangEventPhone && isNaN(user.phone) ? <Validation validationName="Field Must Have Only Numbers" /> : null}
                {currentChange.isOnChangEventPhone && user.phone.length < 10 ?
                    <Validation validationName="Field Must Have At List 10 Charters" /> : null}


                <BtnWrap>

                    <Button
                        butttoTitle={props.butttoTitle}
                        HandlePress={submitHandler}
                        backColor='#35586C'
                    />
                    {props.onDeleteUser ? <Button backColor="#DAA520" butttoTitle="Delete" HandlePress={handleDelete} /> : null}
                    <Button
                        butttoTitle="Back"
                        HandlePress={goToHome}
                        backColor='#8B0000'
                    />

                </BtnWrap>

            </FormWrap>
        </Card>

    )
}

export default UserForm
