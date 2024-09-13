import styled from 'styled-components'
import { FaArrowRightLong } from 'react-icons/fa6'

const Button = styled.button`
    padding: 3%;
    border-style: solid;
    border-color: rgb(128, 128, 128, 0.9);
    background-color: rgb(128, 128, 128, 0.3);
    text-align: start;
    width: -webkit-fill-available;
    &:hover {
       background-color: rgb(128, 128, 128, 0.5);
       cursor: pointer;
    }
`

const Img = styled(FaArrowRightLong)`
    margin: 1% 5% 1% 1%;
    vertical-align: middle;
`

const Text = styled.span`
    vertical-align: middle;
    font-family: serif;
    font-variant: small-caps;
    font-size: 1.8vh;
    font-weight: normal;
    letter-spacing: 0.05em;
`

export function BtnMove() {
    return (
        <Button>
            <Img />
            <Text>Перемещение</Text>
        </Button>
    )
}
