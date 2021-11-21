import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Card from '../ui/Card'
import classes from './userform.module.css'
const UserForm = (props) => {


    const { uid } = useParams();
    const navigate = useNavigate();


    const [firstName, setFirstName] = useState(props.userInitialData.first_name);
    const [lastName, setLastName] = useState(props.userInitialData.last_name);
    const [age, setAge] = useState(props.userInitialData.age);
    const [phone, setPhone] = useState(props.userInitialData.phone);

    const [validation, setValidation] = useState(
        {
            isOnChangEventFirstName: false,
            isOnChangEventLastName: false,
            isOnChangEventPhone: false,
            isOnChangEventAge: false,
        }
    );


    const [options, setOptions] = useState([]);



    useEffect(() => {
        let arr = [];
        for (var i = 0; i < 121; i++) {
            arr.push(i)
        }
        setOptions(arr)

    }, [])

    const handleDelete = (event) => {
        event.preventDefault();

        if (uid) {

            props.onDeleteUser(uid);
        }

    }


    const submitHandler = (event) => {
        event.preventDefault();
        console.log('submit handler');

        if (phone.length < 9 || isNaN(phone) || firstName.length < 3 || lastName.length < 3) {

            setValidation({
                isOnChangEventFirstName: true,
                isOnChangEventLastName: true,
                isOnChangEventPhone: true,
                isOnChangEventAge: true,
            });
            return;
        }

        const user = {
            first_name: firstName,
            last_name: lastName,
            age: age,
            phone: phone
        }
        if (uid) {
            user.id = uid;
        }

        props.onSubmitUser(user);

    }

    const handlePhone = (e) => {
        e.preventDefault();
        setValidation({ ...false, isOnChangEventPhone: true });
        setPhone(e.target.value);

    }

    const handleFirstName = (e) => {
        e.preventDefault();
        setValidation({ ...false, isOnChangEventFirstName: true });
        setFirstName(e.target.value)

    }
    const handleLastName = (e) => {
        e.preventDefault();
        setLastName(e.target.value)
        setValidation({ ...false, isOnChangEventLastName: true });
        //console.log(validation);
    }

    const handleAge = (e) => {
        e.preventDefault();
        setValidation({ ...false, isOnChangEventAge: true });
        setAge(e.target.value);


    }

    const goToHome = () => {
        navigate('/');
    }


    return (
        <Card>

            {props.fname ?
                <div className={classes.user_info_wrap}>

                    <div className={classes.icon_wrap}>
                        <img src="https://avatars.dicebear.com/api/human/:seed.svg" alt="" />
                    </div>
                    <div className={classes.user_info}>
                        <span>{props.fname} {props.lname}</span>
                    </div>

                </div>
                : null
            }

            <form onSubmit={submitHandler} className={classes.form}>



                <input type="text" required
                    className={validation.isOnChangEventFirstName && firstName.length < 3 ? classes.red : classes.input}
                    onChange={handleFirstName}
                    value={firstName}
                    placeholder="First Name"

                />

                {validation.isOnChangEventFirstName && firstName.length < 3 ? <div className={classes.error}>Filed must have at list 3  Charters</div> : ''}


                <input type="text" required
                    className={validation.isOnChangEventLastName && lastName.length < 3 ? classes.red : classes.input}
                    onChange={handleLastName} value={lastName}
                    placeholder="Last Name"

                />

                {validation.isOnChangEventLastName && lastName.length < 3 ? <div className={classes.error}>Filed must have at list 3  Charters</div> : ''}


                <select
                    value={age}
                    onChange={handleAge}
                    className={validation.isOnChangEventAge && age == 'Age' ? classes.red : classes.select}

                >
                    <option defaultValue="Age">Age</option>
                    {
                        options.map((i) => {

                            return <option key={i} value={i}>{i}</option>
                        })
                    }

                </select>
                {validation.isOnChangEventAge && age == 'Age' ? <div className={classes.error}>You Must Select Age</div> : ''}

                <input type="tel" name="phone" required
                    className={validation.isOnChangEventPhone && phone.length < 10 ? classes.red
                        || validation.isOnChangEventPhone && isNaN(phone) ? classes.red
                        : classes.input : classes.input}
                    onChange={handlePhone}
                    value={phone}
                    placeholder="Phone"
                />


                {validation.isOnChangEventPhone && phone.length < 10 ? <div className={classes.error}>Field Must Have At List 10  Charters</div> : ''}
                {validation.isOnChangEventPhone && isNaN(phone) ? <div className={classes.error}>Field Must Have Only Numbers</div> : ''}

                <div className={props.onDeleteUser ? classes.btn_warp_delete : classes.btn_warp}>
                    <button className={classes.title}>{props.butttoTitle}</button>

                    {props.onDeleteUser ? <button className={classes.delete} onClick={handleDelete}>Delete</button> : null}

                    <button className={classes.back} onClick={goToHome}>Back</button>
                </div>

            </form>
        </Card>

    )
}

export default UserForm
