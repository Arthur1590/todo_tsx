import { FC, useState } from 'react'
import s from './Pages.module.scss'
import SecTitle from '../components/SecTitle/SecTitle'
import Modal from '../components/Modal/Modal'
import NoteList from '../components/NoteList/NoteList'

const Home: FC = () => {
	const [isOpen, setOpen] = useState(false)

	const openModalHandler = () => {
		setOpen(!isOpen)
	}

	return (
		<div className={s.home}>
			<div className='container'>
				<SecTitle title='~ToDO list~~>' />
				<NoteList />
				{isOpen && <Modal open={isOpen} set={setOpen}/>}
				<button onClick={() => openModalHandler()} className={s.modal_btn}>
					+
				</button>
			</div>
		</div>
	)
}

export default Home
