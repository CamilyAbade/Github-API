import styled from "styled-components";
import {Header} from '../../Components/Header';
import {buttonPrimary, buttonSecondary} from '../../Components/styledButton';
import backgroundInfo from '../../Assets/backgrounds/backgroundInfo.jpg';

export const Buttons = styled.div`
    h3{
        ${buttonPrimary}
    }
`

export const Bar = styled.div`
    ${Header}
`

export const Info = styled.div`
    height: 92vh;
    background-image: url(${backgroundInfo});
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

export const User = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem;
    img{
        width: 100%;
        height: 90%;
    }
    a{
        text-align: center;
        padding: 1rem;
        cursor: pointer;
        text-decoration: none;
        ${buttonSecondary}
    }
`