// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.js';
import Universities from './components/Universities.js';
import Mentors from './components/Mentors.js';
import Footer from './components/footer.js';
function App() {
  return (
    <div className="App">

      <Navbar />
      <Universities />
      <Mentors />
      <Footer />

    </div>
  );
}

export default App;
