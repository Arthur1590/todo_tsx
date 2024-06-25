interface INote {
	title: string
	content: string
	id: number
	completed: boolean
}

interface IUseStore {
note: INote[]
addNote: (title: string, content: string) => void
deleteNote: (id: number) => void
}