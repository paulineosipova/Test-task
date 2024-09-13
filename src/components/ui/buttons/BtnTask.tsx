import styled from 'styled-components'
import { FaPlus } from 'react-icons/fa6'

const Button = styled.button`
    padding: 8%;
    border-style: none;
    border-radius: 5px;
    background-color: rgb(255, 255, 255, 0.5);
    text-align: start;
    width: -webkit-fill-available;
    &:hover {
       background-color: rgb(255, 255, 255, 0.3);
       cursor: pointer;
    }
`

const Img = styled(FaPlus)`
    margin: 1% 5% 1% 1%;
    vertical-align: middle;
`

const Text = styled.span`
    vertical-align: middle;
    font-family: serif;
    font-weight: normal;
    font-variant: small-caps;
    font-size: 1.8vh;
    letter-spacing: 0.05em;
`

export function BtnTask() {
    return (
        <Button>
            <Img />
            <Text>Добавить задачу</Text>
        </Button>
    )
}
