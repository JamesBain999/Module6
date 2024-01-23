import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function ExampleComponent() {
  return (
    <div className="ExampleComponent componentBox">
      <h1>My Example Component</h1>
      <p>My first React component!</p>
    </div>
  )
}

function App() {
  const [count, setCount] = useState(0);
  const spiderman = {name: 'Spiderman', alterEgo: 'Peter Parker', catchPhrase: 'With great power comes great responsibility'};
  const spideyJSX1 = (<div>
    <h3>{spiderman.name}</h3>
    <blockquote>{spiderman.catchPhrase}</blockquote><cite>{spiderman.alterEgo}</cite>
  </div>);
  const spideyJSX2 = (<>
    <h3>{spiderman.name}</h3>
    <blockquote>{spiderman.catchPhrase}</blockquote><cite>{spiderman.alterEgo}</cite>
  </>);
  

  return (
    <>
      <ExampleComponent></ExampleComponent>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
        {spideyJSX1}
        {spideyJSX2}
    </>
  )
}

export default App
