import { MongoClient } from 'mongodb'
import { NextApiRequest, NextApiResponse } from 'next'
import { mongoAtlasUrl } from '../../../shared/constants'
import { ApiMethods, Meetup } from '../../../shared/types'
import { handleWrongRequestType } from '../../../shared/utils'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	if ((req.method = ApiMethods.GET)) {
		const mongoClient = await MongoClient.connect(mongoAtlasUrl)
		const db = mongoClient.db()
		const collection = db.collection('meetups')
		const meetups = await collection.find().toArray()
		res.status(200).json({ data: meetups })
	} else {
		handleWrongRequestType(req, res)
	}
}

export default handler
