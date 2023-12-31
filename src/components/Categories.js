import '../styles/Categories.css'

function Categories({ setActiveCategory, categories, activeCategory }) {

	return (
		<div className='mb-categories'>
			<select
				value={activeCategory}
				onChange={(e) => setActiveCategory(e.target.value)}
				className='mb-categories-select'				
			>
				<option value='' className='option'>---</option>
				{categories.map((cat) => (
					<option key={cat} value={cat} className='option'>
						{cat}
					</option>
				))}
			</select>

			<button className='reset-btn' onClick={() => setActiveCategory('')}>Reset</button>
		</div>
	)
}

export default Categories