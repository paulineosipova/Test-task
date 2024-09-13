import styled from 'styled-components'
import Modal from 'styled-react-modal'

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-column-gap: 1%;
`

export const GridItem = styled.div`
    margin: 4%;
`

export const Desk = styled.div`
    background: linear-gradient(45deg, #553c9a, #ee4b2b);
    border-radius: 10px;
    max-height:81vh;
    overflow: auto;
    scroll-behavior: smooth;
    scrollbar-width:inherit;
`

export const StyledModal = Modal.styled`
    width: 50vw;
    height: 60vh;
    background-color: white;
`
