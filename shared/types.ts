import { ObjectId } from 'mongodb'

export type Meetup = {
	address: string
	description: string
	image: string
	title: string
	_id?: string | ObjectId
}

export enum ApiMethods {
	POST = 'POST',
	GET = 'GET',
	PUT = 'PUT',
	DELETE = 'DELETE'
}
