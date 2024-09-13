import { GridContainer, Header, Button, Date, StyledModal, Select } from './Task.style'
import { Close, Group, Icon, Title, Move, Text, DeadLine } from '../TaskCommon.style'
import { BtnClose } from '../../../../ui/buttons/BtnClose'
import { BtnMove } from '../../../../ui/buttons/BtnMove'
import { BtnCommon } from '../../../../ui/buttons/BtnCommon'
import { UpdateTask } from '../update/UpdateTask'
import { groups } from '../../../../../consts/group'
import { ITask } from '../../../../../types/task.type'
import { IGroupTasks } from '../../../../../types/groupTasks.type'
import { useActionsTMW, useActionsTMU } from '../../../../../hooks/useActionsTM'
import { useActiveGroup } from '../../../../../hooks/useActiveGroup'
import { useTaskModalU } from '../../../../../hooks/useTaskModal'
import { useGetGroupsQuery, useUpdateGroupMutation, useGetTasksQuery, useUpdateTaskMutation } from '../../../../../store/api/api'
import { useState } from 'react'


export function Task({task}:{task:ITask}) {
    const { setStateOpenW } = useActionsTMW()
    const activeGroup = useActiveGroup()

    const isOpenU = useTaskModalU()
    const { setStateOpenU } = useActionsTMU()

    const [isOpenSelect, setIsOpenSelect] = useState(true)
    const [isOpenStyle, setIsOpenStyle] = useState('hidden')

    const { data } = useGetGroupsQuery(null)
    const { data: dataTasks } = useGetTasksQuery(null)

    const [updateGroup] = useUpdateGroupMutation()
    const [updateTask] = useUpdateTaskMutation()

    function toggleSelect() {
        setIsOpenSelect(!isOpenSelect)

        if(isOpenSelect) {
            setIsOpenStyle('visible')
        }
        else {
            setIsOpenStyle('hidden')
        }
    }

    function getGroup(groupId: string):IGroupTasks {
        const len = (data?.length !== undefined) ? data.length : 0
        for (let i=0; i<len; i++){
            if (data![i].id == groupId){
                return data![i]
            }
        }

        return {id: activeGroup.id, tasks: []}
    }

    function getTasks(group: IGroupTasks | undefined) {
        let arrTasks:ITask[] = []
        
        dataTasks?.forEach(task => {
            group?.tasks.forEach(idTask => {
                if (idTask == task.id) {
                    arrTasks.push(task)
                }
            })
        })

        return arrTasks
    }

    function getTask(tasks:ITask[], id:string): ITask {
        for (let i=0; i<tasks.length; i++){
            if (tasks[i].id == id){
                return tasks[i]
            }
        }

        return {id: "-1", title: '', date: '',  description: '', position: -1}
    }

    function changePositions(index:number, tasks:ITask[]){
        for (let i=index+1; i<tasks.length; i++){
            let newTask = {...tasks[i], position: tasks[i].position - 1}
            updateTask(newTask)
        }
    }

    function changeGroup(e:React.ChangeEvent<HTMLSelectElement>){
        const changeGroupId = e.target.value
        const changeGroupTasks = getGroup(changeGroupId)
        const activeGroupTasks = getGroup(activeGroup.id)

        let changeTasks = changeGroupTasks.tasks.slice()
        changeTasks.push(task.id)
        const changedGroup = {...changeGroupTasks, tasks: changeTasks}

        let activeTasks = activeGroupTasks.tasks.slice()
        const indexTask = activeTasks.indexOf(task.id)
        activeTasks.splice(indexTask, 1)
        const newActiveGroup = {...activeGroupTasks, tasks: activeTasks}

        const neededTaksCG = getTasks(changeGroupTasks)
        const neededTaskAG = getTasks(activeGroupTasks)

        const maxPositionCG = neededTaksCG.length
        const changedTask = getTask(neededTaskAG, task.id)
        const newTaskC = {...changedTask, position: maxPositionCG + 1}

        const indexTaskA = neededTaskAG.indexOf(task)
        changePositions(indexTaskA, neededTaskAG)

        updateTask(newTaskC)

        updateGroup(changedGroup)
        updateGroup(newActiveGroup)

        setStateOpenW()
    }

    return (
        <>
            <GridContainer>
                <Header>{task.title}</Header>
                <Close onClick={() => setStateOpenW()}><BtnClose /></Close>
                <Group>в группе <u>{activeGroup.groupName}</u></Group>
                <Icon />
                <Title>Описание</Title>
                <Button onClick={() => setStateOpenU()}><BtnCommon name="Изменить" /></Button>
                <Text>{task.description}</Text>
                <Move>
                    <div onClick={toggleSelect}><BtnMove /></div>
                    <Select visibility={isOpenStyle} value={activeGroup.id} onChange={e => changeGroup(e)}>
                        {groups.map(group => (
                            <option key={group.id} value={group.id}> {group.name} </option>
                        ))}
                    </Select>
                    </Move>
                <DeadLine>Срок</DeadLine>

                <Date>{task.date}</Date>
            </GridContainer>
            <StyledModal isOpen={isOpenU} >
                <UpdateTask task={task} />
            </StyledModal>
        </>
    )
}
