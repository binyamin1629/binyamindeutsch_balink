import styled from 'styled-components';


export const ButtonAddOrEditStyle = styled.button`
    border:1px solid black;
    width: 600px;
    cursor: pointer;
    outline: none;
    border-radius: 4px;
    outline: none;
    border: none;
    height: 25px;
    color:#fff;
    background-color:${(props) => props.backColor};
    font-weight: 600;
    margin:10px;
`;
export const BtnWrap = styled.div`
        
        width:55%;
        padding: 12px;
        display: flex;
        justify-content: center;
        margin-top: 10px;
       

`

//border:1px solid black;