import { MongoClient } from 'mongodb'
import { mongoAtlasUrl } from './constants'

const connectMongoClient = async (collectionName: string) => {
	const mongoClient = await MongoClient.connect(mongoAtlasUrl)
	const db = mongoClient.db()
	const collection = db.collection(collectionName)
	return collection
}
