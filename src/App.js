import './App.css';
import Home from './components/home/Home';
import dotEnv from 'dotenv'
function App() {
dotEnv.config()
  return (
    <div className="App">
        <Home/>
    </div>
  );
}

export default App;
