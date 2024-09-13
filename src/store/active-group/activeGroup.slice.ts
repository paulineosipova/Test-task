import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IActiveGroup } from '../../types/activeGroup.type'

const initialState: IActiveGroup = {
    id: "-1",
    groupName: ''
}

export const activeGroupSlice = createSlice({
    name: 'activeGroup',
    initialState,
    reducers: {
        setActiveGroup: (state, {payload: activeGroup}: PayloadAction<IActiveGroup>) => {
            state.id = activeGroup.id
            state.groupName = activeGroup.groupName
        }
    }
})

export const { actions, reducer } = activeGroupSlice
