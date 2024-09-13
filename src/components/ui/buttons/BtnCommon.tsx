import styled from 'styled-components'

const Button = styled.button`
    padding: 3%;
    border-style: solid;
    border-color: rgb(128, 128, 128, 0.9);
    background-color: rgb(128, 128, 128, 0.3);
    width: -webkit-fill-available;
    &:hover {
       background-color: rgb(128, 128, 128, 0.5);
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

export function BtnCommon({name}: {name: string}){
    return (
        <Button type='button'>
            <Text>{name}</Text>
        </Button>
    )
}
