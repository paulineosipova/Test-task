import { ModalProvider } from 'styled-react-modal'
import { GridContainer, Title } from './GroupCard.style'
import { GroupDesk } from '../group-desk/GroupDesk'
import { IGroup } from '../../../../types/group.type'
import { useActionsAG } from '../../../../hooks/useActionsAG'
import { useMemo } from 'react'

export function GroupCard ({group}: {group: IGroup}) {
    const {setActiveGroup} = useActionsAG()

    useMemo(() =>{
        setActiveGroup({id: group.id, groupName: group.name})
    }, [])

    return (
        <GridContainer>
            <Title>{group.name}</Title>
            <ModalProvider><GroupDesk /></ModalProvider>
        </GridContainer>
    )
}
