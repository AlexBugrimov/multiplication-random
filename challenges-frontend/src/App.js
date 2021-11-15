import './App.css';
import {useChallenge} from './hooks/useСhallenge'

const host = process.env.REACT_APP_HOST

export default function App() {
  let {challenge, isLoading, error} = useChallenge(host);

  if (error) {
    return <div>Error</div>
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>{JSON.stringify(challenge)}</h1>
      </header>
    </div>
  );
}
