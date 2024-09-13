import { GridContainer, Header, Date } from './CreateTask.style'
import { Group, Icon, Title, Input, Save, Cancel, DeadLine } from '../TaskCommon.style'
import { BtnSave } from '../../../../ui/buttons/BtnSave'
import { BtnCommon } from '../../../../ui/buttons/BtnCommon'
import { ITask } from '../../../../../types/task.type'
import { IGroupTasks } from '../../../../../types/groupTasks.type'
import { useActionsTMC } from '../../../../../hooks/useActionsTM'
import { useActiveGroup } from '../../../../../hooks/useActiveGroup'
import { FormEvent, useState } from 'react'
import { useCreateTaskMutation, useUpdateGroupMutation } from '../../../../../store/api/api'
import { useLastTaskId } from '../../../../../hooks/useLastTaskId'
import { useActionsLTId } from '../../../../../hooks/useActionsLTId'

export function CreateTask({maxPosition, groupTasks}: {maxPosition: number, groupTasks: IGroupTasks}) {
    const { setStateOpenC } = useActionsTMC()
    const activeGroup = useActiveGroup()
    const lastTaskId = useLastTaskId()
    const { setLastTaskId } = useActionsLTId()

    const defaultTask:ITask = {
        id: lastTaskId,
        title: '',
        date: '',
        description: '',
        position: maxPosition + 1
    }

    const [task, setTask] = useState(defaultTask)
    const [createTask] = useCreateTaskMutation()
    const [updateGroup] = useUpdateGroupMutation()

    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const nextLastId = String(parseInt(lastTaskId) + 1)
        const newTask = {...task, id: nextLastId}
        const copyTasks = groupTasks.tasks.slice()
        copyTasks.push(nextLastId)
        const updatedGroupTasks = {...groupTasks, tasks: copyTasks}

        setLastTaskId(nextLastId)
        updateGroup(updatedGroupTasks)
        createTask(newTask)
        setStateOpenC()
    }

    return (
        <form onSubmit={handleSubmit}>
            <GridContainer>
                <Header
                    type='text'
                    placeholder='Заголовок'
                    value={task.title}
                    onChange={e => setTask({...task, title: e.target.value})}
                />
                <Group>в группе <u>{activeGroup.groupName}</u></Group>
                <Icon />
                <Title>Описание</Title>
                <Input
                    placeholder='Описание задачи...'
                    value={task.description}
                    onChange={e => setTask({...task, description: e.target.value})}
                />
                <DeadLine>Срок</DeadLine>
                <Date
                    type="date"
                    value={task.date}
                    onChange={e => setTask({...task, date: e.target.value})}
                />
                <Save><BtnSave /></Save>
                <Cancel onClick={() => setStateOpenC()}><BtnCommon name="Отменить" /></Cancel>
            </GridContainer>
        </form>
    )
}
