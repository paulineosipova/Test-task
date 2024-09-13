import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ILastTaskId } from '../../types/lastTaskId.type'

const initialState: ILastTaskId = {
    id: "-1"
}

export const lastTaskIdSlice = createSlice({
    name: 'lastTaskId',
    initialState,
    reducers: {
        setLastTaskId: (state, {payload: id}: PayloadAction<string>) => {
            state.id = id
        }
    }
})


export const { actions, reducer } = lastTaskIdSlice
