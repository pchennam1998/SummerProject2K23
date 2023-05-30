import logo from './logo.svg';
import './App.css';
import Header from './Components/header'

function App() {
  return (
    <div className="App">
    <Header/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://github.com/pchennam1998"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hello, This is Pavan Sai Chennam
        </a>
      </header>
    </div>
  );
}

export default App;
