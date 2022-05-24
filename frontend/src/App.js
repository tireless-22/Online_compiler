import React from 'react'
import "./App.css"
import styled from "styled-components"

import AceEditor from "react-ace";



import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools";

import {VscRunAll} from "react-icons/vsc"


const MainContainer = styled.div`
display: flex;
flex-direction: column;
height: 100vh;
width: 100vw;

`

const Navbar = styled.div`
display: flex;
justify-content: center;
align-items: center;
  width: 100vw;
  height: 70px;
  background-color: violet;
`;


const NameHeader = styled.div`
display: flex;
height: 40px;
width: 100%;
justify-content: center;
align-items: center;


`


const Container = styled.div`
display: flex;
width: 100vw;
height: 100vh;



`


const PythonFile = styled.div`
display: flex;
flex: 13;
background-color: red;
flex-direction: column;




`

const IpOpContainer = styled.div`
  display: flex;
  flex: 7;
  background-color: blue;
  flex-direction:column;
  flex-direction: column;

`;




const Input = styled.div`
display: flex;
flex: 1;
background-color: green;
height: 50vh;

`


const InputTextArea = styled.textarea`
  height: 100%;
  width: 100%;
`;




const Output = styled.div`
display: flex;
flex: 1;
background-color: yellow;
height:50vh;

flex-direction: column;
`



const App = () => {



  function onChange(newValue) {
    console.log("change", newValue);
  }


  function runPython(){
    
  }



  return (
    <MainContainer>
      <Navbar>
        <h1>Python Compiler</h1>
        <VscRunAll color='green' size={20}/>
      </Navbar>
      <Container>
        <PythonFile>
          <NameHeader>Enter your python Code Here</NameHeader>
          <AceEditor
            mode="python"
            theme="github"
            onChange={onChange}
            name="UNIQUE_ID_OF_DIV"
            editorProps={{ $blockScrolling: true }}
            width="100%"
            height="100%"
            fontSize={18}
          ></AceEditor>
        </PythonFile>
        <IpOpContainer>
          <NameHeader>Enter your Input Here</NameHeader>
          <Input>
            <InputTextArea></InputTextArea>
          </Input>
          <Output>
            <NameHeader>Output</NameHeader>

          </Output>
        </IpOpContainer>
      </Container>
    </MainContainer>
  );
}

export default App