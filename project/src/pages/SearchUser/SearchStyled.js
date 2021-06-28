import styled from "styled-components";
import { colorSecondary } from "../../Assets/Colors";
import {Header} from '../../Components/Header'
import {buttonSecondary} from '../../Components/styledButton'


export const Bar = styled.div`
    ${Header}
    color: ${colorSecondary};
`
export const Search = styled.div`
    display: flex;
    button{
        ${buttonSecondary}
    }
    input{
        width: 30vw;
        padding-left: 1rem;
        @media(max-width: 414px) {
        width: 50vw;
        }
    }
`

export const Main = styled.div`
    height: 92vh;
    background-image: url('https://gist.githubusercontent.com/brettlangdon/85942af486eb79118467/raw/2a7409cd3c26a90b2e82bdc40dc7db18b92b3517/6orB6Yb.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media(max-width: 800px) {
        background-size: cover;
  }
`