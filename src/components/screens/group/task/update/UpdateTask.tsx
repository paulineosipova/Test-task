import { GridContainer, Header, Date } from './UpdateTask.style'
import { Group, Icon, Title, Input, Save, Cancel, DeadLine } from '../TaskCommon.style'
import { BtnSave } from '../../../../ui/buttons/BtnSave'
import { BtnCommon } from '../../../../ui/buttons/BtnCommon'
import { ITask } from '../../../../../types/task.type'
import { useActionsTMU, useActionsTMW } from '../../../../../hooks/useActionsTM'
import { useActiveGroup } from '../../../../../hooks/useActiveGroup'
import { useUpdateTaskMutation } from '../../../../../store/api/api'
import { FormEvent, useState } from 'react'

export function UpdateTask({task}: {task: ITask}) {
    const { setStateOpenW } = useActionsTMW()
    const { setStateOpenU } = useActionsTMU()
    const activeGroup = useActiveGroup()

    const [updatedTask, setUpdatedTask] = useState(task)
    const [updateTask] = useUpdateTaskMutation()

    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        updateTask(updatedTask)
        setStateOpenU()
        setStateOpenW()
    }

    return (
        <form onSubmit={handleSubmit}>
            <GridContainer>
                <Header
                    type='text'
                    placeholder='Заголовок'
                    value={updatedTask.title}
                    onChange={e => setUpdatedTask({...updatedTask, title: e.target.value})}
                />
                <Group>в группе <u>{activeGroup.groupName}</u></Group>
                <Icon />
                <Title>Описание</Title>
                <Input
                    placeholder='Описание задачи...'
                    value={updatedTask.description}
                    onChange={e => setUpdatedTask({...updatedTask, description: e.target.value})}
                />
                <DeadLine>Срок</DeadLine>
                <Date
                    type="date"
                    value={updatedTask.date}
                    onChange={e => setUpdatedTask({...updatedTask, date: e.target.value})}
                />
                <Save><BtnSave /></Save>
                <Cancel onClick={() => setStateOpenU()}><BtnCommon name="Отменить" /></Cancel>
            </GridContainer>
        </form>
    )
}
