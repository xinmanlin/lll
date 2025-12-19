import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="cute-container">
        <h1 className="cute-title">
          <span className="sparkle">✨</span> LLL Project 💩 <span className="sparkle">✨</span>
        </h1>
        <div className="card cute-card">
          <button className="cute-button" onClick={() => setCount((count) => count + 1)}>
            <span className="button-emoji">🎀</span> Click me! <span className="button-emoji">🎀</span>
            <br />
            <span className="count-display">Count: {count}</span>
          </button>
          <p className="cute-text">
            💕 Edit <code>src/App.jsx</code> and save to test HMR 💕
          </p>
        </div>
        <p className="read-the-docs cute-footer">
          🌸 Made with love and cuteness 🌸
        </p>
      </div>
    </>
  )
}

export default App

