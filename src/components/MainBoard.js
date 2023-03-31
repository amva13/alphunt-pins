import React from 'react';
import styled from '@emotion/styled';
import Pin from './Pin';
import './MainBoard.css';
// import { useState, useRef } from 'react';
// import Container from 'react-bootstrap/Container';
// import ReactPaginate from 'react-paginate';


function MainBoard(props) {
    let {pins} = props;
  
  return (
    <div>
   <Wrapper>
    <Container2 className='mainboard__container' onScroll={props.scroll}>
        {pins.map((pin, index) => {
            return <Pin key={index} urls={pin.img} clickurl={pin.url} />
        })}
        {/* <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        onScroll={handlePageClick}
      /> */}
    </Container2>
   </Wrapper> 
   <br></br>
   <br></br>
   <ScrollButton onClick={props.newpage}>
    More results
 </ScrollButton>
 </div>
  )
}

const Wrapper = styled.div`
    display:flex;
    background-color: rgb(17,17,17);
    justify-content: center; 
    height: 100%;
    width: 100%;
    // text-align:center;
    // overflow:auto;
`

const Container2 = styled.div`
    background-color: rgb(17,17,17);
    margin-top:15px;
    // display:block;
    // margin: 0 auto;
    // column-count: 5;
    // column-count:repeat(auto-fit, minmax(100px, 1fr));
    // grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    // column-gap: 10px;
    // max-width: 1260px;
    height:100%;
    width:90%;
`

const HomeButtons = styled.button`
    display: flex;
    height: 48px;
    min-width: 123px;
    align-items: center;
    justify-content: center;
    border-radius: 24px;
    cursor: pointer;
`

const ScrollButton = styled(HomeButtons)`
    background-color:rgb(17,17,17);
    margin:auto;

    // a {
    text-decoration: none;
    font-weight:700;
    color:white;
    // }
    
    :hover {
        background-color: #F2F2F2;

        // a {
        color:black;
        // }
    }
`

export default MainBoard