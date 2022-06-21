import React from 'react'
import Image from 'next/image'
import { ApiMethods, Meetup } from '../../shared/types'
import classes from './MeetupDetail.module.css'
import type { NextRouter } from 'next/router'
import { useRouter } from 'next/router'

const MeetupDetail = ({ image, description, address, title, _id }: Meetup) => {
	const router: NextRouter = useRouter()

	const handleDeleteMeetup = async () => {
		const response = await fetch(`http://localhost:3000/api/meetups/${_id}`, {
			method: ApiMethods.DELETE
		})
		const result = await response.json()
		router.push('/')
	}

	return (
		<section className={classes.detail}>
			<img src={image} alt="first image" />
			<h1>{title}</h1>
			<address>{address}</address>
			<p>{description}</p>
			<button onClick={handleDeleteMeetup}>Delete Meetup!</button>
		</section>
	)
}

export default MeetupDetail
