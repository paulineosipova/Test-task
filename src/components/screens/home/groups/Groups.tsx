import { Tabs, Tab, LinkGroup } from './Groups.style'
import { groups } from '../../../../consts/group'
import { useGetTasksQuery } from '../../../../store/api/api'
import { useActionsLTId } from '../../../../hooks/useActionsLTId'

export function Groups () {

    const { data } = useGetTasksQuery(null)
    const len = (data?.length !== undefined) ? data?.length : 0
    const { setLastTaskId } = useActionsLTId()

    return (
        <Tabs>
            {groups.map(group => (<LinkGroup key={group.id} to={group.pathName} onClick={() => setLastTaskId(String(len))}><Tab>{group.name}</Tab></LinkGroup>))}
        </Tabs>
    )
}
