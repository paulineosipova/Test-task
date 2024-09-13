import { bindActionCreators } from '@reduxjs/toolkit'
import { useMemo } from 'react'
import { useDispatch} from 'react-redux'
import { actions } from '../store/last-task-id/lastTaskId.slice' 

const rootActions = {
    ...actions
}

export const useActionsLTId = () => {
    const dispatch = useDispatch()

    return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}
