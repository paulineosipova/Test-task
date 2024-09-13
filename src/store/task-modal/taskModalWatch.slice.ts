import { createSlice } from '@reduxjs/toolkit'
import { IStateOpen } from '../../types/stateOpen.type' 

const initialState: IStateOpen = {
    isOpen: false
}

export const taskModalWSlice = createSlice({
    name: 'taskModalW',
    initialState,
    reducers: {
        setStateOpenW: (state) => {
            state.isOpen = !state.isOpen
        }
    }
})

export const { actions, reducer } = taskModalWSlice
