import { GridContainer, Title } from './Home.style'
import { Groups } from './groups/Groups'

export function Home() {

    return (
        <GridContainer>
            <Title>Менеджер задач</Title>
            <Groups />
        </GridContainer>
    )
}
