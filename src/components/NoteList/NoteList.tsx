import { FC } from 'react'
import s from './NoteList.module.scss'
import { useStore } from '../../store/store'

const NoteList: FC = () => {
	const { note, deleteNote } = useStore()

	return (
		<div className={s.note__list}>
			<div className={s.container}>
				{note &&
					note.map(item => (
						<div className={s.note__list_card} key={item.id}>
							<div className={s.holder}>
								<p className={s.note__list_card_title}>{item.title}</p>
								<p className={s.note__list_card_content}>{item.content}</p>
							</div>
							<button onClick={() => deleteNote(item.id)}>X</button>
						</div>
					))}
			</div>
		</div>
	)
}

export default NoteList
