import React from 'react';
import styled from '@emotion/styled';
import Pin from './Pin';

function MainBoard() {
  return (
   <Wrapper>
    <Container>
        <Pin></Pin>
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
    display: flex;
    width: 80%;
    margin-top:15px;
`

export default MainBoard