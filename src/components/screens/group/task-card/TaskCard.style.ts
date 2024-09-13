import styled from 'styled-components'
import { LuClock4 } from 'react-icons/lu'

interface GridContainerProps {
    color: string 
}

export const GridContainer = styled.div<GridContainerProps>`
    margin: 1%;
    display: grid;
    grid-template-rows: 0.1fr 1fr;
    border-radius: 5px;
    background-color: white;
    border-style: solid;
    border-width: 3px;
    border-color: ${({color = "rgb(128, 128, 128, 0.5)"}) => color};
    &:hover {
        cursor: pointer;
        border-color: dodgerblue;
    }
`

export const GridItemTitle = styled.div`
    border-radius: 3px;
    background-color: rgb(128, 128, 128, 0.5);
`

export const GridItem = styled.div`
    margin: 2%;
    text-align: start;
    padding: 2%;
`

export const Position = styled.h4`
    margin: 1% 0 0 3%;
    font-family: serif;
    font-size: 1.5vh;
    font-weight: normal;
`

export const Title = styled.h2`
    margin: 3%;
    font-family: serif;
    font-size: 3vh;
    font-weight: normal;
    font-variant: small-caps;
    letter-spacing: 0.05em;
`

export const Img = styled(LuClock4)`
    vertical-align: middle;
    margin: 1% 5% 1% 1%;
`

export const Deadline = styled.span`
    vertical-align: middle;
    font-family: serif;
    font-size: 1.8vh;
    font-weight: normal;
    font-variant: small-caps;
`
