import './App.css';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Blog from './pages/Blog';
import ModalProviders from './context/providers/ModalProviders';
import Nav from './components/Nav';
import NavProvider from './context/providers/NavProvider'
import Toggle from './components/Toggle';
import DestinationsProvider from './context/providers/DestinationsProvider';
import Details from './components/Details';
import SharedProviders from './context/providers/SharedProviders';
function App() {
  
  return (
    
    <Router>
      <ModalProviders>
        <NavProvider>
          <DestinationsProvider>
            <SharedProviders>
              <Toggle/>
              <Nav />
              <Routes>
                
                  <Route path='/' element={<Home/>} />
                  <Route path='blog' element={<Blog/>} />
                  <Route path='details/:id' exact element={<Details/>}/>
                  <Route path = '*' element={<NotFound/>}/>

              
              </Routes>
            </SharedProviders>
          </DestinationsProvider>
        </NavProvider>
      </ModalProviders>
    </Router>
  );
}

export default App;
