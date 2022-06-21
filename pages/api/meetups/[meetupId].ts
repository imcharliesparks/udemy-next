import { NextApiRequest, NextApiResponse } from 'next'
import { ApiMethods } from '../../../shared/types'
import { MongoClient, ObjectId } from 'mongodb'
import { mongoAtlasUrl } from '../../../shared/constants'
import { handleWrongRequestType } from '../../../shared/utils'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	const { method } = req
	const mongoClient = await MongoClient.connect(mongoAtlasUrl)
	const db = mongoClient.db()
	const meetupsCollection = db.collection('meetups')

	if (method === ApiMethods.GET) {
		const { meetupId } = req.query
		const result = await meetupsCollection.findOne({ _id: new ObjectId(meetupId as string) })
		res.status(200).send({ data: result })
	} else if (method === ApiMethods.DELETE) {
		const { meetupId } = req.query
		const result = await meetupsCollection.findOneAndDelete({ _id: new ObjectId(meetupId as string) })
		res.status(200).send({ data: result })
	} else {
		handleWrongRequestType(req, res)
	}
}

export default handler
