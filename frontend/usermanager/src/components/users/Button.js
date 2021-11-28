import React from 'react'
import { ButtonAddOrEditStyle, BtnWrap } from '../styledComponents/Buttons';

const Button = (props) => {
    //className={classes.title}
    return (
       
            <ButtonAddOrEditStyle backColor={props.backColor} onClick={props.HandlePress}>{props.butttoTitle}

            </ButtonAddOrEditStyle>
        
    )
}

export default Button
