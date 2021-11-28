import React from 'react'
import { InputStyle } from '../styledComponents/InputAndSelect';



const Input = (props) => {

    const inputHandler = (e) => {

        props.HandleInputEvent(e, props.name);
    }



    return (
        <>

            < InputStyle type={props.type} required
                onChange={inputHandler}
                value={props.val}
                placeholder={props.placeholder}
                NotValid={props.NotValid}
            />

        </>
    )
}

export default Input
