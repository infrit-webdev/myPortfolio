import '../src/styles/App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Navbar from "./components/Navbar"

function App() {
  

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
