import * as React from 'react'
import { Meetup } from '../shared/types'

const DUMMY_MEETUPS: Meetup[] = [
	{
		id: '123',
		title: 'First Meetup',
		image:
			'https://www.carlrippon.com/static/4af46f1bec96814d38dc0c745f0f9142/f4b25/using-typeScript-with-react-cover.png',
		address: '124 N Tustin Avenue',
		description: 'cheese'
	}
]

export const useMeetups = () => {
	const [meetups, setMeetups] = React.useState<Meetup[]>()

	React.useEffect(() => {
		setMeetups(DUMMY_MEETUPS)
	}, [])

	return [meetups]
}
