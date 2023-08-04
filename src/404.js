import { msg } from './config.js'

export default async (req, res) => {
	return res.status(404).json({
		ok: false,
		message: msg.notfound
	})
}
