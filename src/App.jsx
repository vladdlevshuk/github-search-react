import React from "react"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Profile from "./pages/Profile"

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <div className="container pt-4">
        <h1>Hi</h1>
      </div>
    </React.Fragment>
  )
}

export default App
