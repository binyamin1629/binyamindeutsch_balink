import React from 'react'
import { VdlidationStyle } from '../styledComponents/InputAndSelect'

const Validation = (props) => {

    return (
        <VdlidationStyle>
            {props.validationName}
        </VdlidationStyle>
    )
}

export default Validation
