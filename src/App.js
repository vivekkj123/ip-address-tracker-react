import './App.scss';
import DataBoard from './components/DataBoard/DataBoard';
import Header from './components/Header/Header';
import Map from './components/Map/Map';

function App() {
  return (
    <div className="App">
      <Header/>
      <DataBoard/>
      <Map/>
    </div>
  );
}

export default App;
