import styled from 'styled-components'

export const Bloco = styled.div `
    background-color: rgb(255, 0, 0, 0.9);
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h3{
        font-size: 20vw;
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
        }
    }
`