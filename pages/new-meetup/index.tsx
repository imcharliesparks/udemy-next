import React from 'react'
import type { NextPage } from 'next'
import NewMeetupForm from '../../components/meetups/NewMeetupForm'
import { Meetup } from '../../shared/types'

const NewMeetup: NextPage = () => {
	const addMeetupHandler = (enteredMeetupData: Meetup) => {
		console.log('enteredMeetupData', enteredMeetupData)
	}
	return <NewMeetupForm onAddMeetup={addMeetupHandler} />
}

export default NewMeetup
