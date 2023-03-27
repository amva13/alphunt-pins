import React from 'react';
import styled from '@emotion/styled';
import Pin from './Pin';
import './MainBoard.css';

function MainBoard(props) {
    let {pins} = props;
    // TODO: add className="mainboard_container to Container
  return (
   <Wrapper>
    <Container className="mainboard_container">
        {pins.map((pin, index) => {
            return <Pin key={index} urls={pin.urls} />
        })}
    </Container>
   </Wrapper> 
  )
}

const Wrapper = styled.div`
    display:flex;
    background-color: rgb(17,17,17);
    justify-content: center; 
    height: 100%;
    width: 100%;
    overflow:auto;
`

const Container = styled.div`
    background-color: rgb(17,17,17);
    margin-top:15px;
    // margin: 0 auto;
    // column-count:5;
    // column-gap: 10px;
    // max-width: 1260px;
    height:100%;
    // width:80%;
`

export default MainBoard