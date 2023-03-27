import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import MainBoard from './components/MainBoard';
import unsplash from './api/unsplash';
import {useState, useEffect} from 'react';
import randomWords from 'random-words';

function App() {
  const [pins, setPins] = useState([]);
  function getImages(term){
    return unsplash.get("https://api.unsplash.com/search/photos/", {
      params: {
        query: term
      }
    })
  }

  function onSearchSubmit(term){
      getImages(term).then((res) => {
        let results = res.data.results;
        // console.log(res.status);
        // console.log(res.data.total);
        // console.log(results);
        // console.log("test");
        results.sort((a,b) => {
          return 0.5 - Math.random();
        });
        let newPins = [
          ...results,
          ...pins
        ];
        setPins(newPins);
      });
  }

  function getNewPins(){
    let rw = randomWords(10);
    // let rw = ["dogs", "cats", "pikachu", "christmas", "mountains", "joker"]
    let resD = [];
    let promises = [];
    rw.forEach((t) => {
      promises.push(
        getImages(t).then((res) => {
          let results = res.data.results;
          resD = resD.concat(results);
        })
      );
    })
    Promise.all(promises).then(() => {
      resD.sort((a,b) => {
        return 0.5 - Math.random();
      });
      setPins(resD);
    });

  }

  useEffect(() => {
    getNewPins();
  }, [])

  return (
    <div className="app">
      <Header search={onSearchSubmit}/>
      <MainBoard pins={pins}/>
    </div>
  );
}

export default App;
