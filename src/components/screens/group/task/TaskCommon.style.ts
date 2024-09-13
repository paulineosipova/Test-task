import styled from 'styled-components'
import { HiOutlineMenuAlt2 } from 'react-icons/hi'

export const Close = styled.div`
    grid-area: close;
`

export const Group = styled.h4`
    grid-area: group;
    margin-top: 0;
    padding-left: 7%;
    font-family: serif;
    font-size: 1.8vh;
    font-weight: normal;
    font-variant: small-caps;
    letter-spacing: 0.1em;
`

export const Icon = styled(HiOutlineMenuAlt2)`
    grid-area: icon;
    width: 3vw;
    height: 2vh;
    position: relative;
    left: 10%;
`

export const Title = styled.div`
    grid-area: title;
    font-family: serif;
    font-size: 2vh;
    font-weight: normal;
    font-variant: small-caps;
    letter-spacing: 0.1em;
`

export const Move = styled.div`
    grid-area: move;
    margin: 1%;
`

export const Text = styled.div`
    grid-area: text;
    margin: 1% 2% 1% 5%;
    font-family: serif;
    font-weight: normal;
    font-size: 1.7vh;
    white-space: pre;
    border-style: solid;
    border-width: 2px;
    padding: 1%;
`

export const Input = styled.textarea`
    grid-area: input;
    margin: 1% 2% 1% 5%;
    font-family: serif;
    font-size: 1.7vh;
    font-weight: normal;
    padding: 1%;
`

export const Save = styled.div`
    grid-area: save;
    margin: 1%;
`

export const Cancel = styled.div`
    grid-area: cancel;
    margin: 1%;
`

export const DeadLine = styled.div`
    grid-area: dl;
    margin: 2% 0 0 10%;
    font-family: serif;
    font-size: 2vh;
    font-weight: normal;
    font-variant: small-caps;
    letter-spacing: 0.1em;
`
