import React from 'react';
import styled from '@emotion/styled';

function Pin(props) {
  return (
    <Wrapper>
      <Container>
        <img src={props.urls.regular} alt="alphunt-pin"/>
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
`

export default Pin