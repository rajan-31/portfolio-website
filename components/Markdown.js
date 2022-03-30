import 'highlight.js/styles/rainbow.css'
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
