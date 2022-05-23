
import React from "react";
import '../styles/App.css';

const Name = () => {
  return <h1 data-ns-test="project-name">Music Player</h1>
}

const Description = () => {
  return <p data-ns-test="project-description">Attractive Music Player Using React Only</p>
}

const App = () => {
  return (
    <div id="main">
      <Name/>
      <Description/>
    </div>
  )
}


export default App;