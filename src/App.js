import {Route, Switch} from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import GalleryPage from './components/gallerypage/GalleryPage'
import dotEnv from 'dotenv'
function App() {
dotEnv.config()
  return (
    <div className="App">
      <Switch>
      <Route path="/gallery" component={GalleryPage}/>
      <Route exact path="/" component={Home}/>
      </Switch>
    </div>
  );
}

export default App;
