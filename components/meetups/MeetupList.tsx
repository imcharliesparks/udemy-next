import { Meetup } from '../../shared/types'
import MeetupItem from './MeetupItem'
import classes from './MeetupList.module.css'

type Props = {
	meetups: Meetup[]
}

function MeetupList(props: Props) {
	return (
		<ul className={classes.list}>
			{props.meetups.map((meetup: Meetup, i: number) => (
				<MeetupItem
					key={`${meetup._id}_${i}`}
					_id={meetup._id}
					image={meetup.image}
					title={meetup.title}
					address={meetup.address}
					description={meetup.description}
				/>
			))}
		</ul>
	)
}

export default MeetupList
