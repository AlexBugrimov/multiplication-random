import React from 'react';
import '../App.css';
import {Banner} from "../components/Banner";
import {Input} from "../components/Input";
import {Layout} from "../components/Layout";
import {Form} from "../components/Form";

function App() {
  return (
    <div className="App">
      <Banner/>
      <Layout>
        <Form>
          <div className="flex justify-center">
            <Input placeholder="Alias"/>
          </div>
          <Input placeholder="Значение А"/>
          <Input placeholder="Значение B"/>
        </Form>
      </Layout>
    </div>
  );
}

export default App;
