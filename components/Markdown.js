// import 'highlight.js/styles/base16/silk-light.css'
// import 'highlight.js/styles/base16/tomorrow.css'
// import 'highlight.js/styles/base16/github.css'
// import 'highlight.js/styles/base16/equilibrium-gray-light.css'

// import 'highlight.js/styles/base16/materia.css'
// import 'highlight.js/styles/base16/dirtysea.css'

const Markdown = ({ content }) => {
	return (
		<div className='mdRoot'>
			<div
				dangerouslySetInnerHTML={{
					__html: content,
				}}
			/>
		</div>
	)
}

export default Markdown
