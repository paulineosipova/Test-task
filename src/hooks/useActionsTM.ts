import { bindActionCreators } from '@reduxjs/toolkit'
import { useMemo } from 'react'
import { useDispatch} from 'react-redux'
import { actions as actionsTMW } from '../store/task-modal/taskModalWatch.slice'
import { actions as actionsTMC } from '../store/task-modal/taskModalCreate.slice'
import { actions as actionsTMU } from '../store/task-modal/taskModalUpdate.slice'

const rootActionsTMW = {
    ...actionsTMW
}

const rootActionsTMC = {
    ...actionsTMC
}

const rootActionsTMU = {
    ...actionsTMU
}

export const useActionsTMW = () => {
    const dispatch = useDispatch()

    return useMemo(() => bindActionCreators(rootActionsTMW, dispatch), [dispatch])
}

export const useActionsTMC = () => {
    const dispatch = useDispatch()

    return useMemo(() => bindActionCreators(rootActionsTMC, dispatch), [dispatch])
}

export const useActionsTMU = () => {
    const dispatch = useDispatch()

    return useMemo(() => bindActionCreators(rootActionsTMU, dispatch), [dispatch])
}
