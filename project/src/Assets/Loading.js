import styled from 'styled-components'
import {colorPrimary, colorSecondary} from '../Assets/Colors'
import { keyframes } from 'styled-components'

export const gif = keyframes`
    to {
      transform: rotate(1turn);
    }
  `

export const Body  = styled.div ` 
    align-items: center;
    display: flex;
    justify-content: center;
    min-height: 100vh;
    transform: scale(3);
`

export const Loading = styled.div`
animation: ${gif} 1s infinite;
border: 6px solid ${colorSecondary};
border-radius: 50%;
border-top-color: ${colorPrimary};
height: 50px;
width: 50px;
`






