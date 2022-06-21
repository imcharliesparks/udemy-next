import dotenv from 'dotenv'
dotenv.config()

export const mongoAtlasUrl: string = `mongodb+srv://admin:${process.env.MONGO_PASSWORD}@udemy-next.xa0tr5a.mongodb.net/?retryWrites=true&w=majority`
