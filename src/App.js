import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import MainBoard from './components/MainBoard';
import unsplash from './api/unsplash';
import {useState, useEffect} from 'react';
import randomWords from 'random-words';
import NFTs from './assets/NFTs.json';

function App() {

  const [pins, setPins] = useState([]);

  function getImages(term){
    return unsplash.get("https://api.unsplash.com/search/photos/", {
      params: {
        query: term
      }
    })
  }

  function getNFTs(term){
    // let nfts = JSON.parse(NFTs);
    console.log(NFTs[0]);
    var res;
    if(term===""){
      res = NFTs;
    }
    else {
      res = NFTs.filter(nft => nft.name.toLowerCase().includes(term.toLowerCase()) || nft.network.toLowerCase().includes(term.toLowerCase()));
    }
    res = res.filter(nft => nft.img.includes(".png"));
    res.sort((a,b) => {
      return 0.5 - Math.random();
    }); 
    return res;
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

  function onNFTSearchSubmit(term){
    let results = getNFTs(term);
    pins.sort((a,b) => {
      return 0.5 - Math.random(); 
    })
    let newNFTs = [
      ...results,
      ...pins
    ];
    setPins(newNFTs);
  }

  function getNewPins(){
    let rw = randomWords(10);
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

  function getNewNFTs(){
    setPins(getNFTs(""));
  }

  useEffect(() => {
    // getNewPins();
    getNewNFTs();
  }, [])

  return (
    <div className="app">
      <Header search={onNFTSearchSubmit}/>
      <MainBoard pins={pins}/>
    </div>
  );
}

export default App;
