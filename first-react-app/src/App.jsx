import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import PropsDisplayer from "./propsDisplayer";
import City from "./City";
import Greeting from "./Greeting";
import ComposedComment from "./ComposedComment";
import ComplexComment from "./ComplexComment";
import { FullName, NamePart} from "./FullName"
import { FancyBox, Callout} from "./FancyBox"
import MoviesList from "./MovieList";
import BigCatsDisplay from "./BigCats";
import MoodChanger from "./MoodChanger";
import EmojiChanger from "./Emoji";
import BirthdayTranslator from "./BirthdayTranslator";
import LoginForm from "./LoginForm";
import ExplodingBomb from "./ExplodingBomb";

function ExampleComponent() {
  return (
    <div className="ExampleComponent componentBox">
      <h1>My Example Component</h1>
      <p>My first React component!</p>
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0);
  const spiderman = {
    name: "Spiderman",
    alterEgo: "Peter Parker",
    catchPhrase: "With great power comes great responsibility",
  };

  // const spideyJSX1 = (
  //   <div>
  //     <h3>{spiderman.name}</h3>
  //     <blockquote>{spiderman.catchPhrase}</blockquote>
  //     <cite>{spiderman.alterEgo}</cite>
  //   </div>
  // );
  // const spideyJSX2 = (
  //   <>
  //     <h3>{spiderman.name}</h3>
  //     <blockquote>{spiderman.catchPhrase}</blockquote>
  //     <cite>{spiderman.alterEgo}</cite>
  //   </>
  // );

  // const person = {first: 'Luke', middle: 'John', last: "James", pets: ['dog ', 'cat ', 'camel ', 'horse ']}

  // const comment = {
  //   date: new Date(),
  //   text: "I hope you enjoy learning React!",
  //   author: {
  //     // author is also an object
  //     name: "Hello Kitty",
  //     avatarUrl: "https://placekitten.com/g/64/64",
  //   },
  // };

  return (
    <>
      <ExplodingBomb />
      {/* <LoginForm/> */}
      {/* <BirthdayTranslator/> */}
      {/* <EmojiChanger/> */}
      {/* <MoodChanger /> */}
      <BigCatsDisplay />
      {/* <MoviesList /> */}
      {/*<Callout
        title="Nested React Component"
        message="Simple message with a fancy box applied via composition"
      >
        <FullName first="Elon" last="Musk" />
      </Callout>
      <ComplexComment
        author={comment.author}
        date={comment.date}
        text={comment.text}
      />
      <ComposedComment
        author={comment.author}
        date={comment.date}
        text={comment.text}
      />
      <FullName
        first={person.first}
        middle={person.middle}
        last={person.last}
        pets={person.pets}
      />
      <PropsDisplayer
        name="Harry Styles"
        age={29}
        pets={["cat", "dos", "goldfish"]}
        reactLogo={reactLogo}
        buttonCount={count}
      />

      <City name="Sydney" />
      <City name="Melbourne" state="VIC" />
      <City name="Chicago" state="Illinois" country="USA" />
      <City name="Newcastle">
        <div>
          Newcastle is a harbour city in the Australian state of New South
          Wales.
        </div>
        <div>
          <strong>Population:</strong> 322,278 (2016)
        </div>
      </City>
      <Greeting />
      <Greeting name="John" />
      <Greeting>Hey World?</Greeting>
      <ExampleComponent />
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
      {spideyJSX2} */}
    </>
  );
}

export default App;
