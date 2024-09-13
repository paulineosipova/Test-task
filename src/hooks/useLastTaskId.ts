import { useTypedSelector } from './useTypedSelector'

export const useLastTaskId = () => {
    const lastTaskId = useTypedSelector(state => state.lastTaskId.id)

    return lastTaskId
}
