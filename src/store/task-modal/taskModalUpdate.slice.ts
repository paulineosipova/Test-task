import { createSlice } from '@reduxjs/toolkit'
import { IStateOpen } from '../../types/stateOpen.type' 

const initialState: IStateOpen = {
    isOpen: false
}

export const taskModalUSlice = createSlice({
    name: 'taskModalU',
    initialState,
    reducers: {
        setStateOpenU: (state) => {
            state.isOpen = !state.isOpen
        }
    }
})

export const { actions, reducer } = taskModalUSlice
