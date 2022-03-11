import { Routes, Route } from 'react-router-dom';
import Home from './components/shared/Home';
import About from './components/shared/About';
import Nomatch from './components/shared/Nomatch';
import Navbar from './components/shared/Navbar';
import Books from './components/books/Books';


// for navigation routes 
const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/about" element={ <About /> } />
      <Route path="/books" element={ <Books /> } />
      <Route path="*" element={ <Nomatch /> } />
    </Routes>
    {/* This is where your footer will be */}
  </>
)

export default App;