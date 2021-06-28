import styled from "styled-components";
import {Header} from '../../Components/Header';
import {buttonPrimary} from '../../Components/styledButton';
import { colorPrimary, colorSecondary } from "../../Assets/Colors";
import backgroundStarred from '../../Assets/backgrounds/backgroundStarred.jpeg';
import { keyframes } from 'styled-components';

const card = keyframes`
    0%{
        transform: translateX(0)
    }
    50%{
        transform: translateX(-20px)
    }
    100%{
        transform: translateX(0)
    }
`

export const Buttons = styled.div`
    h3{
      ${buttonPrimary}
    }
`

export const Main = styled.div`
    display: flex;
    flex-direction:column;
      h1{
        margin-top: 1rem;
        text-align: center;
        color: ${colorSecondary};
        }
`

export const Bar = styled.div`
    ${Header}
`

export const Repos = styled.div`
    display: flex;
    max-height: 100vh;
    flex-direction: column;
    height: 92vh;
    background-image: url(${backgroundStarred});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    overflow-y:hidden; 
    overflow:scroll; 
  ::-webkit-scrollbar {
    display: none;
  }
    @media(max-width: 800px) {
        background-size: cover;
  }
`

export const CardRepo = styled.a`
  height: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 1rem;
  background-color: red;
  margin: 1rem 3rem 1rem 3rem;
  background-color: ${colorPrimary};
  :hover{animation: ${card} 1s;}
  a{
    text-decoration: none;
    color: ${colorSecondary};
  }
`