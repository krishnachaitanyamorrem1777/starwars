import './App.css';
import Header from './components/header';
import Nav from './components/nav';
import Main from "./components/main"
import Characters from './components/characters';
import About from "./components/about";



function App() {
  return (
    <div>
      
        <Header />
        <Nav />
        <Main />
        <Characters/>
        <About />

      
    </div>
  );
}

export default App;
