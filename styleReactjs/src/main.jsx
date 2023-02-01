import React from 'react'
import ReactDOM from 'react-dom/client'
import Section from './components/Section'
import styled , {keyframes} from 'styled-components'
import Icon from './components/icon'
import './index.css'

const fadeIn = keyframes`
  0% {
    opacity : 0
  }
  100% {
    opacity : 1;
  }
`
const Title = styled.h1`
  color : #b19cd9;
  animation : 3s ${fadeIn} ease-in infinite;
`
const Horizontal = styled.div`
  display : flex;
  justify-content : space-between;
`



class Main extends React.Component {
  render () {
    return (
      <>
      <Title>Progress Tracker </Title>
      <div>
          <Section text='S' progress="100%"/>
          <Section text='S' progress="70%"/>
          <Section  text='M'progress="60%"/>
          <Section text='T' progress="50%"/>
          <Section text='W' progress="40%"/>
          <Section text='T' progress="20%"/>
          <Section text='F' progress="10%"/>
          <Horizontal>
             <Icon primary status={'in-progress'} />      
              <Icon  primary  border='green solid 3px'/>
          </Horizontal>
     

          {/* background-color : ${({primary}) => primary ? 'green' : 'red'};   if it's passed*/}


      </div>
      </>
    )
  }
}





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
)
