import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


function App() {
  

  return (
    <div className="App">
      <Router>
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
