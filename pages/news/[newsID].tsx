import type { NextPage } from 'next'
import type { NextRouter } from 'next/router'
import { useRouter } from 'next/router'

const NewsItem: NextPage = () => {
	const router: NextRouter = useRouter()
	const { newsID } = router.query
	return <div>this is our news item: {newsID}</div>
}

export default NewsItem
