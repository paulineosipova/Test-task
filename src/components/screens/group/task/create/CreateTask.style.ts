import styled from 'styled-components'

export const GridContainer = styled.div`
    display: grid;
    grid-template-areas:
        'header header header . .'
        'group group group . .'
        '. . . . .'
        'icon title . . .'
        'input input input . .'
        'dl dl . . .'
        'date date . . .'
        '. . save cancel .';
    grid-template-columns: 0.3fr 1fr 1fr 1fr 0.2fr;
    grid-template-rows: 1fr 0.1fr 8% 0.1fr 4fr 0.1fr 0.8fr 1fr;
`
export const Header = styled.input`
    grid-area: header;
    margin: 2%;
    padding: 1.5%;
    font-family: serif;
    font-size: 2vh;
    font-weight: normal;
    font-variant: small-caps;
    letter-spacing: 0.1em;
`

export const Date = styled.input`
    grid-area: date;
    margin-left: 10%;
    width: 10vw;
    height: 2vh;
`
