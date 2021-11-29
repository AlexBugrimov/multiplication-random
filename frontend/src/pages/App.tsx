import React from 'react';
import '../App.css';
import {Banner, Button, Challenge, Form, Input, Layout} from "../components";
import {useInput} from "../common/hooks/useInput";

function App() {
  const {error, ...alias} = useInput("", true)
  const guess = useInput(0, false)

  return (
    <div className="App">
      <Banner/>
      {error && <div>{error}</div>}
      <Layout>
        <Form>
          <Challenge text={"12 x 40"}/>
          <Input
            type="text"
            placeholder="Псевдоним"
            {...alias}
          />
          <Input
            type="number"
            min={0}
            placeholder="Угадай"
            {...guess}
          />
          <Button
            text="Угадай"
            onClick={() => console.log(alias.value, "---", guess.value)}
          />
        </Form>
      </Layout>
    </div>
  );
}

export default App;
