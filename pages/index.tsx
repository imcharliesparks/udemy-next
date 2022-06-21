import MeetupList from '../components/meetups/MeetupList'
import { connectMongoClient } from '../shared/apiHelpers'
import { Meetup } from '../shared/types'

const Home = (props: { meetups: Meetup[] }) => {
	return <MeetupList meetups={props.meetups} />
}

export const getStaticProps = async () => {
	const collection = await connectMongoClient('meetups')
	const response = await collection.find({}).toArray()
	const meetups = response.map((meetup) => ({ ...meetup, _id: meetup._id.toString() }))

	return {
		props: {
			meetups
		}
	}
}

export default Home
