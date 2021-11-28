import React, { useEffect, useState } from 'react'
import { SelectStyle } from '../styledComponents/InputAndSelect'





//need to solve styling 
const Select = (props) => {


    const selectHandler = (e) => {


        props.HandleInputEvent(e, props.name);
    }


    //let is limited only to his scope let wont work in this case.
    var arr = [];
    const [options, setOptions] = useState(new Array(121));

    useEffect(() => {



        arr = Array.apply(null, { length: 121 }).map((elem, idx) => {
            return idx + 1;
        });





        setOptions(arr)

    }, [])

    //console.log(props.val)

    return (

        <SelectStyle
            value={props.val}
            onChange={selectHandler}
        >
            <option defaultValue="Age">Age</option>
            {
                options.map((i) => {
                    return <option key={i} value={i}>{i}</option>
                })
            }
        </SelectStyle>
    )
}

export default Select
