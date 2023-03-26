import styled from '@emotion/styled'
import { IconButton } from '@mui/material'
import React from 'react'
import icon from '../assets/apliko-icon-trans.png'
import { borderRadius } from '@mui/system'

function Header() {
  return (
    <Wrapper>
        <LogoWrapper>
            <IconButton style={{shapeOutside:"src(../assets/apliko-icon-trans.png)", margin:0, padding:0, borderRadius:50}}>
                <img style={{height: 75, width: 75, fit: "contain", borderRadius:50, clipPath:"circle()"}} src={icon}/>
            </IconButton>

        </LogoWrapper>
        {/* <HomepageButton>

        </HomepageButton>
        <SearchWrapper>
            <SearchBarWrapper>

            </SearchBarWrapper>
        </SearchWrapper> */}
    </Wrapper>
  )
}

const Wrapper = styled.div`
    display:flex;
    align-items:center;
    height:56px;
    padding: 12px 4px 4px 16px;
    background-color:black;
    color:white;
`

const LogoWrapper = styled.div`
    cursor: pointer;
    font-size: 32px;
    // border-radius:80%,
    // &:hover {
    //     background-color:white;
    // }
`

export default Header