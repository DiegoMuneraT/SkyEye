import './App.css';
import Header from './components/Header';
import Features from './components/Features';
import Services from './components/Services';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='f-heading'>
        <h1>Features</h1>
        <p> This is the main workflow of the project </p>
      </div>
      <Features/>
      <Services/>
    </div>
  );
}

export default App;
