import styled from 'styled-components';



export const TableWrap = styled.div`

    display: flex;  
    flex-direction: column;
    border-radius: 16px;

`
export const Table = styled.table`
border-collapse: collapse;
`

export const TrHead=styled.tr`
background-color: #35586C;
border: none;
height: 40px;
color: #fff;



`


export const Th=styled.th`
font-weight: 600;
justify-self: flex-start;

`
export const PlusWrap=styled.div`
border: 1px solid black;
align-self: flex-end;
cursor: pointer;
width: 50px;
height: 50px;
display: flex;
justify-content: center;
align-items: center;
border-radius: 50%;
background-color: #35586C;
border: none;
outline: none;
margin-top: 28px;
z-index: 1;

`

export const PlusIcon=styled.div`
font-size: 56px;
align-self: center;
color: white;
transform: translateY(-10%);
font-weight: 100;
cursor: pointer;
`

export const TrBody=styled.tr`
cursor: pointer;
background-color:${(props) => props.TrColor};
&:hover{
    background-color: lightgrey;
}

`
export const Td=styled.td`
padding:15px;
text-align: center;
font-weight: 400;
`