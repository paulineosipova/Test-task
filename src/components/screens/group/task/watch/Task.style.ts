import styled from 'styled-components'
import Modal from 'styled-react-modal'

interface SelectProps {
    visibility: string 
}

export const StyledModal = Modal.styled`
    width: 50vw;
    height: 60vh;
    background-color: white;
`

export const GridContainer = styled.div`
    display: grid;
    grid-template-areas:
        'header header header . close'
        'group group group . .'
        '. . . . .'
        'icon title . btn .'
        'text text text move .'
        'dl dl . . .'
        'date date . . .';
    grid-template-columns: 0.3fr 1fr 1fr 1fr 0.2fr;
    grid-template-rows: 1fr 0.1fr 8% 0.1fr 4fr 0.1fr 0.8fr;
`
export const Header = styled.h1`
    grid-area: header;
    margin: 2%;
    padding: 1.5%;
    font-family: serif;
    font-size: 3.5vh;
    font-weight: normal;
    font-variant: small-caps;
    letter-spacing: 0.1em;
`

export const Button = styled.div`
    grid-area: btn;
    margin: 1%;
`

export const Select = styled.select<SelectProps>`
    grid-area: select;
    margin: 3% 1%;
    visibility: ${({visibility = "hidden"}) => visibility};
    width: 100%;
    padding: 1%;
    font-family: serif;
    font-size: 1.8vh;
    font-weight: normal;
    font-variant: small-caps;
    letter-spacing: 0.1em;
`

export const Date = styled.div`
    grid-area: date;
    margin-left: 10%;
    width: 10vw;
    height: 2vh;
`
