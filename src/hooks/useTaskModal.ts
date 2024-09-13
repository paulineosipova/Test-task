import { useTypedSelector } from './useTypedSelector'

export const useTaskModalW = () => {
    const isOpen = useTypedSelector(state => state.taskModalW.isOpen)
    return isOpen
}

export const useTaskModalC = () => {
    const isOpen = useTypedSelector(state => state.taskModalC.isOpen)
    return isOpen
}

export const useTaskModalU = () => {
    const isOpen = useTypedSelector(state => state.taskModalU.isOpen)
    return isOpen
}
