import React from 'react';
import styled from '@emotion/styled';
import Pin from './Pin';
import './MainBoard.css';
// import ReactPaginate from 'react-paginate';


function MainBoard(props) {
    let {pins} = props;
    // let items = pins;
    // const [itemOffset, setItemOffset] = useState(0);
    // const itemsPerPage = 500;

    // // Simulate fetching items from another resources.
    // // (This could be items from props; or items loaded in a local state
    // // from an API endpoint with useEffect and useState)
    // const endOffset = itemOffset + itemsPerPage;
    // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    // const currentItems = items.slice(itemOffset, endOffset);
    // const pageCount = Math.ceil(items.length / itemsPerPage);
  
    // // Invoke when user click to request another page.
    // const handlePageClick = (event) => {
    // //   const newOffset = (event.selected * itemsPerPage) % items.length;
    // //   console.log(
    // //     `User requested page number ${event.selected}, which is offset ${newOffset}`
    // //   );
    // const newOffset = itemOffset + itemsPerPage;
    //   setItemOffset(newOffset);
    //   const endOffset = itemOffset + itemsPerPage;
    //     console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    //     const currentItems = items.slice(itemOffset, endOffset);
    //     const pageCount = Math.ceil(items.length / itemsPerPage);
    // };
  return (
   <Wrapper>
    <Container className='mainboard__container'>
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
    // overflow:auto;
`

const Container = styled.div`
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
    // width:80%;
`

export default MainBoard