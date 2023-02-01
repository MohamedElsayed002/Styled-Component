
import React from 'react'
import styled , {keyframes} from 'styled-components'

const rotate = keyframes`
   0% {
    background-color : white;
   } 
   100% {
    background-color : black;
   }
`



const IconStyle = styled.div`
border-radius: 50%;
width:50px;
height:50px;
animation: ${rotate} 1s linear infinite;

background-color : ${({primary}) => primary ? 'green' : 'red'}; 
border: ${({border}) => border ||  'solid 3px blue'}};
margin-left : ${({status}) => {
    if (status === 'in-progress') return '0px';
    else if (status === 'completed') return '50px';
    else return '450px';
}}

`


const Icons = ({primary,border,status}) => {

    return (
        <IconStyle status={status} border={border} primary={primary}></IconStyle>
    )
}


export default Icons