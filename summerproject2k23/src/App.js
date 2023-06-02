import './App.css';
import Header from './Components/header';
import Education from './Components/education';
import Skills from './Components/skills';

function App() {
  return (
    <div className="App" style={{ height: "100vh", overflow: "auto" }}>
      <Header/>
      <Education/>
      <Skills/>
    </div>
  );
}

export default App;
