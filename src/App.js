import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import MainBoard from './components/MainBoard';
import unsplash from './api/unsplash';

function App() {
  function getImages(term){
    return unsplash.get("https://api.unsplash.com/search", {
      params: {
        query: term
      }
    })
  }
  function onSearchSubmit(term){
      getImages(term);
  }
  return (
    <div className="app">
      <Header search={onSearchSubmit}/>
      <MainBoard />
    </div>
  );
}

export default App;
