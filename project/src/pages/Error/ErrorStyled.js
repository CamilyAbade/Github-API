import styled from 'styled-components'
import { colorPrimary, colorSecondary } from '../../Assets/Colors'

export const Bloco = styled.div `
    background-color: ${colorPrimary};
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h3{
        font-size: 8vw;
        color: rgb(255,255,255, 0.4);
    }
    button{
        height: 4rem;
        padding: 0 1rem 0 1rem;
        background-color: white;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        &:hover{
            background-color: black;
            color: white;
            border: 2px solid ${colorSecondary};
        }
    }
`