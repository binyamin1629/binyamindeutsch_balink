import styled from 'styled-components';



export const InputStyle = styled.input`
border: 1px solid lightgray;
height: 35px;
width: 200px;
margin: 14px;
outline: none;
color: #a9a9a9;
::{placeholder:color: #a9a9a9;}
border:${(props) => (props.NotValid?'2px solid red;':'')}


`


export const SelectStyle = styled.select`
border: 1px solid lightgray;
height: 35px;
width: 205px;   
outline: none;
margin: 14px;
color: #a9a9a9;

`
export const VdlidationStyle = styled.div`
color: red;
margin: 0;
font-size: 12px;
align-self: center;
margin-right: 35px;
margin-top: 0px;
transform: translateY(-70%);


`