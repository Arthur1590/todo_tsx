import { FC } from 'react'

interface ISecTitle {
	title: string
}

const SecTitle: FC<ISecTitle> = ({title}) => {
	return (
		<h1 className='section__title'>{title}</h1>
	)
}

export default SecTitle