// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import MainBoard from './components/MainBoard';
// import unsplash from './api/unsplash';
import {useState, useEffect} from 'react';
// import randomWords from 'random-words';
import NFTs from './assets/NFTs.json';
import {Helmet} from "react-helmet";

function App() {

  const [pins, setPins] = useState([]);

  // const listInnerRef = useRef();
  const pinsPerPage = 100;
  const totalPins = pins.length;
  var response;

  const [currPage, setCurrPage] = useState(1); // storing current page number
  // const [prevPage, setPrevPage] = useState(-1); // storing prev page number
  const [userList, setUserList] = useState([]); // storing list
  // const [wasLastList, setWasLastList] = useState(false); // setting a flag to know the last list

  const handleClick = (e) => {
    // const sheight = e.target.scrollHeight;
    // const stop = e.target.scrollTop;
    // const theight = e.target.clientHeight;
    // if (sheight - stop === theight) {
      // This will be triggered after hitting the last element.
      // API call should be made here while implementing pagination.
      console.log("it was called");
    const curMarker = currPage*pinsPerPage;
    // if(curMarker >= totalPins){
    //   setWasLastList(true);
    // }
    // else {
    response = pins.slice(curMarker, curMarker + pinsPerPage);
    console.log(response.length);
    if(response.length === 0){
      setCurrPage(0);
      handleClick(e);
    }
      // setPrevPage(currPage);
    setCurrPage(currPage+1);
    setUserList([...userList, ...response]);
    if(currPage*pinsPerPage >= totalPins){
      setCurrPage(0);
    }
    // }
    // }
  };


  function getNFTs(term){
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
    response = newNFTs.slice(0, pinsPerPage);
    // setPrevPage(0);
    setCurrPage(1);
    setUserList([...response, ...userList]); 
  }

  

  useEffect(() => {
    let nftpins = getNFTs("");
    setPins(nftpins);
    let sl = nftpins.slice(0, pinsPerPage);
    setUserList([...sl]);
    // response = pins.slice(0, pinsPerPage);
    // setPrevPage(0);
    // setCurrPage(1);
    // setUserList([...response]);
  }, [])

  return (
    <div className="app">
      <Helmet>
                <meta charSet="utf-8" />
                <title>NFT Masonry and Search Engine</title>
                <meta property="og:title" content="NFT Masonry and Search Engine"/>
                <meta property="og:type" content="website"/>
                <meta property="og:image" content="./assets/apliko-icon-trans.png"/>
                <meta property="og:url" content="https://aplikonfts.com"/>
                <link rel="icon" href="./assets/apliko-icon-trans.png" />
        </Helmet>
      <Header search={onNFTSearchSubmit}/>
      <MainBoard pins={userList} newpage={handleClick}/>
    </div>
  );
}

export default App;
