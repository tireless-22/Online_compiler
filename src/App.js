import React from 'react'

import styled from "styled-components"

const Container = styled.div`
display: flex;
width: 100vw;
height: 100vh;



`
const PythonFile = styled.div`
display: flex;
flex: 13;
background-color: red;




`

const IpOpContainer = styled.div`
  display: flex;
  flex: 7;
  background-color: blue;
  flex-direction:column;

`;


const Input = styled.div`
display: flex;
flex: 1;
background-color: green;
height: 50vh;

`

const Output = styled.div`
display: flex;
flex: 1;
background-color: yellow;
height:50vh;
`



const App = () => {
  return (
    <Container>
      <PythonFile>
        

      </PythonFile>
      <IpOpContainer>
        <Input>
          
        </Input>
        <Output>

        </Output>

        
      </IpOpContainer>




    </Container>
  )
}

export default App