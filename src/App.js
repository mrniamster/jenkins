import './App.css';
 import {BrowserRouter,Routes,Route} from 'react-router-dom'
 import Home from './pages/Home';
 import {Provider} from 'react-redux'
import Test from './pages/Test';

// import Navbar from './components/Navbar';
function App() {
  return (

        <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
        <Route path="/" element={<Home />}></Route>
         <Route path="/test" element={ <Test />}></Route>
        </Routes>
        </BrowserRouter>
  
  )
  
}

export default App;
