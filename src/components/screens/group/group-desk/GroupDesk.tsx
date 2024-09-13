import { Desk, GridContainer, GridItem, StyledModal } from './GroupDesk.style'
import { TaskCard } from '../task-card/TaskCard'
import { BtnTask } from '../../../ui/buttons/BtnTask'
import { Task } from '../task/watch/Task'
import { CreateTask } from '../task/create/CreateTask'
import { ITask } from '../../../../types/task.type'
import { IGroupTasks } from '../../../../types/groupTasks.type'
import { useGetGroupQuery, useGetTasksQuery, useUpdateTaskMutation } from '../../../../store/api/api'
import { useTaskModalW, useTaskModalC } from '../../../../hooks/useTaskModal'
import { useActionsTMW, useActionsTMC } from '../../../../hooks/useActionsTM'
import { useActiveGroup } from '../../../../hooks/useActiveGroup'
import { useState } from 'react'


export function GroupDesk() {
    const activeGroup = useActiveGroup()
    const { data: group } = useGetGroupQuery(activeGroup.id)
    const [groupTasks, setGroupTasks] = useState<IGroupTasks>({id: activeGroup.id, tasks: []})

    const { data } = useGetTasksQuery(null)

    const isOpenW = useTaskModalW()
    const { setStateOpenW } = useActionsTMW()

    const isOpenC = useTaskModalC()
    const { setStateOpenC } = useActionsTMC()

    const defaultTask:ITask = {id: "-1", title: '', date: '',  description: '', position: -1}
    const [task, setTask] = useState(defaultTask)

    const [currentTask, setCurrentTask] = useState(defaultTask)
    const [updateTask] = useUpdateTaskMutation()

    function openTask (task:ITask){
        setStateOpenW()
        setTask(task)
    }

    function dragStartHandler(task:ITask) {
        setCurrentTask(task)
    }

    function dragOverHandler(e:React.DragEvent<HTMLDivElement>) {
        e.preventDefault()
    }

    function dropHandler(e:React.DragEvent<HTMLDivElement>, task:ITask) {
        e.preventDefault()
        
        const newCurrentTask = {...currentTask, position: task.position}
        const newTask = {...task, position: currentTask.position}
        updateTask(newCurrentTask)
        updateTask(newTask)
    }

    function getTasks(): ITask[] {
        let arrTasks:ITask[] = []
        
        data?.forEach(task => {
            group?.tasks.forEach(idTask => {
                if (idTask == task.id) {
                    arrTasks.push(task)
                }
            })
        })

        return arrTasks
    }

    function openCreateTask() {
        const updatedGroupTasks = {...groupTasks, tasks: group!.tasks}
        setGroupTasks(updatedGroupTasks)
        setStateOpenC()
    }

    const neededTaks = getTasks()

    return (
        <>
            <Desk>
                <GridContainer>
                    {neededTaks.map(task => (
                        <GridItem key={task.id} onClick={() => openTask(task)}>
                            <div
                                draggable={true}
                                onDragStart={() => dragStartHandler(task)}
                                onDragOver={(e) => dragOverHandler(e)}
                                onDrop={(e) => dropHandler(e, task)}
                            >
                                <TaskCard task={task} />
                            </div>
                        </GridItem>
                    ))}
                    <GridItem onClick={() => openCreateTask()}><BtnTask /></GridItem>
                </GridContainer>
            </Desk>
            <StyledModal
                isOpen={isOpenW}
                onBackgroundClick={() => setStateOpenW()}
            >
                <Task task={task} />
            </StyledModal>
            <StyledModal isOpen={isOpenC} >
                <CreateTask
                    maxPosition={neededTaks.length}
                    groupTasks={groupTasks}
                />
            </StyledModal>
        </>
    )
}
