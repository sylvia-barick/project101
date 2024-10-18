import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Overview from './pages/Overview';
import Components from './pages/Components';
import Pipeline from './pages/Pipeline';
import Technologies from './pages/Technologies';
import Benefits from './pages/Benefits';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-100">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/overview" element={<Overview />} />
            <Route path="/components" element={<Components />} />
            <Route path="/pipeline" element={<Pipeline />} />
            <Route path="/technologies" element={<Technologies />} />
            <Route path="/benefits" element={<Benefits />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;