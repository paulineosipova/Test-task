import { bindActionCreators } from '@reduxjs/toolkit'
import { useMemo } from 'react'
import { useDispatch} from 'react-redux'
import { actions } from '../store/active-group/activeGroup.slice' 

const rootActions = {
    ...actions
}

export const useActionsAG = () => {
    const dispatch = useDispatch()

    return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}
