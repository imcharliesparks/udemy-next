import React from 'react'
import MeetupDetail from '../../components/meetups/MeetupDetail'
import { Meetup } from '../../shared/types'
import { connectMongoClient } from '../../shared/apiHelpers'
import { ObjectId } from 'mongodb'
import CustomHead from '../../components/layout/Head'

type PageProps = {
	meetup: Meetup
}

const Meetup = ({ meetup }: PageProps) => {
	return (
		<>
			<CustomHead title={`${meetup.title}`} metaContent={{ name: meetup.title, content: meetup.description }} />
			<MeetupDetail {...meetup} />
		</>
	)
}

export const getServerSideProps = async (context: any) => {
	const meetupId = context.params?.meetupId
	const collection = await connectMongoClient('meetups')
	const response = await collection.findOne({ _id: new ObjectId(meetupId) })
	const meetup = { ...response, _id: response?._id.toString() }

	return {
		props: {
			meetup: meetup
		}
	}
}

export default Meetup
