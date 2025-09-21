import './App.css'
import Header from './Header'
import Home from './Home'
import Skills from './Skills'
import Projects from './Projects'
import Resume from './Resume'
import Contact from './Contact'
import Footer from './Footer'
import {Route,Routes} from 'react-router-dom'
function App() {
    return(
      <div className="app-container">
        <Header/>
        <div className="main-content">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/Skills" element={<Skills/>}/>
          <Route path="/Projects" element={<Projects/>}/>
          <Route path="/Resume" element={<Resume/>}/>
          <Route path="/Contact" element={<Contact/>}/>
        </Routes>
        </div>
        <Footer/>
      </div>
    )
}

export default App
