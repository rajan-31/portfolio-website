import fs from 'fs'
import path from 'path'

const projectsDataPath = path.join(process.cwd(), 'lib', 'projects.json')

// get projects details from json file
export function getProjectsData() {
	const projectsList = fs.readFileSync(projectsDataPath, 'utf-8')
	/*[{
		"year": 2023,
		"name": "Automated Exam Proctoring",
		"desc": "A ML model to keep watch on exam candidates through webcam and create and update observations.",
		"article": "/articles/markdown-to-html-demo-article",
		"srcCode": "https://github.com/rajan-31/automated-exam-proctoring",
		"demo": "https://www.irajan.xyz"
	}]*/

	return JSON.parse(projectsList)
}
