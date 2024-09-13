import styled from 'styled-components'
import { RxCross2 } from 'react-icons/rx'

const Img = styled(RxCross2)`
    width: 3vw;
    height: 3vh;
    color: rgb(1, 1, 1, 0.7);
`

const Button = styled.button`
    border-style: none;
    background-color: rgb(255, 255, 255, 0);
    float: right;
    &:hover {
        background-color: rgb(255, 0, 0, 0.8);
        cursor: pointer;
    }
`

export function BtnClose() {
    return (
        <Button>
            <Img />
        </Button>
    )
}
