import styled from '@emotion/styled'
import { IconButton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import MenuIcon from '@mui/icons-material/Menu';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import React, {useState} from 'react'
import icon from '../assets/apliko-icon-trans.png'
// import { borderRadius } from '@mui/system'

function Header(props) {
    const [input, setInput] = useState('');
    function onSearchSubmit(e){
        e.preventDefault();
        return props.search(input);
    }
  return (
    <Wrapper>
        <LogoWrapper>
            <IconButton style={{shapeOutside:"src(../assets/apliko-icon-trans.png)", margin:0, padding:0, borderRadius:50}}>
                <img style={{height: 50, width: 50, fit: "contain", borderRadius:50, clipPath:"circle()"}} src={icon} alt="nft pin"/>
            </IconButton>

        </LogoWrapper>
        <HomepageButton>
            <a href="/">Homepage</a>
        </HomepageButton>
        
        <SearchWrapper>
            <SearchBarWrapper>
                <IconButton>
                    <SearchIcon />
                </IconButton>
                <form>
                    <input type="text" onChange={(e) => setInput(e.target.value)}/>
                    <button type="submit" onClick={onSearchSubmit}></button>
                </form>
            </SearchBarWrapper>
        </SearchWrapper>

        <IconsWrapper>
            <IconButton>
                <RightIcon>
                    <InstagramIcon />
                </RightIcon>
            </IconButton>
            <IconButton>
                <RightIcon>
                    <LinkedInIcon />
                </RightIcon>
            </IconButton>
            <IconButton>
                <RightIcon>
                    <MenuIcon />
                </RightIcon>
            </IconButton>
        </IconsWrapper>
    </Wrapper>
  )
}

const HomeButtons = styled.div`
    display: flex;
    height: 48px;
    min-width: 123px;
    align-items: center;
    justify-content: center;
    border-radius: 24px;
    cursor: pointer;
`

const HomepageButton = styled(HomeButtons)`
    background-color:rgb(17,17,17);

    a {
        text-decoration: none;
        font-weight:700;
        color:white;
    }
    
    :hover {
        background-color: #F2F2F2;

        a {
            color:black;
        }
    }
`

const Wrapper = styled.div`
    display:flex;
    align-items:center;
    height:56px;
    padding: 12px 4px 4px 16px;
    background-color:rgb(17,17,17);
    color:black;
`

const LogoWrapper = styled.div`
    cursor: pointer;
    font-size: 32px;
    // border-radius:80%,
    // &:hover {
    //     background-color:white;
    // }
`

// const LogoWrapper2 = styled(LogoWrapper)`
//     padding-left: 50px;
// `

const SearchWrapper = styled.div`
    flex:1;
`

const SearchBarWrapper = styled.div`
    background-color: #efefef;
    display: flex;
    height: 48px;
    width: 100%;
    border-radius: 50px;
    border:none;
    padding-left:10px;

    form {
        display:flex;
        flex:1;
    }

    form > input {
        background-color: transparent;
        border: none;
        width: 100%;
        margin-left = 5px;
        font-size: 16px;
    }

    form > button {
        display: none;
    }

    input:focus {
        outline: none;
    }
`

const IconsWrapper = styled.div`

`

const RightIcon = styled.div`
    color:white;
    margin-left: 10px;
`

export default Header