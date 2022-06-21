import { NextApiRequest, NextApiResponse } from 'next'

export const handleWrongRequestType = (req: NextApiRequest, res: NextApiResponse, message?: string) => {
	res.status(404).json({ type: 'error', message: message ?? 'Request type not found for that endpoint' })
}
