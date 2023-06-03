import './App.css';
import Header from './Components/header';
import Education from './Components/education';

function App() {
  return (
    <div className="App" style={{ height: "100vh", overflow: "auto" }}>
      <Header/>
      <Education/>
    </div>
  );
}

export default App;
