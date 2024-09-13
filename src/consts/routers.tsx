import { createBrowserRouter } from 'react-router-dom'
import { Home } from '../components/screens/home/Home'
import { GroupCard } from '../components/screens/group/group-card/GroupCard'
import { groups } from './group'


export const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: groups[0].pathName,
		element: <GroupCard group={groups[0]} />,
	},
	{
		path: groups[1].pathName,
		element: <GroupCard group={groups[1]} />,
	},
	{
		path: groups[2].pathName,
		element: <GroupCard group={groups[2]} />,
	},
	{
		path: groups[3].pathName,
		element: <GroupCard group={groups[3]} />,
	},
	{
		path: groups[4].pathName,
		element: <GroupCard group={groups[4]} />,
	},
	{
		path: groups[5].pathName,
		element: <GroupCard group={groups[5]} />,
	}
])
