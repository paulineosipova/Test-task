import styled from 'styled-components'

const Button = styled.button`
    padding: 3%;
    border-style: solid;
    border-color: rgb(0, 0, 255, 0.5);
    background-color: rgb(0, 0, 255, 0.2);
    width: -webkit-fill-available;
    &:hover {
       background-color: rgb(0, 0, 255, 0.3);
       cursor: pointer;
    }
`

const Text = styled.span`
    vertical-align: middle;
    font-family: serif;
    font-variant: small-caps;
    font-size: 1.8vh;
    font-weight: normal;
    letter-spacing: 0.05em;
`

export function BtnSave() {
    return (
        <Button type='submit'>
            <Text>Сохранить</Text>
        </Button>
    )
}
