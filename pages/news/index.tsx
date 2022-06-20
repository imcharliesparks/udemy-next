import type { NextPage } from 'next'
import Link from 'next/link'

const News: NextPage = () => (
	<>
		<h1>news page</h1>
		<ul>
			<Link href="/news/123">News Pages</Link>
		</ul>
	</>
)

export default News
