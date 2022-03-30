import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

// import { remark } from 'remark'
// import remarkHTML from 'remark-html'
import remarkGfm from 'remark-gfm'
import hljs from 'highlight.js'

import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeDocument from 'rehype-document'
import rehypeFormat from 'rehype-format'
import rehypeStringify from 'rehype-stringify'
import rehypeHighlight from 'rehype-highlight'
import { rehype } from 'rehype'
import {
	remarkExtendedTable,
	extendedTableHandlers,
} from 'remark-extended-table'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeRaw from 'rehype-raw'

const articlesDirectory = path.join(process.cwd(), 'articles')

export function getSortedArticlesData() {
	// Get file names under /articles
	const fileNames = fs.readdirSync(articlesDirectory)
	const allArticlesData = fileNames.map((fileName) => {
		// Remove ".md" from file name to get id
		const id = fileName.replace(/\.md$/, '')

		// Read markdown file as string
		const fullPath = path.join(articlesDirectory, fileName)
		const fileContents = fs.readFileSync(fullPath, 'utf8')

		// Use gray-matter to parse the article metadata section
		const matterResult = matter(fileContents)

		// Combine the data with the id
		return {
			id,
			...matterResult.data,
		}
	})
	// Sort articles by date
	return allArticlesData.sort(({ date: a }, { date: b }) => {
		if (a < b) {
			return 1
		} else if (a > b) {
			return -1
		} else {
			return 0
		}
	})
}

export function getAllArticleIds() {
	const fileNames = fs.readdirSync(articlesDirectory)
	return fileNames.map((fileName) => {
		return {
			params: {
				id: fileName.replace(/\.md$/, ''),
			},
		}
	})
}

export async function getArticleData(id) {
	const fullPath = path.join(articlesDirectory, `${id}.md`)
	const fileContents = fs.readFileSync(fullPath, 'utf8')

	// Use gray-matter to parse the article metadata section
	const matterResult = matter(fileContents)

	// Use remark to convert markdown into HTML string
	const processedContent = await unified()
		// .use(supersub)
		.use(remarkParse)
		.use(remarkGfm)
		.use(remarkExtendedTable)
		.use(
			remarkRehype,
			{ allowDangerousHtml: true },
			{
				handlers: Object.assign({}, extendedTableHandlers),
			}
		)
		.use(rehypeRaw)
		.use(rehypeDocument)
		.use(rehypeFormat)
		.use(rehypeStringify)
		.process(matterResult.content)

	const codehighlight = await rehype()
		.data('settings', { fragment: true })
		.use(rehypeSlug)
		.use(rehypeAutolinkHeadings)
		.use(rehypeHighlight)
		.process(processedContent)

	const contentHtml = codehighlight.toString()

	// Combine the data with the id
	return {
		id,
		contentHtml,
		...matterResult.data,
	}
}
