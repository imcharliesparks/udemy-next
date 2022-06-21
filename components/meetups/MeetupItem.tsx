import { useRouter } from 'next/router'
import type { NextRouter } from 'next/router'
import Card from '../ui/Card'
import classes from './MeetupItem.module.css'
import { Meetup } from '../../shared/types'

function MeetupItem(props: Meetup) {
	const router: NextRouter = useRouter()

	return (
		<li className={classes.item}>
			<Card>
				<div className={classes.image}>
					<img src={props.image} alt={props.title} />
				</div>
				<div className={classes.content}>
					<h3>{props.title}</h3>
					<address>{props.address}</address>
				</div>
				<div className={classes.actions}>
					<button type="button" onClick={() => router.push(`/${props._id}`)}>
						Show Details
					</button>
				</div>
			</Card>
		</li>
	)
}

export default MeetupItem
