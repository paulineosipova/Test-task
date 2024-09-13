import { IGroup } from '../types/group.type' 

const group_need:IGroup = {
    id: "1",
    name: 'Необходимо',
    pathName: '/need'
}

const group_progress:IGroup = {
    id: "2",
    name: 'В процессе',
    pathName: '/in_progress'
}

const group_quickly:IGroup = {
    id: "3",
    name: 'Срочно',
    pathName: '/quickly'
}

const group_done:IGroup = {
    id: "4",
    name: 'Выполнено',
    pathName: '/done'
}

const group_tested:IGroup = {
    id: "5",
    name: 'Проверено',
    pathName: '/tested'
}

const group_finished:IGroup = {
    id: "6",
    name: 'Завершено',
    pathName: '/finished'
}


export const groups = [group_need, group_progress, group_quickly, group_done, group_tested, group_finished]
