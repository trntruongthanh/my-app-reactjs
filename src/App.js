import { useState } from "react";
import "./App.scss";
import Hero from "./components/Hero"

function App() {

  const [count, setCount] = useState(0);

  // use callback vs useMemo
  const handleHeroClick = () => {

  }

  return (

    <div className="app">

      <h1>React Hooks</h1>
      
      <p>{count}</p>
      
      <button onClick={() => setCount(count + 1)}>Increase</button>

      <Hero name="Hello World" onClick={handleHeroClick}/>
      
    </div>
  )
}

export default App;