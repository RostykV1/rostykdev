import './index.css';
import Header from './components/navbar/Header.jsx'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import About from './components/about/About'
import Main from './components/main/Main.jsx'
import Contact from './components/contact/Contact.jsx'
import { AnimatePresence } from "framer-motion"

function App() {
  return (
    <div>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} exact/>
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
      </BrowserRouter>  
    </div>  
  );
}

export default App;
