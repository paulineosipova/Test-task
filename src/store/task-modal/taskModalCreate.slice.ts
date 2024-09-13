import { createSlice } from '@reduxjs/toolkit'
import { IStateOpen } from '../../types/stateOpen.type' 

const initialState: IStateOpen = {
    isOpen: false
}

export const taskModalCSlice = createSlice({
    name: 'taskModalC',
    initialState,
    reducers: {
        setStateOpenC: (state) => {
            state.isOpen = !state.isOpen
        }
    }
})

export const { actions, reducer } = taskModalCSlice
