import React from 'react';
import '../App.css';
import {Banner, Button, Challenge, Form, Input, Layout} from "../components";


function App() {
  return (
    <div className="App">
      <Banner/>
      <Layout>
        <Form>
          <Challenge factorA={12} factorB={36}/>
          <Input
            type="text"
            placeholder="Псевдоним"
          />
          <Input
            type="number"
            min={0}
            placeholder="Угадай"
          />
          <Button text="Submit"/>
        </Form>
      </Layout>
    </div>
  );
}

export default App;
