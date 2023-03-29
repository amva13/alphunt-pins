import React from 'react';
import styled from '@emotion/styled';

function Pin(props) {
  return (
    <Wrapper>
      <Container>
        <img src={props.urls} alt="alphunt-pin" onClick={() => {window.open("https://"+props.clickurl)}}/>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  padding: 8px;
`

const Container = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  cursor: pointer;
  width: 236px;

  img {
    display: flex;
    width: 100%;
    cursor: pointer;
    border-radius: 16px;
    object-fit: cover;
  }

  img:hover {
    -webkit-filter: brightness(50%);
    -webkit-transition: all 1s ease;
    -moz-transition: all 1s ease;
    -o-transition: all 1s ease;
    -ms-transition: all 1s ease;
    transition: all 1s ease;
}
`

export default Pin