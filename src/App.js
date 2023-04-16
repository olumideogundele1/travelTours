import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import ModalProviders from "./context/providers/ModalProviders";
import Nav from "./components/Nav";
import NavProvider from "./context/providers/NavProvider";
import Toggle from "./components/Toggle";
import DestinationsProvider from "./context/providers/DestinationsProvider";
import Details from "./components/Details";
import SharedProviders from "./context/providers/SharedProviders";
import GalleryProvider from "./context/providers/GalleryProvider";
import { HelmetProvider } from "react-helmet-async";
import Contact from "./pages/Contact";
function App() {
  return (
    <HelmetProvider>
      <Router>
        <ModalProviders>
          <NavProvider>
            <GalleryProvider>
              <DestinationsProvider>
                <SharedProviders>
                  <Toggle />
                  <Nav />
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="details/:id" exact element={<Details />} />
                    <Route path="*" element={<NotFound />} />
                    <Route path="contact" element={<Contact />} />
                  </Routes>
                </SharedProviders>
              </DestinationsProvider>
            </GalleryProvider>
          </NavProvider>
        </ModalProviders>
      </Router>
    </HelmetProvider>
  );
}

export default App;
