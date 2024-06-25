import { Dispatch, FC, SetStateAction, useState } from 'react'
import s from './Modal.module.scss'
import { useStore } from '../../store/store'

interface ModalProps {
	open: boolean
	set: Dispatch<SetStateAction<boolean>>
}

const Modal: FC<ModalProps> = ({ open, set }) => {
	const { addNote } = useStore()
	const [title, setTitle] = useState('')
	const [content, setContent] = useState('')
	const [show, setShow] = useState(true)

	const noteHandler = () => {
		if (title.length >= 2) {
			addNote(title, content)
			setTitle('')
			set(!open)
			setShow(!show)
		}
	}
	const closeModal = () => {
		setShow(!show)
	}

	return (
		<>
			{show && (
				<div className={s.modal} onClick={closeModal}>
					<div className={s.modal__block} onClick={e => e.stopPropagation()}>
						<h2>Добавить заметку</h2>
						<div className={s.modal__block_inputs}>
							<label>
								<input
									type='text'
									value={title}
									onChange={e => setTitle(e.target.value)}
									placeholder='минимум 3 символа'
								/>
								<span>Title</span>
							</label>
							<label>
								<input
									type='text'
									value={content}
									onChange={e => setContent(e.target.value)}
								/>
								<span>Content</span>
							</label>
						</div>
						<div className={s.modal__block_btns}>
							<button className={s.modal__block_btns_add} onClick={noteHandler}>
								Add Todo
							</button>
						</div>
					</div>
				</div>
			)}
		</>
	)
}

export default Modal
