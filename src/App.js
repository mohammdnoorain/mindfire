
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './component/pages/Home';
import Contactus from './component/pages/Contactus';
import Knowledge from './component/pages/Knowledge';
import Header from './component/header/Header';
import Footer from './component/footer/footer';
function App() {
  return (

    <Router>
      <Header />
      {/* Always rendered on every route */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/knowledge" element={<Knowledge />} />
      </Routes>
      <Footer />
    </Router>



  );
}

export default App;
