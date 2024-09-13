import { GridContainer, GridItemTitle, GridItem, Position, Title, Img, Deadline } from './TaskCard.style'
import { ITask } from '../../../../types/task.type'
import { groups } from '../../../../consts/group'
import { useActiveGroup } from '../../../../hooks/useActiveGroup'
import { useEffect, useState } from 'react'

export function TaskCard ({task}: {task: ITask}) {
    const activeGroup = useActiveGroup()
    const [borderColor, setBorderColor] = useState<string>('rgb(128, 128, 128, 0.5)')

    useEffect(() =>{
        const currentDate = new Date()
        const deadline = new Date(task.date)

        if (activeGroup.id != groups[5].id) {

            if ((currentDate.getFullYear() == deadline.getFullYear())
                    && (currentDate.getMonth() == deadline.getMonth())
                    && (deadline.getDate() - currentDate.getDate() <= 3) && (deadline.getDate() - currentDate.getDate() > 0)) {
                setBorderColor('yellow')
            }
            else if (((currentDate.getFullYear() == deadline.getFullYear())
                    && (currentDate.getMonth() == deadline.getMonth())
                    && (deadline.getDate() <= currentDate.getDate())) ||
                    ((currentDate.getFullYear() == deadline.getFullYear())
                    && (deadline.getMonth() < currentDate.getMonth())) ||
                    (currentDate.getFullYear() > deadline.getFullYear())) {
                setBorderColor('red')
            }
            else {
                setBorderColor('rgb(128, 128, 128, 0.5)')
            }
        }
        else {
            setBorderColor('rgb(128, 128, 128, 0.5)')
        }
    }, [task.date])

    return (
        <GridContainer color={borderColor}>
            <GridItemTitle><Position>{task.position}</Position><Title>{task.title}</Title></GridItemTitle>
            <GridItem>
                <Img/>
                <Deadline>{task.date}</Deadline>
            </GridItem>
        </GridContainer>
    )
}
