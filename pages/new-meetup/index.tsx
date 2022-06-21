import React from 'react'
import type { NextPage } from 'next'
import type { NextRouter } from 'next/router'
import { useRouter } from 'next/router'
import NewMeetupForm from '../../components/meetups/NewMeetupForm'
import { ApiMethods, Meetup } from '../../shared/types'

const NewMeetup: NextPage = () => {
	const router: NextRouter = useRouter()
	const addMeetupHandler = async (enteredMeetupData: Meetup) => {
		try {
			const result = await fetch('/api/meetups/new-meetup', {
				method: ApiMethods.POST,
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(enteredMeetupData)
			})
			const response = await result.json()
			router.push(`/${response.id}`)
		} catch (e) {
			console.log('e', e)
		}
	}

	return <NewMeetupForm onAddMeetup={addMeetupHandler} />
}

export default NewMeetup
