import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { reducer as activeGroupReducers } from './active-group/activeGroup.slice'
import { reducer as taskModalWReducers } from './task-modal/taskModalWatch.slice'
import { reducer as taskModalCReducers } from './task-modal/taskModalCreate.slice'
import { reducer as taskModalUReducers } from './task-modal/taskModalUpdate.slice'
import { reducer as lastTaskIdReducers } from './last-task-id/lastTaskId.slice'
import { api } from './api/api'

const reducers = combineReducers({
    activeGroup: activeGroupReducers,
    taskModalW: taskModalWReducers,
    taskModalC: taskModalCReducers,
    taskModalU: taskModalUReducers,
    lastTaskId: lastTaskIdReducers,
    [api.reducerPath]: api.reducer,
})

export const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
})

export type RootState = ReturnType<typeof store.getState>
