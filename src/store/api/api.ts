import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { URL_API } from '../../consts/urls'
import { ITask } from '../../types/task.type'
import { IGroupTasks } from '../../types/groupTasks.type'

export const api = createApi({
    reducerPath: 'api',
    tagTypes: ['Task', 'Group'],
    baseQuery: fetchBaseQuery({
        baseUrl: URL_API,
    }),
    endpoints: builder => ({
        getTasks: builder.query<ITask[], null>({
            query: () => '/tasks/?_sort=position&_order=asc',
            providesTags: () => [{type: 'Task'}]
        }),
        createTask: builder.mutation<null, ITask>({
            query: (task) => ({
                body: task,
                url: '/tasks/',
                method: 'POST'
            }),
            invalidatesTags: () => [{type: 'Task'}]
        }),
        updateTask: builder.mutation<null, ITask>({
            query: (task) => ({
                url: `/tasks/${task.id}`,
                body: task,
                method: 'PUT'
            }),
            invalidatesTags: () => [{type: 'Task'}]
        }),
        getGroup: builder.query<IGroupTasks, string>({
            query: (id) => `/groups/${id}`,
            providesTags: () => [{type: 'Group'}]
        }),
        updateGroup: builder.mutation<null, IGroupTasks>({
            query: (group) => ({
                url: `/groups/${group.id}`,
                body: group,
                method: 'PUT'
            }),
            invalidatesTags: () => [{type: 'Group'}]
        }),
        getGroups: builder.query<IGroupTasks[], null>({
            query: () => '/groups',
            providesTags: () => [{type: 'Group'}]
        })
    })
})

export const { useGetTasksQuery, useCreateTaskMutation, useUpdateTaskMutation, useGetGroupQuery, useUpdateGroupMutation, useGetGroupsQuery } = api
