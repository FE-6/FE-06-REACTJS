// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar'
import News from './components/News'
import Login from './pages/Login'

function App() {
  return (
    <div className="App">
      {/* <Navbar>
        <Routes>
          <Route path="/" element={<News />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </Navbar> */}
      <Navbar/>
      <News/>
      <Login/>
    </div>
  )
}

export default App
