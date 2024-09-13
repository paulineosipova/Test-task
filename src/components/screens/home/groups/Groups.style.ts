import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Tabs = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-column-gap: 1%;
`

export const Tab = styled.div`
    font-family: serif;
    font-variant: small-caps;
    font-size: 2.5vh;
    font-weight: normal;
    letter-spacing: 0.1em;
    color: white;
    max-height: 3vh;
    position: relative;
    top: 40%;
`

export const LinkGroup = styled(Link)`
    margin: 3%;
    text-decoration: none;
    display: flex;
    justify-content: center;
    border-style: none;
    border-radius: 5px;
    background: linear-gradient(to top, #553c9a, #ee4b2b);
    max-height: 50vh;
    position: relative;
    top: 10%;
    &:hover {
        cursor: pointer;
        opacity: 0.9;
    }
`
