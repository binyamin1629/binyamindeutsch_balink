import styled ,{keyframes} from 'styled-components';

const spin=keyframes`
0% { -webkit-transform: rotate(0deg); }
100% { -webkit-transform: rotate(360deg); }
`
export const Loading=styled.div`
border: 16px solid #f3f3f3;
border-radius: 50%;
border-top: 16px solid #35586C;
width: 120px;
height: 120px;
-webkit-animation: spin 2s linear infinite; 
animation: ${spin} 2s linear infinite;
`

