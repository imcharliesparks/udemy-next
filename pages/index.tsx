import type { NextPage } from 'next'
import MeetupList from '../components/meetups/MeetupList'

const DUMMY_MEETUPS = [
	{
		id: 123,
		title: 'First Meetup',
		image:
			'https://www.carlrippon.com/static/4af46f1bec96814d38dc0c745f0f9142/f4b25/using-typeScript-with-react-cover.png',
		address: '124 N Tustin Avenue'
	}
]

const Home: NextPage = () => {
	return <MeetupList meetups={DUMMY_MEETUPS} />
}

export default Home
