import styled from "styled-components";
import {colorPrimary, colorSecondary} from '../Assets/Colors'

export const buttonPrimary = styled.h3`
    h3 {
    float: left;
    position: relative;
    color: #fff;
    margin: 0 4rem 0 4rem;
    font-size: 1rem;
    cursor: pointer;
    &:before {
        content: "";
        position: absolute;
        width: 100%;
        height: 2px;
        bottom: 0;
        background-color: #fff;
        visibility: hidden;
        transform: scaleX(0);
        -webkit-transition: all 0.3s ease-in-out 0s;
    }
    
    &:hover:before {
        visibility: visible;
        -webkit-transform: scaleX(1);
        transform: scaleX(1);
}

@media(max-width: 700px) {
    font-size: 1rem;
    margin: 0 2rem 0 2rem;

  }

@media(max-width: 510px) {
    font-size: 0.9rem;
    margin: 0 0.5rem 0 0.5rem;

  }
    }
`
export const buttonSecondary = styled.h3`
    background-color: ${colorPrimary};
    color: ${colorSecondary};
    &:hover{
      background-color: ${colorSecondary};
      color: ${colorPrimary}
    }
`
