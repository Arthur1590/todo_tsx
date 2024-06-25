import { create } from 'zustand'

export const useStore = create<IUseStore>((set, get) => ({
	note: JSON.parse(localStorage.getItem('note') || '[]'),
	addNote: (title: string, content: string) =>
		set(state => {
			const newNote = {
				id: Math.floor(Math.random() * 100),
				title,
				content,
				completed: false,
			}
			const updateNote = [...state.note, newNote]
			localStorage.setItem('note', JSON.stringify(updateNote))
			return { note: updateNote }
		}),
	deleteNote: (id: number) =>
		set(state => {
			const updateNote = state.note.filter(item => item.id !== id)
			localStorage.setItem('note', JSON.stringify(updateNote))
			return { note: updateNote }
		}),
}))
