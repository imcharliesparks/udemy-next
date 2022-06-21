import React from 'react'
import MeetupDetail from '../../components/meetups/MeetupDetail'
import { Meetup } from '../../shared/types'
import { connectMongoClient } from '../../shared/apiHelpers'
import { ObjectId } from 'mongodb'

type PageProps = {
	meetup: Meetup
}

const Meetup = ({ meetup }: PageProps) => {
	return (
		<>
			<MeetupDetail {...meetup} />
		</>
	)
}

export const getServerSideProps = async (context: any) => {
	const meetupId = context.params?.meetupId
	const collection = await connectMongoClient('meetups')
	const response = await collection.find({ _id: new ObjectId(meetupId) }).toArray()
	const meetups = response.map((meetup) => ({ ...meetup, _id: meetup._id.toString() }))

	return {
		props: {
			meetup: meetups[0]
		}
	}
}

export default Meetup
