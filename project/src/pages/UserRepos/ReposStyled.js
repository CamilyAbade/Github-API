import styled from "styled-components";
import {buttonPrimary} from '../../Assets/styledButton'
import {Header} from '../../Assets/Header'
import { colorPrimary, colorSecondary } from "../../Assets/Colors";


export const Buttons = styled.div`
    h3{
      ${buttonPrimary}
    }
`

export const Main = styled.div`
    display: flex;
    flex-direction:column;
`

export const Bar = styled.div`
    ${Header}
`

export const Repos = styled.div`
    display: flex;
    max-height: 100vh;
    flex-direction: column;
    height: 92vh;
    background-image: url('https://gist.githubusercontent.com/brettlangdon/85942af486eb79118467/raw/2a7409cd3c26a90b2e82bdc40dc7db18b92b3517/Jn3y6mZ.jpg');
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
  div{
      padding: 1rem;
      border-bottom: 1px solid red;
      margin-bottom: 1rem ;



    h3, h1{
        color: ${colorSecondary};
    }
    h3{
      background-color: ${colorPrimary};

    }
  }



`