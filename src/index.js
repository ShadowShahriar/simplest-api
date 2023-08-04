import dotenv from 'dotenv'
dotenv.config()

import { msg, book } from './config.js'
import obtainBooks from './api/books.js'

async function main(request, response) {
	const { query } = request
	const books = await obtainBooks(query.q || book, 10)
	return response.status(200).json({
		ok: true,
		message: msg.ok,
		auth: !!(query.key && query.key === process.env.ACCESS_KEY),
		query,
		books
	})
}

export default main
