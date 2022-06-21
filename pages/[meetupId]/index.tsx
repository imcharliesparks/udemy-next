import React from 'react'
import type { NextPage, GetStaticProps, GetStaticPropsContext } from 'next'
import MeetupDetail from '../../components/meetups/MeetupDetail'
import { ApiMethods, Meetup } from '../../shared/types'

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
	const response = await fetch(`http://localhost:3000/api/meetups/${meetupId}`)
	const result = await response.json()
	const meetup: Meetup | undefined = result.data
	return {
		props: {
			meetup
		}
	}
}

export default Meetup
