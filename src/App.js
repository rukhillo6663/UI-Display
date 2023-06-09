
import data from './data/data';
import './App.css';
import SingleItem from './components/SingleItem';

function App() {
  //

  return (
    <div className="App">
      {data.length !== 0 && data.map(item => <SingleItem item={item} />)}
    </div>
  );
}

export default App;
