import { useTypedSelector } from './useTypedSelector'

export const useActiveGroup = () => {
    const activeGroup = useTypedSelector(state => state.activeGroup)

    return activeGroup
}
