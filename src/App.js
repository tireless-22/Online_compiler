import React from "react";
import "./App.css";
import qs from "qs"
import styled from "styled-components";

import AceEditor from "react-ace";
import axios from "axios"
import { useState } from "react";

import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools";

import { VscRunAll } from "react-icons/vsc";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

const Navbar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 70px;
  background-color: gray;
`;

const NameHeader = styled.div`
  display: flex;
  height: 40px;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

const PythonFile = styled.div`
  display: flex;
  flex: 13;
  background-color: red;
  flex-direction: column;
`;

const IpOpContainer = styled.div`
  display: flex;
  flex: 7;
  background-color: blue;
  flex-direction: column;
  flex-direction: column;
`;

const Input = styled.div`
  display: flex;
  flex: 1;
  background-color: green;
  height: 50vh;
`;

const InputTextArea = styled.textarea`
  height: 100%;
  width: 100%;
`;

const Output = styled.div`
  display: flex;
  flex: 1;
  background-color: yellow;
  height: 50vh;

  flex-direction: column;
`;

const App = () => {
 

  const [datas, setDatas] = useState("");
  // const [fileName, setFileName] = useState("");

function onChange(newValue) {
  // console.log("change", newValue);
  
  setDatas(encodeURI(newValue));
}

  // function Run() {
  //   console.log(data);


  //   const data = new URLSearchParams();
  //   data.append("lang", "python");
  //   data.append("device", "");
  //   data.append("code", data);
  //   data.append("stdinput", 3);
  //   data.append("ext", "py");
    
  //   data.append("compile", 0);
  //   data.append("execute", "python main.py");
  //   data.append("mainfile","main.py")



  //   data.append("uid", 4268397);

  //   console.log(data);

  //   const url="https://tpcg2.tutorialspoint.com/tpcg.php"
  //   const options = {
  //     method: "POST",
  //     headers: { "content-type": "application/x-www-form-urlencoded" },
  //     data: qs.stringify(data),
  //     url,
  //   };
  //   axios(options);

  // }

  function Run() {


      console.log(datas);

      const data = new URLSearchParams();
      data.append("lang", "python");
      data.append("device", "");
      data.append("code", datas);
      data.append("stdinput", 3);
      data.append("ext", "py");

      data.append("compile", 0);
      data.append("execute", "python main.py");
      data.append("mainfile", "main.py");

      data.append("uid", 4268397);

         const config = {
           headers: {
             "Content-Type": "application/x-www-form-urlencoded",
           },
         };

         axios
           .post("https://tpcg2.tutorialspoint.com/tpcg.php", data, config)
           .then((result) => {
             console.log(result);
             // Do somthing
           })
           .catch((err) => {
             // Do somthing
             console.log(err)
           });
      
    }
  
  


  return (
    <MainContainer>
      <Navbar>
        <h1>Python Compiler</h1>
        <VscRunAll
          color="green"
          size={40}
          onClick={() => {
            Run();
          }}
        />
      </Navbar>
      <Container>
        <PythonFile>
          <NameHeader>Enter your python Code Here</NameHeader>
          <AceEditor
            mode="python"
            theme="github"
            onChange={onChange}
            // value={data}
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
};

export default App;
