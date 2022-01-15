import styled from 'styled-components/'

export const Button = styled.button`
width:70px;
color:white;
background-color:crimson;
border:none;
padding:5px;
font-weight: 600;
cursor:pointer;
&:not(:last-child){
    margin-right:8px
};
`