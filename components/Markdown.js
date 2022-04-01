// import 'highlight.js/styles/github-dark-dimmed.css'
// import 'highlight.js/styles/github.css'
// import 'highlight.js/styles/atom-one-dark-reasonable.css'

// import 'highlight.js/styles/a11y-dark.css'
// import 'highlight.js/styles/stackoverflow-dark.css'
// import 'highlight.js/styles/base16/ocean.css'
import 'highlight.js/styles/base16/materia.css'

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
