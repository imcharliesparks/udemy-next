import MeetupList from '../components/meetups/MeetupList'
import { Meetup } from '../shared/types'

const Home = (props: { meetups: Meetup[] }) => {
	return <MeetupList meetups={props.meetups} />
}

export const getStaticProps = async () => {
	const response = await fetch('http://localhost:3000/api/meetups/all-meetups')
	const result = await response.json()
	return {
		props: {
			meetups: result.data
		}
	}
}

export default Home
