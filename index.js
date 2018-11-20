#!/usr/bin/env node
const argv = require('yargs').argv
const docxConverter = require('docx-pdf')
const path = require('path')

if (argv.docx && argv.pdf) {
	docxConverter(
		path.resolve(`${argv.docx}`),
		path.resolve(`${argv.pdf}`),
		(err, result) => {
		if (err) {
			console.error('Error:', err)
		} else {
			console.log('Done!')
		}
	})
} else {
	console.log('Usage: docxtopdf-cli --docx=file.docx --pdf=file.pdf')
}
