import React from 'react';
import styled from '@emotion/styled';

function Pin() {
  return (
    <Wrapper>
      <Container>
        <img src="https://images.unsplash.com/photo-1679764376519-807d8b7ea416?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60" />
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: inline-flex;
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
    cursor: zoom-in;
    border-radius: 16px;
    object-fit: cover;
  }
`

export default Pin