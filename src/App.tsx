import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

function App() {
	const [members, setMembers] = useState([
		{
			name: '',
			email: '',
			id: uuidv4(),
		},
	])

	const handleChange = (
		id: string,
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		const index = members.findIndex(member => member.id === id)

		let _members = [...members] as any
		_members[index][event.target.name] = event.target.value
		setMembers(_members)
	}

	const handleSubmit = () => console.table(members)

	const addMember = () => {
		const _members = [...members]
		_members.push({
			name: '',
			email: '',
			id: uuidv4(),
		})
		setMembers(_members)
	}

	const removeMemberRow = (id: string) => {
		const _members = members.filter(member => member.id !== id)
		setMembers(_members)
	}

	return (
		<div className='App'>
			{members.map(member => (
				<div key={member.id}>
					<label htmlFor='name'>Name</label>
					<input
						name='name'
						type='text'
						onChange={e => handleChange(member.id, e)}
					/>

					<label htmlFor='email'>Email</label>
					<input
						name='email'
						type='text'
						onChange={e => handleChange(member.id, e)}
					/>

					{members.length > 1 && (
						<button onClick={() => removeMemberRow(member.id)}>-</button>
					)}

					<button onClick={addMember}>+</button>
				</div>
			))}

			<button onClick={handleSubmit}>
				Submit
			</button>
		</div>
	)
}

export default App
