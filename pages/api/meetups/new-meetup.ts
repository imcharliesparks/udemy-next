import type { NextApiRequest, NextApiResponse } from 'next'
import { ApiMethods } from '../../../shared/types'
import { MongoClient } from 'mongodb'
import { mongoAtlasUrl } from '../../../shared/constants'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method === ApiMethods.POST) {
		const mongoClient = await MongoClient.connect(mongoAtlasUrl)
		const db = mongoClient.db()
		const meetupsCollection = db.collection('meetups')

		try {
			const result = await meetupsCollection.insertOne(req.body)
			res.status(200).json({ status: 'added', id: result.insertedId })
		} catch (e) {
			console.log('e', e)
			res.status(400).json({ status: 'unable to add', error: e })
		}
	}
}

export default handler
