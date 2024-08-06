import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import Home from '../src/containers/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <main>
        <Routes>
        <Route path="/" element={<Home />} /> 
        </Routes>
      </main>
      <Footer />
    </div>
  </Router>
  );
}

export default App;
